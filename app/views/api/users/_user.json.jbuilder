json.set! user.id do 
    json.extract! user, :id, :username, :email
    json.photoUrl user.photo.attached? ? url_for(user.photo) : nil
end