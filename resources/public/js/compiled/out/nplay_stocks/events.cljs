(ns nplay-stocks.events
  (:require
   [re-frame.core :as re-frame]
   [nplay-stocks.db :as db]
   [nplay-stocks.graphics :as g]
   [day8.re-frame.http-fx]
   [ajax.core :refer [GET POST] :as ajax]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-re-pressed-example
 (fn [db [_ value]]
   (assoc db :re-pressed-example value)))

;;;;;;;;;;;;; 
(re-frame/reg-event-db
 :store-text
 (fn
   [db [nm search-text]]
   (println search-text)
   (assoc db :search-text search-text)))

(re-frame/reg-event-db
 :send-dom-node
 (fn
   [db [nm dom-node]]
   (assoc db :dom-node dom-node)))

(re-frame/reg-event-fx                             ;; note the trailing -fx
 :request-it                      ;; usage:  (dispatch [:handler-with-http])
 (fn [{:keys [db]} _]                    ;; the first param will be "world"
   {:db (assoc db :show-twirly true)
    :http-xhrio {:method          :get
     :uri             (str "http://localhost:8080/api/vasebi/main/results-list?ticker=" (:search-text db)) ;;cvrs
     :timeout         8000                                           ;; optional see API docs
     :response-format (ajax/json-response-format {:keywords? true})  ;; IMPORTANT!: You must provide this.
     :on-success      [:process-response]
     :on-failure      [:bad-http-result]}}))

(defn process-row [[m]]
  (update m :stock/date (fn [date] js/Date. date)))

(defn make-response [result]
  (let [row (mapv process-row result)]
    (take-last 200 (sort-by :stock/date row))))

(re-frame/reg-event-db        
 :process-response             
 (fn
   [db [_ response]]
   (let [rsp (make-response response)]
     (println rsp)
     (g/associate-graphic (:dom-node db) rsp))
   db))

(re-frame/reg-event-db              
 :bad-http-result          
 (fn
   [db [_ response]]
   (println "http error")
   db))
