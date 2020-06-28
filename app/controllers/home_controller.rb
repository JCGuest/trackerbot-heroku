class HomeController < ApplicationController

    def index
        redirect_to :file => '.../index.html'
    end
    
end
