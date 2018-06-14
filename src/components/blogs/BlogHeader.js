import React from 'react';

/**
 * TODO:
 * Replace static data with actual data
 */

const BlogHeader = blog => (
  <header className="blog-header">
    <section className="about-author">
      <div className="author-profile-pic">
        {/* { <img src={ blog.author.profile_pic_url } /> } */}
      </div>
      <div className="info">
        <h3>
          tradewonk
          {/* { blog.author.username } */}
        </h3>
        <p>
          2 hours ago
          {/* { blog.updatedAt } */}
        </p>
      </div>
    </section>
    <section>
      <h2>
        $120
        {/* { blog.payout } */}
      </h2>
      <p>
        5 min read
        {/* { blog.readTime } */}
      </p>
    </section>
  </header>
);

export default BlogHeader;