export const signup = (user) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: 'api/users',
        data: user,
        contentType: false,
        processData: false
    });
};

export const login = (user) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: 'api/session',
        data: {user}
    });
};

export const logout = () => {
    //debugger
    return $.ajax({
        method: 'DELETE',
        url: 'api/session'
    });
};

export const check_email = (user) => {
    return $.ajax ({
        method: 'GET',
        url: '/api/session/check',
        data: {user}
    })
};