class Api::SessionsController < ApplicationController
  def create

    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])

    if @user
      # debugger;
      login(@user)
      render 'api/users/show'
    else
      render json: ['invalid credentials'], status: 401
    end
  end

  def destroy
    # debugger;
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
        render json: ['no user'], status: 404
    end
  end
end
