/*
 * @Date: 2022-09-04 18:07:50
 * @Author: winterchen
 * @Description: TODO
 * @Version: 1.0
 * @LastEditTime: 2022-09-04 18:07:51
 */
// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  return {
    name,
    setName,
  };
};

export default useUser;
