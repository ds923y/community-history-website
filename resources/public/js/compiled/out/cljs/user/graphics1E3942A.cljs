(ns nplay-stocks.graphics
  (:require [play-cljs.core :as p]))

;view-perspective-settings
(def vps
  {::window-size 500})



(defn- main-screen [game data]
  (reify p/Screen
    (on-show [this])
    (on-hide [this])
    (on-render [this]
      (p/render game
                [[:candels {:data data}]
                 [:grid]
                 ]))))



(defmethod
  play-cljs.core/draw-sketch!
  :candels
  [game renderer content parent-opts]

  (.noLoop renderer)
  (.noSmooth renderer)
                                        ;(.noStroke renderer)
  (.strokeWeight renderer 0.2)
  ;(println  game renderer "--" (second content) "<-->" parent-opts)
                                        ;(.strokeWeight renderer 0.9)
                                        ;(.stroke renderer 255 204 0)
  (let
      [[_ opts & children]
       content
       opts
       (play-cljs.options/update-opts
        opts
        parent-opts
        play-cljs.options/basic-defaults)]
    ;(println (:data opts))
    (play-cljs.core/draw-sketch!
     game
     renderer
     (:bars (:data opts))
     opts)
    (play-cljs.core/draw-sketch! game renderer children opts)))


(defmethod
  play-cljs.core/draw-sketch!
  :grid
  [game renderer content parent-opts]
  (let
      [[_ opts & children]
       content
       opts
       (play-cljs.options/update-opts
        opts
        parent-opts
        play-cljs.options/basic-defaults)]
                                        ;(println (:data opts))
    (play-cljs.core/draw-sketch!
     game
     renderer
     [:stroke {:color "black"} [:line {:x1 0, :y1 (::window-size vps), :x2 5000, :y2 (::window-size vps)}]]
     opts)
    (play-cljs.core/draw-sketch! game renderer children opts)))

#_(defn- make-bar-green [bar-width bar-spacing x-axis mx idx {:stock/keys [close open high low]}]
  (let [r-start (+ bar-width bar-spacing)
        middle-offset (/ bar-width 2)
        height-scale (/ x-axis  mx)]
    (if (>= close open)
      [[:rect {:x (* r-start idx), :y (+ x-axis (* -1 height-scale (Math/min open close))), :width bar-width, :height (* -1 height-scale (Math/abs (- close open)))}]
       [:line {:x1 (+ (* idx r-start) middle-offset), :y1 (- x-axis (* height-scale low)), :x2 (+ (* idx r-start) middle-offset), :y2 (- x-axis (* high height-scale))}]]
      )))

(defmacro make-bar [color-predicate]
  `(let [r-start (+ bar-width bar-spacing)
        middle-offset (/ bar-width 2)
        height-scale  (/ x-axis-location  mx)]
    (if ~color-predicate
     [[:rect {:x (* r-start idx), :y (+ x-axis-location (* -1 height-scale (Math/min open close))), :width bar-width, :height (* -1 height-scale (Math/abs (- close open)))}]
      [:line {:x1 (+ (* idx r-start) middle-offset), :y1 (- x-axis-location (* height-scale low)), :x2 (+ (* idx r-start) middle-offset), :y2 (- x-axis-location (* high height-scale))}]]
     )))

(use )
(println (macroexpand-all '(make-bar true)))




(defn- make-rnn [bar-width bar-spacing height-offset x-axis idx {:stock/keys [prediction-rl prediction-rnn low]}]
  (let [r-start (+ bar-width bar-spacing)
        line [:line {:x1 (* r-start idx)  :y1 (- x-axis height-offset) :x2 (+ (* r-start idx) bar-width) :y2 (- x-axis height-offset)}]]
  (case prediction-rnn
    0 [:stroke {:color "green"} line]
    1 [:stroke {:color "yellow"} line]
    2 [:stroke {:color "red"} line])))

(defn- make-rl [bar-width bar-spacing height-offset x-axis idx {:stock/keys [prediction-rl prediction-rnn low]}]
  (let [r-start (+ bar-width bar-spacing)
        line [:line {:x1 (* r-start idx)  :y1 (- x-axis height-offset) :x2 (+ (* r-start idx) bar-width) :y2 (- x-axis height-offset)}]]
    (case prediction-rl
      "buy"  [:stroke {:color "green"} line]
      "hold" [:stroke {:color "yellow"} line]
      "sell" [:stroke {:color "red"} line])))



(defn- make-bars [mx data]
  (letfn [(green-bar [bar-width bar-spacing x-axis mx idx {:stock/keys [close open high low]}]
            (make-bar (>= close open)))
          (red-bar   [bar-width bar-spacing x-axis mx idx {:stock/keys [close open high low]}]
            (make-bar '(< close open)))
          (get-bars [make-bar-fn data]
            (apply concat (remove nil? (map-indexed make-bar-fn data))))]
    (let [make-red-bar    (partial make-bar-red   1 1 (::window-size vps) mx)
          make-green-bar  (partial make-bar-green 1 1 (::window-size vps) mx)]
     {:bars  [[:stroke {:color "green"} (into [:fill {:color "green"}] (get-bars make-green-bar data))]
              [:stroke {:color "red"}   (into [:fill {:color "red"}]   (get-bars make-red-bar data))]]})))


(defn- get-chart-graphic [rsp]
  (let [mx   (* (reduce #(max %1 (get-in %2 [:stock/high])) 1 rsp) 1.05)
        bars (make-bars mx rsp)
        rnn-indicator (vec (map-indexed #(make-rnn 1 1  5 (::window-size vps) %1 %2) rsp))
        rl-indicator  (vec (map-indexed #(make-rl  1 1 20 (::window-size vps) %1 %2) rsp))
        bars-upd      (into (:bars bars) (concat rnn-indicator rl-indicator))]
    {:bars bars-upd}))

(defn- run-visualization [game graphic]
  (doto game
    (p/start)
    (p/set-screen (main-screen game graphic))))



(defn associate-graphic [dom-node rsp]
  
  (let [game (p/create-game
             (.-innerWidth js/window)
             (.-innerHeight js/window) {:parent @dom-node})
        graphic (get-chart-graphic rsp)]
    (run-visualization game graphic)))



