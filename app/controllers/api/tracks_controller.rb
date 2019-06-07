class Api::TracksController < ApplicationController

    def index
        # @tracks = Track.find_by(author_id: params[:author_id])
        @tracks = Track.all
        render :index
    end

    def show
        @track = Track.find_by(id:params[:id])
        render :show
    end

    def create
        @track = Track.new(track_params)
        if @track.save
            render :show
        else
            render json: @track.errors.full_messages, status: 401
        end
    end

    def update
    end

    def destroy
    end

    def track_params
        params.require(:track).permit(:title, :desc, :author_id, :audio)
    end
    
end