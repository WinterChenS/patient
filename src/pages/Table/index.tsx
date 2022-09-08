import services from '@/services/patient';

import {
  ActionType,
  PageContainer,
  ProDescriptions,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Drawer } from 'antd';
import React, { useRef, useState } from 'react';

const { queryPatientList } = services.PatientController;

const TableList: React.FC<unknown> = () => {
  useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [row, setRow] = useState<API.PatientInfo>();
  const columns: ProDescriptionsItemProps<API.PatientInfo>[] = [
    {
      title: 'Id',
      dataIndex: 'id',
      tip: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      tip: 'patient name',
    },
    {
      title: 'Brithday',
      dataIndex: 'brithday',
      valueType: 'date',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      valueType: 'text',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      ellipsis: true,
      valueType: 'text',
    },
    {
      title: 'Photo',
      dataIndex: 'photo',
      valueType: 'image',
    },
    {
      title: 'AppointmentTime',
      dataIndex: 'appointment_time',
      valueType: 'dateTime',
    },
    // {
    //   title: '操作',
    //   dataIndex: 'option',
    //   valueType: 'option',
    //   render: (_, record) => (
    //     <>
    //       <a
    //         onClick={() => {
    //           handleUpdateModalVisible(true);
    //           setStepFormValues(record);
    //         }}
    //       >
    //         配置
    //       </a>
    //       <Divider type="vertical" />
    //       <a href="">订阅警报</a>
    //     </>
    //   ),
    // },
  ];

  return (
    <PageContainer
      header={{
        title: 'Table of patient',
      }}
    >
      <ProTable<API.PatientInfo>
        headerTitle="Query Table"
        actionRef={actionRef}
        rowKey="id"

        search={false}
        // toolBarRender={() => [
        //   <Button
        //     key="1"
        //     type="primary"
        //     onClick={() => handleModalVisible(true)}
        //   >
        //     新建
        //   </Button>,
        // ]}
        request={async (params) => {
          const { data, success } = await queryPatientList({
            page_num: params.current,
            page_size: params.pageSize,
          });
          return {
            data: data?.list || [],
            total: data?.total || 0,
            success,
          };
        }}
        columns={columns}
        rowSelection={false}
      />

      <Drawer
        width={600}
        visible={!!row}
        onClose={() => {
          setRow(undefined);
        }}
        closable={false}
      >
        {row?.name && (
          <ProDescriptions<API.PatientInfo>
            column={2}
            title={row?.name}
            request={async () => ({
              data: row || {},
            })}
            params={{
              id: row?.name,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
