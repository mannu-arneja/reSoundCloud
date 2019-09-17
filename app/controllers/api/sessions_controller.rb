class Api::SessionsController < ApplicationController

  def check_email

    @user = User.find_by(email: params[:user][:email])
    if @user
      render 'api/users/show'
    else
      render json: ['invalid email']
      # show sign up
    end
  end
  
  def create

    @user = User.find_by_credentials(params[:user][:email],
                                     params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['invalid credentials'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      # render 'api/users/show'
      render json: {}
    else
        render json: ['no user'], status: 404
    end
  end
end
