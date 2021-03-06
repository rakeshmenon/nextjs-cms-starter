import React from 'react';
import ReactDOM from 'react-dom';
import ExecutionEnvironment from 'exenv';
import App, { Container } from 'next/app';
import BaseComponent from './BaseLayoutEngine';
import getConfig from 'next/config';
import { NextAppContext } from 'next/app';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const { publicRuntimeConfig } = getConfig();

if (process.env.NODE_ENV !== 'production' && ExecutionEnvironment.canUseDOM) {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

export default class CustomApp extends App {
  static async getInitialProps({ ctx }: NextAppContext) {
    let pageProps: any = {};

    const response = await fetch(
      `${publicRuntimeConfig.PAGE_SERVICE_DOMAIN}/page-service${
        ctx.asPath === '/' ? '/home' : ctx.asPath
      }`,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );
    pageProps.data = await response.json();

    if (BaseComponent.getInitialProps) {
      pageProps = await BaseComponent.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { pageProps } = this.props;

    return (
      <Container>
        <BaseComponent {...pageProps} />
      </Container>
    );
  }
}
