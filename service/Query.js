import AxiosService from "../common/axiosService"

export const GetLogin = (data) => {
  return AxiosService({
    url: '/login',
    params: data
  })
}


export const OtherQuery = (url,data ={},method) => {
  return AxiosService({
    url: `/${url}`,
    data: data,
    method: `${method}`,
  })
}


export const GetQuery = (url,data = {}) => {
  // console.log('url',url[0])
  return AxiosService({
    url: `/${url}`,
    params: data
  })
}
export const GetMedication = (data) => {
  // console.log('url',url[0])
  return AxiosService({
    url: "/medical",
    params: data,
    method: "POST",
  });
};

export const GetPrescription = (data) => {
  // console.log('url',url[0])
  return AxiosService({
    url: "/prescription",
    params: data,
    method: "POST",
  });
};

export const GetPrescriptionDetail = (data) => {
  // console.log('url',url[0])
  return AxiosService({
    url: "/prescriptionDetail",
    params: data,
  });
};

export const GetRoles = (data) => {
  return AxiosService({
    url: '/roles',
    params: data
  })
}

export const GetDepartments = (data) => {
  return AxiosService({
    url: '/department',
    params: data
  })
}

export const GetStaff = (data) => {
  return AxiosService({
    url: '/staffs',
    params: data
  })
}

export const PostToken = (data) => {
  return AxiosService({
    url: '/login',
    data: data,
    method: 'POST',
  })
}

export const getSemester = (data) => {
  return AxiosService({
      url: '/getuser',
      params: data
  })
}

export const getTypeSemester = (data) => {
  return AxiosService({
      url: 'semester/type',
      params: data
  })
}

export const getLevelSemester = (data) => {
  return AxiosService({
      url: 'semester/level',
      params: data
  })
}