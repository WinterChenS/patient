import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';


const onClick = () => {
	history.push('/home');
}

const Success = () => (
	<PageContainer ghost title=" ">
		<div className={styles.container}>
			<Result
				status="success"
				title="Submit Successfully!!"
				subTitle="thanks!!"
				extra={[
					<Button type="primary" key="console" onClick={onClick}>
						Back
					</Button>
				]}
			/>
		</div>
	</PageContainer>

);

export default Success;