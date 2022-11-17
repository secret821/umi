import { Link, Outlet } from 'umi';
// import 'lib-flexible'

import styles from './index.less';
import HomePage from '@/pages';

export default function Layout() {
  return (
    <div className={styles.navs}>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs2">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
}
