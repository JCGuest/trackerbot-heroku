class HomeController < ApplicationController

    def index
        redirect_to :file => 'public/src/index.html'
    end
    
end
