class Api::UsersController < ApplicationController

    def create
        @user = User.new    
    end
    
end