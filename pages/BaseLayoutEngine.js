import Head from 'next/head';
import Header from '../components/common/Header';
import layoutRenderer from '../components/lib/renderers/layoutRenderer';

export default class BaseLayoutEngine extends React.Component {
  render() {
    const { layout, title } = this.props.data;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Header title={title} />
        <main role="main">{layoutRenderer(layout)}</main>
      </>
    );
  }
}
