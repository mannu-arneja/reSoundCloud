class Api::TracksController < ApplicationController

    def show
        @track = Track.find_by(id:params[:id])
        render :show
    end

    def create
        @track = Track.new(track_params)
        if @track
            render :show
        else
            render json: @track.errors.full_messages
    end

    def update
    end

    def destroy
    end

    def track_params
        params.require(:track).permit(:title, :desc, :author_id)
    end
    
end