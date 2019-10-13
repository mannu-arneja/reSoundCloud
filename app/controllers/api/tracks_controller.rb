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
        @track = Track.find_by(id: params[:id])
        if (@track && @track.update_attributes(track_params))
            render :show
        else
            render json: @track.errors.full_messages, status: 401
        end
    end

    def destroy
        @track = Track.find_by(id: params[:id])
        if @track 
            @track.destroy
            render json: @track.id
        else
            render json: ['No such track'], status: 401
        end
    end

    def track_params
        params.require(:track).permit(:title, :desc, :author_id, :audio, :image)
    end
    
end