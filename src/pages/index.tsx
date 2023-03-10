import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import IndexLayout from '@components/layout/IndexLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <IndexLayout>
        <main className={styles.main2}>
          <div className={styles.description2}>
            <div className={styles.indexBlock}>
              <h2>Source code of this page</h2>
              <ul>
                <li>
                  <Link href="https://github.com/kenlai141/next-app-demo">source</Link>
                </li>
              </ul>
            </div>
            <div className={styles.indexBlock}>
              <h2>MarketPlace Demo</h2>
              <ul>
                <li>
                  <Link href="/marketplace">/marketplace</Link>
                </li>
                <li>
                  <Link href="/login">/login</Link>
                </li>
              </ul>
            </div>
            <div className={styles.indexBlock}>
              <h2>Tutorial Pages</h2>
              <ul>
                <li>
                  <Link href="/custom-hook">/custom-hook</Link>
                </li>
                <li>
                  <Link href="/form-demo/create">/form-demo</Link>
                </li>
                <li>
                  <Link href="/icon-demo">/icon-demo</Link>
                </li>
                <li>
                  <Link href="/layout-demo">/layout-demo</Link>
                </li>
                <li>
                  <Link href="/lifecycle">/lifecycle</Link>
                </li>
                <li>
                  <Link href="/mui-demo">/mui-demo</Link>
                </li>
                <li>
                  <Link href="/sass-demo">/sass-demo</Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </IndexLayout>
    </>
  );
}
