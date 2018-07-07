// React
import React from 'react';

// Apollo / GraphQL
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// HOCs
import Layout from '../../HOCs/Layout';

// Utils
import { fetchBlogs } from '../../graphql/blogs_api';

const QUERY = gql`
    {
      getAllPosts {
        id,
        author,
        body,
        title,
      }
    }
  `

const Landing = () => (
  <Layout>
    <section className="landing">
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) {
            console.log('error: ', error);
            return `Error in Landing! ${error.message}`;
          }

          return (
            <select name="blog">
              {data.blogs.map(blog => (
                <div key={blog.id}>
                  title: {blog.title}
                  body: {blog.body}
                  author: {blog.author}
                </div>
              ))}
            </select>
          );
        }}
      </Query>
    </section>
  </Layout>
);

export default Landing;

// const Dogs = ({ onDogSelected }) => (
//   <Query query={GET_DOGS}>
//     {({ loading, error, data }) => {
//       if (loading) return 'Loading...';
//       if (error) return `Error! ${error.message}`;

//       return (
//         <select name="dog" onChange={onDogSelected}>
//           {data.dogs.map(dog => (
//             <option key={dog.id} value={dog.breed}>
//               {dog.breed}
//             </option>
//           ))}
//         </select>
//       );
//     }}
//   </Query>
// );