Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :pages
get '/pages/:id', to: 'pages#show'
end
