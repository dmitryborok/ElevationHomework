"use strict";

const posts = Posts();
const renderer = Renderer();

renderer.renderPosts(posts.getPosts());

$("#btn-submit").on("click", function() {
    posts.addPost($("#name").val(), $("#post").val());
    $("#name").val("");
    $("#post").val("");
    renderer.renderPosts(posts.getPosts());

});

$("#posts-container").on("click", ".post", function() {
    if (posts.removePost($(this).data("id"))) {
        renderer.renderPosts(posts.getPosts());
    }
});
