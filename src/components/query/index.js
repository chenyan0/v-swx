import SalaryIndex from './salary/index'
import SalaryResult from './salary/result'
export default [
  {
    path: '/salary',
    name: 'salaryIndex',
    component: SalaryIndex,
    meta: {
      title: '薪资查询'
    }
  },
  {
    path: '/salary/result',
    name: 'salaryResult',
    component: SalaryResult,
    meta: {
      title: '薪资查询结果'
    }
  }
]
