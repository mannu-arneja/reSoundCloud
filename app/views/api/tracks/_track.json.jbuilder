 json.set! track.id do 
    json.extract! track, :id, :title, :author_id, :created_at
    json.author (User.all.find(track.author_id)).username
    json.audioUrl url_for(track.audio)
end