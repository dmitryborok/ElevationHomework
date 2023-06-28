"use strict";

const Posts = function() {
    let _posts = [
        {
            id: 1,
            name: "John Doe",
            text: "First post!"
        },
        {
            id: 2,
            name: "Bilbo Baggins",
            text: "Lorem ipsum"
        },
    ];
    let _postIdCounter = 2;

    const getPosts = function() {
        return [..._posts];
    }

    const addPost = function(postName, postText) {
        _postIdCounter++;
        _posts.push({id: _postIdCounter, name: postName, text: postText})
    }

    const removePost = function(postID) {
        let index = _posts.findIndex((item) => item.id === postID);
        if (index != -1) {
            _posts.splice(index, 1);
            return true;
        } else {
            console.log(`Post ID ${postID} not found`)
            return false;
        } 
    }

    return {addPost, removePost, getPosts};
}


