import React from 'react';

const BlogHeader = ({ blog }) => {
  const payoutValue = parseInt(blog.pendingPayoutValue).toFixed(2);
  return (
    <header className="blog-header">
      <section className="about-author">
        <div className="author-profile-pic">
          {/* { <img src={ blog.author.profile_pic_url } /> } */}
        </div>
        <div className="info">
          <h3>
            { blog.author }
          </h3>
          <p>
            { blog.created }
          </p>
        </div>
      </section>
      <section>
        <h2>
          ${ payoutValue }
        </h2>
        <p>
          {/* { blog.readTime } */}
        </p>
      </section>
    </header>
  );
}

export default BlogHeader;
