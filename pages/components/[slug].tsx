import { useRouter } from 'next/router';

import Layout from '@/layout';
import ComponentsPage from '@/modules/ComponentsPage';

export default function App() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <ComponentsPage slug={String(slug)} />
    </Layout>
  );
}
