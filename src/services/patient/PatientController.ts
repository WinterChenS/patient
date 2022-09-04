/* eslint-disable */
import { request } from '@umijs/max';

const service = '';

// add patient
export async function addPatient(
  body?: API.PatientInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result>(service + '/api/v1/patient', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

// page patients
export async function queryPatientList(
  params: {
    pageNum?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_PatientInfo__>(
    service + '/api/v1/patient/page',
    {
      method: 'GET',
      params: params,
      ...(options || {}),
    },
  );
}

// upload patient photo
export async function uploadPatientPhoto(
  body?: FormData,
  options?: { [key: string]: any },
) {
  return request<API.Result>(service + '/api/v1/patient/file', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: body,
    ...(options || {}),
  });
}
