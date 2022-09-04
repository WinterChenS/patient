/* eslint-disable */
// patient types
declare namespace API {
  interface PageInfo {
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface PageInfo_PatientInfo_ {
    total?: number;
    list?: Array<PatientInfo>;
  }

  interface Result {
    code?: number;
    msg?: string;
    data?: Record<string, any>;
  }

  interface Result_PageInfo_PatientInfo__ {
    code?: boolean;
    msg?: string;
    data?: PageInfo_PatientInfo_;
  }

  interface Result_string_ {
    code?: boolean;
    msg?: string;
    data?: string;
  }

  interface PatientInfo {
    id?: number;
    name?: string;
    /** brithday */
    brithday?: Date;
    /** phone */
    phone?: string;
    /** address */
    address?: string;
    photo?: string;
    driver_license?: string;
    appointment_time?: Date;
  }

  interface PatientInfoVO {
    id?: number;
    name?: string;
    /** brithday */
    brithday?: Date;
    /** phone */
    phone?: string;
    /** address */
    address?: string;
    photo?: string;
    driver_license?: string;
    appointment_time?: Date;
  }
}
