(ns portfolio.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require
   [secretary.core :as secretary]
   [re-frame.core :as re-frame]
   [portfolio.events :as events]
   [pushy.core :as pushy]))

(defn hook-routes []
  (def history (pushy/pushy secretary/dispatch! (fn [x] (when (secretary/locate-route x) x))))
  (pushy/start! history))
  

(defn app-routes []
  (secretary/set-config! :prefix "/")
  ;; --------------------
  ;; define routes here
  (defroute "/" []
    (re-frame/dispatch [::events/set-active-panel :home-panel]))

  (defroute "/about" []
    (re-frame/dispatch [::events/set-active-panel :about-panel]))

  (defroute "/contact" []
    (re-frame/dispatch [::events/set-active-panel :contact-panel]))
  
  (hook-routes))