import App from '@/components/Form';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <App />
      </div>
    </PageContainer>
  );
};

export default HomePage;
