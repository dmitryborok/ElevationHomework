"use strict";

const Renderer = function() {
    const renderPosts = function(posts) {
        const divPostContainer = $("#posts-container");
        divPostContainer.empty(); 
        for (let post of posts) {
            divPostContainer.append(`<div class="post" data-id=${post.id}><b>${post.name}:</b>${post.text}</div>`)
        }
    }

    return {renderPosts};
}