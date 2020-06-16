class ItemsController < ApplicationController
    before_action :set_user

    def index
        @items = @user.items.all
        render json: {
            logged_in: true,
            items: @items
        }
    end

end
