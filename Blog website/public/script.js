document.addEventListener('DOMContentLoaded', function () {
    fetchPosts();

    document.getElementById('postForm').addEventListener('submit', function (event) {
        event.preventDefault();
        createPost();
    });
});

function fetchPosts() {
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            const postsDiv = document.getElementById('posts');
            postsDiv.innerHTML = '';
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
                postsDiv.appendChild(postElement);
            });
        });
}

function createPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
    })
        .then(response => response.json())
        .then(post => {
            document.getElementById('title').value = '';
            document.getElementById('content').value = '';
            fetchPosts();
        });
}
