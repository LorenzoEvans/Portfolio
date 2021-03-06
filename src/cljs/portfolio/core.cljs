(ns portfolio.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [portfolio.events :as events]
   [clerk.core :as clerk]
   [portfolio.routes :as routes]
   [portfolio.views :as views]
   [portfolio.config :as config]
   ))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn init []
  (clerk/initialize!)
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
