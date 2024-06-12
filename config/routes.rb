Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, only: :sessions
  # devise_for :users, path_names: { sign_in: 'login', sign_out: 'logout' }
  # Define your application routes wper the DSL in https://guides.rubyonrails.org/routing.html

  devise_scope :user do
    # get '/users/sign_out' => 'devise/sessions#destroy'
  end

  root "home#index"
  resources :projects
  # resources :hire_me, only: [:new, :create]
  get "/theme98" => "theme98#show"
  get "/hire_me" => "hire_me#new"
  post "/hire_me" => "hire_me#create"
  get "/hire_me/submissions" => "hire_me#index"

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
