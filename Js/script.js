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

function fmt(command, value = null) {
  document.execCommand(command, false, value);
  document.getElementById('commentBox').focus();
}

function postComment() {
  const box = document.getElementById('commentBox');
  const content = box.innerHTML.trim();
  if (!content || content === '') return;

  // Your existing post logic here
  // For now just clears the box after posting
  console.log('Comment posted:', content);
  box.innerHTML = '';
}