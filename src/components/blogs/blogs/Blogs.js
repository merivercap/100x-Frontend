import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import BlogPeek from '../BlogPeek';

// Utils
import { fetchBlogs } from '../../../graphql/blogs_api';

class Blogs extends React.Component {
  blogsToRender = [
    {
      id: '1',
      title: 'Bitcoin and Litecoin are Rising while other Cryptocurrencies are falling',
      image_url: 'https://bitcoin.org/img/icons/opengraph.png?1529096753',
      body: 'Bitcoin and Litecoin are both up, but Ethereum, Ripple and Bitcoin Cash are all in red. The leading digital currency has increased more thosanoethu  aocr .a oetu. aohi.rcietoih nstehe snto ethu.caoes random soentu e e.ceh lorem lorem'
    },
    {
      id: '2',
      title: 'This is the second blog ever',
      image_url: 'https://bitcoin.org/img/icons/opengraph.png?1529096753',
      body: 'Bitcoin and Litecoin are both up, but Ethereum, Ripple and Bitcoin Cash are all in red. The leading digital currency has increased more thosanoethu  aocr .a oetu. aohi.rcietoih nstehe snto ethu.caoes random soentu e e.ceh lorem lorem'
    },
    {
      id: '3',
      title: 'Third blog ever',
      image_url: 'https://bitcoin.org/img/icons/opengraph.png?1529096753',
      body: 'Bitcoin and Litecoin are both up, but Ethereum, Ripple and Bitcoin Cash are all in red. The leading digital currency has increased more thosanoethu  aocr .a oetu. aohi.rcietoih nstehe snto ethu.caoes random soentu e e.ceh lorem lorem'
    },
  ];
  
  mapBlogs = () => (
    /** TODO: fetch blogs from backend endpoint and map them into HTTML elements */
    this.blogsToRender.map(blog => <BlogPeek blog={ blog } /> )
  );
  
  render() {
    
    return (
      <Layout>
        <Query query={ fetchBlogs() }>
          {({ data, error, loading }) => {
            if (loading) { return `${ loading }`; }
            if (error) { return `${ error }`; }
            
            return (
              <Fragment>
                <section className="blogs">
                  <content>
                    { this.mapBlogs() }
                  </content>
                </section>
              </Fragment>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default Blogs;
