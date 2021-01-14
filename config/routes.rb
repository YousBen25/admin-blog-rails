Rails.application.routes.draw do
  root to: 'pages#home'

  get "/posts/new", to: 'pages#home'
  get "/posts/:id", to: 'pages#home'

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do # creating a version so we can create other version later and keep all kind of clients
      resources :posts, only: [:index, :show, :create]
    end
  end
end
