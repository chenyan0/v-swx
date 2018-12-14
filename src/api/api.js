import axios from 'axios'
let base = 'http://localhost:8000/api'

/**
 * 用户登录请求
 */
export const requestLogin = params => {
  return axios.post(`${base}/login`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}
/**
 * 热销产品请求
 */
export const requestHotProduct = params => {
  return axios.get(`${base}/hotproduct`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}
/**
 * 保费试算表格数据
 */
export const requestFeeData = params => {
  return axios.post(`${base}/getFeedata`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}
/**
 * 生成计划书请求
 */
export const requestGetCalculus = params => {
  return axios.post(`${base}/getCalculus`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}

/**
 * 薪资查询请求
 */
export const requestSalaryQuery = params => {
  return axios.post(`${base}/salaryQuery`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}

/**
 * 树结构请求
 */
export const requestTree = params => {
  return axios.get(`${base}/getTree`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}
/**
 * 自定义表单提交
 */
export const requestCustomForm = params => {
  return axios.post(`${base}/customForm`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}

export const HotArticle = params => {
  return axios.get(`${base}/article`, params).then(res => {
    console.log(res)
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}
