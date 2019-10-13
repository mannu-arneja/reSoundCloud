 json.set! track.id do 
    json.extract! track, :id, :title, :desc, :author_id, :created_at
    json.author (User.all.find(track.author_id)).username
    json.audioUrl url_for(track.audio)  
    json.imageUrl track.image.attached? ? url_for(track.image) : nil
end