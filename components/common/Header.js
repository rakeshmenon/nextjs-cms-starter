import { withRouter } from 'next/router';
import { Link } from '../../server/routes';

const Header = ({ ctx, router, title }) => (
  <div role="navigation">
    <Link route="/">
      <a style={styles.a} className={router.asPath === '/' ? 'active' : null}>
        <span>Home</span>
      </a>
    </Link>

    <Link route="/about">
      <a
        style={styles.a}
        className={router.asPath === '/about' ? 'active' : null}
      >
        <span>About</span>
      </a>
    </Link>
    <h1>{title}</h1>
  </div>
);

export default withRouter(Header);

const styles = {
  a: {
    marginRight: 10,
    borderRight: '1px solid #555',
    paddingRight: 10
  }
};
