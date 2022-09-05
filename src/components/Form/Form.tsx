import { Button, Form, Input, DatePicker, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { Moment } from 'moment';
import React, { useState } from 'react';
import services from '@/services/patient';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import type { UploadChangeParam } from 'antd/es/upload';
import moment from 'moment';

const { addPatient, uploadPatientPhoto } = services.PatientController;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const disabledDateBefore = (current: Moment) => {
  return current && current < moment().subtract(1, "days");
}

const disabledDateAfter = (current: Moment) => {
  return current && current >= moment().endOf('day');
}







const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};





/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const App = () => {

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  // add patient
  const handleAdd = async (fields: API.PatientInfo) => {
    const hide = message.loading('adding');
    try {
      fields.user.photo = imageUrl;
      await addPatient({ ...fields.user });
      hide();
      message.success('add success');
      return true;
    } catch (error) {
      hide();
      message.error('add failed');
      return false;
    }
  }

  // upload photo
  const uploadPhoto = async (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
    }
    const hide = message.loading('uploading');
    try {
      let fileObj = info.file.originFileObj ? info.file.originFileObj : info.file
      const response = await uploadPatientPhoto({
        file: fileObj,
      });
      hide();
      if (response.code === 200) {
        message.success('upload success');
        setImageUrl(response.data.url);
        setLoading(false);
        return response.data;
      } else {
        message.error('upload failed');
        setLoading(false);
        return false;
      }
    } catch (error) {
      hide();
      message.error('upload failed');
      setLoading(false);
      return false;
    }
  }


  const normFile = (e: any) => {
    return e.url = imageUrl;
  };



  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );


  return (
    <Form {...layout} name="nest-messages"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      onFinish={handleAdd} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'brithday']}
        label="Brithday"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker disabledDate={disabledDateAfter} />
      </Form.Item>
      <Form.Item
        name={['user', 'phone']}
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'address']} label="Address">
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'photo']}
        valuePropName="e"
        getValueFromEvent={normFile}
        extra=""
        label="Photo">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          // beforeUpload={beforeUpload}
          // onChange={handleChange}
          customRequest={uploadPhoto}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item
        name={['user', 'appointment_time']}
        label="AppointmentTime"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDateBefore} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;