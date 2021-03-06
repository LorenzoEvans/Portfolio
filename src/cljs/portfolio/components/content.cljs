(ns portfolio.components.content
  (:require [portfolio.styles :refer [content-area project-container project-link
                                   project-content nav-span doc-span name-cta
                                   skill-style project-content-area experience-content-area
                                   skills-content-area f-row-wrap content-container
                                   skills-container expr-bullet experience-container
                                   project-title project-about]]))
(def skills 
  [
   "Javascript"
   "React"
   "Clojure/Script"
   "Node/Express"
   "CSS, variants"
  "Data Engineering"
  "Systems",
   "Agile"
   "RDBMS"
   "Testing"
   "Python"
   "Deployment"
   "Algorithms"
   "Data Structures"
   "GraphQL"
   "FP"
   "OOP"
   "Git"
   "SQL"])

; Projects map

(def projects 
  [ {:name "Kurogane OS"
    :about "A small 16-bit operating system based on x86_64 architecture, can be written to bare metal, thumb-drive, or ran in a VM."
    :tech-used ["Rust" "x86_64 Architecture" "QEMU"]
    :repo "https://github.com/LorenzoEvans/kurogane_os"}
    {:name "Lisp Parser"
    :about "Decided to try my hand and developing a lisp parser, completed tokenization, now working on Abstract Syntax Tree generation/evaluation."
    :tech-used ["Rust"]}
    {:name "Kaiser Insurance Group"
    :about "Freelance project done for an associate, who needed a quick landing page for an insurance company they're starting."
    :tech-used ["React" "Node/Express" "UI-Kit" "Zoho" "Tachyons" "CSS"]
    :app-link "https://www.mykaisergroup.com/",
    :repo "Unfortunately, I can't link to it, as the code is proprietary."}
    {:name "Synths For Compilers"
    :about "Personal micro-blog for tech-related/miscellaneous things I find interesting, and chronicling my experience and growth with the FP paradigm, cloud-computing, systems, etc."
    :tech-used ["Orchid (Static Site Generator)"]
    :app-link "https://www.synthsforcompilers.dev"
    :repo "https://github.com/LorenzoEvans/m-s"}
    {:name "Clojurena"
    :about "A library that acts as a wrapper over the are.na API."
    :tech-used ["Clojure"]
    :app-link "https://clojars.org/clojurena"
    :repo "https://github.com/LorenzoEvans/clojurena"}
    {:name "Dungeon Game"
    :about "A CLI text adventure game written in python (working on deployment/persistence)."
    :repo "https://github.com/LorenzoEvans/Intro-Python-II/tree/web-app"
    :tech-used ["Python", "SQLAlchemy", "GraphQL"]}
    {:name "Lambda Notes API"
    :about "Lambda Notes API is a backend API for a note taking web-application, deployed with data persistence."
    :tech-used ["JavaScript" "Node" "Express" "SQL"]
    :repo "https://github.com/LorenzoEvans/back-end-project-week"}
    {:name "RateMyDIY"
    :about "RateMyDiy targets people who want to get up and get productive and learn different skills. It utilizes a rating system to analyze the most effective and enjoyed projects, project makers, and reviewers. This will allow the projects and user generated content that is most beneficial to the community to be the most available to people who are looking for high quality information."
    :tech-used ["Firebase" "GraphQL/Apollo" "Prisma" "Sendgrid" "Stripe" "Cloudinary" "React" "SASS"]
    :docs "https://ratemydiy.github.io/Documentation/Architecture.html"
    :app-link "http://ratemydiy.tk"
    :repo "https://github.com/Lambda-School-Labs/labspt2-rate-my-diy"}
    {:name "Personote"
    :about "Minimalist desktop Todo app, written in Clojure, via cljfx, a wrapper for the OpenJFX GUI library."
    :tech-used ["Clojure", "OpenJFX"]
    :repo "https://github.com/LorenzoEvans/personote"}
    ])
   
    
; Experience map

(def experience
  [ {:title "Team Lead (Computer Science)"
    :duration "Present"
    :job-desc ["Assisting 5 - 9 students in learning CS concepts such as recursion, time complexity, data structures, and searching and sorting algorithms, using agile
    methodologies, such as daily stand-ups, sprints and retrospectives."]}
    {:title "Team Lead (Back End)"
    :duration "May 2019 - July 2019"
    :job-desc ["Supported 5-9 students in learning, meeting MVP in various frameworks, across all levels of the stack, using agile methods."
               "Received 2.87 / 3 rating as a Team Lead."
               "Piloted new school-wide video feed-back program, via retrospectives covering student/TL experience with program."
               "Took part in daily stand ups, code reviews, on-on-ones, and help desks with Section Leads, fellow TL’s and students."]}
   {:title "Team Lead (Careers)"
    :duration "Dec 2019 - Feb 2020"
    :job-desc ["Supported 5-9 students in advancing their technical abilities, polishing their portfolio, and their resume."
               "Provide students with internal and external resources for technical assessment tests, and interviews."
               "Attend daily technical/development review lectures with students."
               "Be available to trouble-shoot bugs with developer portfolio applications, from styling to deployment, etc."]}])

(defn skills-component []
  (fn []
    [:section.tc {:class skills-content-area} "Skills"
    [:div {:class skills-container}
      [:a.no-underline.f1 {:class skill-style :href "https://www.youracclaim.com/badges/4582280c-e647-4665-b2f3-d34d9a83833b/public_url"} "AWS"]
      (for [item skills]
       ^{:key item}
       [:span {:class skill-style} item])]])) 
      
(defn experience-component []
  (fn []
   [:section.tc {:class skills-content-area} "Experience"
    [:div.content-center.items-center.self-center.h-100
     (for [expr experience]
       [:div.flex.flex-column.justify-between.h-100
        [:span.f2.tc.mt1 (:title expr)]
        (for [bullet (expr :job-desc)]
         [:div {:class expr-bullet} bullet])])]]))

(defn project-component []
 (fn []
  [:div
   [:section.tc {:class project-content-area} "Projects"
    (for [project projects]
     [:div.self-center.items-center.content-center.ba.bw3 {:class project-container}
      ^{:key (:name project)}
      [:div {:class project-title} (:name project)
       [:div {:class project-about} (:about project)]]
      (if (not= (:app-link project) nil)[:a {:class project-link
           :href (:app-link project)} "Link To Project"] nil)
      (if (not= (:docs project) nil)
       [:a.no-underline.near-black.hover-light-gray.hover-animate {:class project-link :href (:docs project)} "Documentation"] nil)
      [:a {:href (:repo project) :class project-link} "GitHub Repo"]
      [:div.bt.bw2.w-100.pt2 "Technology Used"
       [:div.tc.flex.flex-row.flex-wrap
        (for [item (:tech-used project)]
         [:div.ma2.ba
          [:div.hover-near-black.grow.glow.hover-bg-moon-gray.hover-animate.f3.pa2.cursor item]])]]])]]))

(defn content-side []
  (fn []
   [:div {:class content-container}
    [skills-component]
    [experience-component]
    [project-component]]))
