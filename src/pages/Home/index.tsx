import PatientForm from '@/components/Form';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <PatientForm />
      </div>
    </PageContainer>
  );
};

export default HomePage;
