import styles from '../styles/Home.module.css';
import Link from 'next/link';
import IndexLayout from '@components/layout/IndexLayout';
import { Box, Stack, SvgIcon } from '@mui/material';
import NodeJsIcon from '@components/Icon/Node-logo.svg';
import PythonIcon from '@components/Icon/Python-5.svg';
import SpringBootIcon from '@components/Icon/spring-icon.svg';
import TypescriptIcon from '@components/Icon/typescript.svg';
import AwsIcon from '@components/Icon/aws-svgrepo-com.svg';
import HtmlIcon from '@components/Icon/html-1.svg';
import NextIcon from '@components/Icon/next-js.svg';
import NestIcon from '@components/Icon/nestjs.svg';
import VueIcon from '@components/Icon/vue-js-1.svg';
import K8sIcon from '@components/Icon/kubernetes-svgrepo-com.svg';
import DockerIcon from '@components/Icon/docker.svg';

export default function Home() {
  return (
    <>
      <IndexLayout>
        <main className={styles.main2}>
          <div className={styles.description2}>
            <div className={styles.indexBlock}>
              <h2>My tech profile</h2>
              <Box style={{ padding: '12px' }}>
                <Stack direction={'row'} spacing={2} flexWrap={'wrap'}>
                  <SvgIcon fontSize="large" component={PythonIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={SpringBootIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={NodeJsIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={TypescriptIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={DockerIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={AwsIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={NestIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={HtmlIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={NextIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={VueIcon} inheritViewBox />
                  <SvgIcon fontSize="large" component={K8sIcon} inheritViewBox />
                </Stack>
              </Box>
            </div>
            <div className={styles.indexBlock}>
              <h2>Backend Projects&#39; related articles</h2>
              <ul>
                <li>
                  <Link href="/">spring boot (Not yet ready)</Link>
                </li>
                <li>
                  <Link href="https://exultant-palladium-f95.notion.site/AWS-6ded0e3e7f8f49edb603a6c68d8b3b40">
                    aws
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.indexBlock}>
              <h2>MarketPlace Demo (Nextjs)</h2>
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
              <h2>Source code of this page</h2>
              <ul>
                <li>
                  <Link href="https://github.com/kenlai141/next-app-demo">source</Link>
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
