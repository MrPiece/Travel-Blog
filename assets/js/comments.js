const comments = document.querySelectorAll('.comment-item');

comments.forEach(comment => {
  nestComments(comment);
  showReplyForms(comment);
});


function nestComments(comment) {
  if (comment.dataset.nesting) {
    comment.classList.add('nested');
  } else {
    comment.querySelector('.comment-item__body').innerHTML += `
      <button class="comment-item__reply">Reply</button>

      <div class="reply-container">
        <form action="#" method="post" class="comments reply-form">
          <label for="name">Full name</label>
          <input type="text" id="name" name="name">
          <label for="email">Email <small>(it won't be displayed)</small></label>
          <input type="text" id="email" name="email">
          <label for="reply">Comment</label>
          <textarea name="reply" id="reply" cols="30" rows="7"></textarea>
          <button type="submit" class="action-button">Post the comment</button>
        </form>
      </div>
    `;
  }
}


function showReplyForms(comment) {
  const showButton = comment.querySelector('.comment-item__reply');

  if (showButton) {
    const replyForm = comment.querySelector('.reply-form');
    const replyContainer = comment.querySelector('.reply-container');
  
    showButton.addEventListener('click', event => {
      if (replyContainer.clientHeight > 0)
        replyContainer.style.height = `0px`;
      else 
        replyContainer.style.height = `${replyForm.clientHeight + 20}px`;
    });
  }
}