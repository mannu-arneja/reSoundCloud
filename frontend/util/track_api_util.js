export const fetchTrack = (id) => {
    return $.ajax({
        method:'GET',
        url: `/api/tracks/${id}`,
    })
}

export const fetchTracks = () => {
    return $.ajax({
        method:'GET',
        url: '/api/tracks/',
    })
}

export const uploadTrack = track => {
    return $.ajax ({
        method:'POST',
        url: '/api/tracks',
        data: track,
        contentType: false,
        processData: false
    })
}

export const deleteTrack = id => {
    return $.ajax ({
        method: 'DELETE',
        url: `/api/tracks/${id}`
    })
}