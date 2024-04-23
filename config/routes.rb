Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, only: :sessions
  # Define your application routes wper the DSL in https://guides.rubyonrails.org/routing.html

  root "home#index"
  resources :articles
  resources :projects
  resources :offlines
  get "/theme95" => "theme95#show"
  get "/hireme" => "hire_me#index"

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
