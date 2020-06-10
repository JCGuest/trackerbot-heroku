Rails.application.routes.draw do

  resources :users

  get '/login', to: 'sessions#new'
  post '/sessions', to: 'sessions#create', as: "sessions"
  get '/logout', to: 'sessions#destroy'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/sessions', to: 'sessions#new'
  get 'clerks', to: 'clerks#new'

end
