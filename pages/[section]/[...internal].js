import React from 'react';
import Layout from "../../layouts/default";

const Section = () => {
  return <Layout>
    <h1>Internal Page</h1>
    <div className="wrapperFlex">
      <div className="col-page">
        <h2>columna 1</h2>
      </div>
      <div className="col-page">
        <h2>columna 2</h2>
      </div>
    </div>
  </Layout>
}

export default Section
