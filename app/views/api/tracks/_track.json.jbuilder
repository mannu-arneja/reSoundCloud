json.set! track.id do 
    json.extract! track, :id, :title, :author_id, :created_at
end