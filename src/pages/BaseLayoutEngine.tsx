import React from 'react';
import Head from 'next/head';
import Header from '../components/common/Header';
import layoutRenderer from '../components/lib/renderers/layoutRenderer';

export default class BaseLayoutEngine extends React.Component {
  props: any;
  static getInitialProps: Function;

  render() {
    const { layout, title } = this.props.data;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Header title={title} />
        <main>{layoutRenderer(layout)}</main>
      </>
    );
  }
}
