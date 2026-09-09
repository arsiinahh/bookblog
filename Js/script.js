function likePost(btn) {
    btn.classList.toggle('liked');
    btn.textContent = btn.classList.contains('liked') ? '♥ Liked' : '♡ Like';
}

function openModal(d) {
     const stars = '★'.repeat(d.rating) + '<span style="opacity:.25">★</span>'.repeat(5 - d.rating);

     document.getElementById('modalBody').innerHTML = `
         ${d.cover ? `<img src="${d.cover}" style="width:78px;border-radius:6px;margin-bottom:14px;display:block;">` : ''}
         <h2>${d.title}</h2>
         ${d.author ? `<div class="modal-author">by ${d.author}</div>` : ''}
         <div class="modal-stars">${stars}</div>
         <div class="modal-review">${d.review}</div>
         <div class="comment-section-modal">
             <h4>Comments</h4>
             <div id="modalComments"></div>
             <div class="comment-input-wrap">
                 <input id="modalCommentInput" placeholder="leave a sweet comment...">
                 <button onclick="addModalComment()">Post</button>
             </div>
         </div>`;

     document.getElementById('modalOverlay').classList.add('open');
     document.body.style.overflow = 'hidden';
 }

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

function addModalComment() {
    const input = document.getElementById('modalCommentInput');
    const text = input.value.trim();
    if (!text) return;
    const div = document.createElement('div');
    div.className = 'comment';
    div.textContent = text;
    document.getElementById('modalComments').appendChild(div);
    input.value = '';
}
