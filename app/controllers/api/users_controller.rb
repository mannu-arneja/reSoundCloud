class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status:422
        end
    end

    def show
        @user = User.find_by(id: params[:id])

        if @user
            @songs = @user.tracks
            render :show
        else
            render json: ["User not found"], status: 404
        end
        
    end

    def user_params
        params.require(:user).permit(:username, :password, :email, :photo, :gender, :age, :location, :bio)
    end
    
end