function likePost(button) {
    if (button.innerText === '♡ Like') {
        button.innerText = '♥ Liked';
    } else {
        button.innerText = '♡ Like';
    }
}

function addComment(btn) {
    const input = btn.previousElementSibling;
    const text = input.value.trim();
    if (text === '') return;

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerText = text;

    const commentsContainer = btn.parentElement.previousElementSibling;
    commentsContainer.appendChild(commentDiv);

    input.value = '';
}