import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>はっはっは</h1>
        <p>変なURLを踏んだね。</p>
      </Layout>
    )
  }
}

export default NotFoundPage
