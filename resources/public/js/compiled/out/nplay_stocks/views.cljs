(ns nplay-stocks.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [re-com.core :as re-com]
   [re-pressed.core :as rp]
   [nplay-stocks.events :as events]
   [nplay-stocks.subs :as subs]
   ))

(defn dispatch-keydown-rules []
  (re-frame/dispatch
   [::rp/set-keydown-rules
    {:event-keys [[[::events/set-re-pressed-example "Hello, world!"]
                   [{:which 72} ;; h
                    {:which 69} ;; e
                    {:which 76} ;; l
                    {:which 76} ;; l
                    {:which 79} ;; o
                    ]]
                  [[:request-it]
                   [{:which 13} ;;enter
                    ]]]

     :clear-keys
     [[{:which 27} ;; escape
       ]]}]))

(defn display-re-pressed-example []
  (let [re-pressed-example (re-frame/subscribe [::subs/re-pressed-example])]
    [:div

     [:p
      "Re-pressed is listening for keydown events. However, re-pressed
      won't trigger any events until you set some keydown rules."]

     [:div
      [re-com/button
       :on-click dispatch-keydown-rules
       :label "set keydown rules"]]

     [:p
      [:span
       "After clicking the button, you will have defined a rule that
       will display a message when you type "]
      [:strong [:code "hello"]]
      [:span ". So go ahead, try it out!"]]

     (when-let [rpe @re-pressed-example]
       [re-com/alert-box
        :alert-type :info
        :body rpe])]))

(defn title []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :label (str "Hello from " @name)
     :level :level1]))

(defn request-it-button
    []
  (let [model (reagent/atom "")]
   [:div #_{:class "button-class"
            :on-click  #(re-frame/dispatch [:request-it])} 
    #_"I want it, now!"

    #_[re-com/input-text :on-change #(re-frame/dispatch [:store-text %]) :model "asdf"]]))

(defn hello-component
    []
    (let [dom-node (reagent/atom nil)]
      (reagent/create-class
       {:component-did-mount
        (fn [x]
          (when @dom-node
            (re-frame/dispatch [:send-dom-node dom-node])))
        :reagent-render (fn [x] [:div
                                 [:span "under"]
                                 [:div {:ref (fn [y] (reset! dom-node y))} "loading"]])
        :componentWillUnmount (fn [x] (reset! dom-node nil))})))


(defn new-todo-input []
  (let [val (reagent/atom "")
        stop #(reset! val "")
        save #(let [v (-> @val str clojure.string/trim)]
                (when (seq v) (identity v))
                (stop))]
    (fn []
      [re-com/box
       :size "auto"
       :child [re-com/input-text
               :model val
               :placeholder "Enter a new todo"
               :on-change #(do (reset! val %)
                               (save))
               :change-on-blur? true]])))

(def click-count (reagent/atom 0))

(defn counting-component []
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(defn main-panel []
  (let [model (reagent/atom "")]
   [re-com/v-box
    :height "100%"
    :children [[title]
                                        ;[re-com/input-text :on-change #(re-frame/dispatch [:store-text %])]
                                        ;(new-todo-input)
               (counting-component)
                                        ;((new-todo-input))
               [re-com/input-text :on-change #(re-frame/dispatch [:store-text %]) :model model]
               (request-it-button)
               [hello-component]
               [:span "high"]
               [display-re-pressed-example]
               ]]))

