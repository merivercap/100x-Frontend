import React from 'react';

const Comment = comment => (
  <div className="comment">
    <div className="author-profile-pic">
      {/* { comment.author.profile_pic_url } */}
    </div>
    <div className="content">
      <div className="info">
        <h4>
          steemUser
          {/* { comment.author.username } */}
        </h4>
        <p>
          3 hours ago
          {/* { comment.updated_at } */}
        </p>
      </div>
    </div>
  </div>
);

export default Comment;