// React
import React from 'react';

const BlogHeader = ({ blog }) => {
  const payoutValue = parseInt(blog.pendingPayoutValue, 10).toFixed(2);
  const { author } = blog;
  if (!author) return <div>Blog has no author</div>;
  const profileImageUrl = author && author.profileImageUrl ? author.profileImageUrl : 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1482131647/person-solid_telh7f.png';
  debugger;
  return (
    <header className="blog-header">
      <section className="about-author">
        <div className="author-profile-pic" style={{ backgroundImage: `url(${profileImageUrl})` }}></div>
        <div className="info">
          <h3>{author.name}</h3>
          <p>{blog.createdAt}</p>
        </div>
      </section>
      <section>
        <h2>${payoutValue}</h2>
        <p>{/* { blog.readTime } */}</p>
      </section>
    </header>
  );
}

export default BlogHeader;


function parseTo
