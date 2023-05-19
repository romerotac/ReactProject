export const setPost = (post) => {
    return{
    type: 'SET_POST',
    payload:post,
    };
};

export const latestPost = () =>{
    return{
        type: 'LATEST_POST'
    };
}

export const recentPost = () =>{
    return{
        type: 'RECENT_POST'
    };
}

export const mostLikedPost = (likedList) => {
    return{
        type: 'MOST_LIKED_POST',
        payload:likedList,
    };
}

export const setLiked = (liked) => {
    return{
    type: 'SET_LIKED',
    payload: liked
    }
}

export const addWhoLiked = (likeid,whoLiked) => ({
    type: 'ADD_WHO_LIKED',
    payload: {likeid,whoLiked},
})

export const removeWhoLiked = (likeid,whoLiked) => ({
    type: 'REMOVE_WHO_LIKED',
    payload: {likeid,whoLiked},
})

export const editName = fullName =>({
    type:'PROFILE_EDIT_CLICKED',
    payload:{fullName},
});

export const editEmail = email =>({
    type:'EMAIL_EDIT_CLICKED',
    payload:{email},
});

export const editState = state =>({
    type:'STATE_EDIT_CLICKED',
    payload:{state},
});

export const editfavoriteCamera = favoriteCamera =>({
    type:'FAVORITECAMERA_EDIT_CLICKED',
    payload:{favoriteCamera},
});

export const editPhoto = photo =>({
    type:'PROFILEPHOTO_EDIT_CLICKED',
    payload:{photo},
});


