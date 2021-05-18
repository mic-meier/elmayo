import Layout from 'components/Layout';
import { SITE_NAME } from 'utils/constants';

export default function AboutPage() {
  return (
    <div>
      <Layout title={`${SITE_NAME} | ABOUT`}>
        <p>About</p>
      </Layout>
    </div>
  );
}
