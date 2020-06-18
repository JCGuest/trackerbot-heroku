class ItemsController < ApplicationController
    before_action :set_user

    def index
        @items = @user.items.all
        render json: {
            logged_in: true,
            items: @items
        }
    end

    def create
        @item = @user.items.build(item_params)
        @item.user_id = @user.id
        if @item.save 
            render json: {
                logged_in: true,
                item: @item
            }
        else 
            render json: {
                status: 500,
                errors: @item.errors.full_messages
            }
        end
    end

    private 

    def item_params
        params.require(:item).permit(:name, :location)
    end

end
