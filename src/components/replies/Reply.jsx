import React from 'react';

const ReplyHeader = ({ reply }) => {
  const { commenter } = reply;
  if (!commenter) {
    return <div>Comment has no author.</div>;
  }
  const profileImageUrl = commenter.profileImageUrl ? commenter.profileImageUrl : 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1539314358/avatar_nt5vnh.jpg';
  return (
    <header className="reply-header">
      <div className="author-profile-pic" style={{ backgroundImage: `url(${profileImageUrl})` }}></div>
      <div className="info">
        <h3>{commenter.name}</h3>
        <p>{reply.createdAt}</p>
      </div>
    </header>
  );
};

const Reply = ({ reply }) => {
  return (
    <div className="reply-container">
      <div className="reply-wrapper">
        <div className="reply-content">
          <ReplyHeader reply={ reply } />
          <p>{reply.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Reply;
