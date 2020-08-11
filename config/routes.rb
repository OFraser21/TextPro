Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'text_messages/index'
      post 'text_messages/create'
      get '/show/:id', to: 'text_messages#show'
      delete '/destroy/:id', to: 'text_messages#destroy'
    end
  end
  namespace :messages do
    post 'reply'
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
