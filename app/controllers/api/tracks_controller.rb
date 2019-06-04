class Api::TracksController < ApplicationController

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end

    def track_params
        params.require(:track).permit(:title, :desc, :author_id)
    end
    
end