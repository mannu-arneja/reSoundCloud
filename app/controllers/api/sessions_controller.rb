class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:username][:username],
                                     params[:username][:password])

    if @user
      login(@user)
    #   render
    else
      render json: ['invalid credentials'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
        render json ['no user'], status: 404
    end
  end
end
