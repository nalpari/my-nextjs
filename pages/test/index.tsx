import Layout from '@/components/Layout'
import { ReactElement, use, useEffect } from 'react'

const components = {
  /**
   * 식재료비
   */
  Ingredientsratio: {
    name: 'Ingredientsratio',
    path: 'pages/mybusiness/sales/Ingredientsratio',
  },
  /**
   * 조직관리
   */
  Group: {
    name: 'Group',
    path: 'pages/setting/companymanagement/Group',
  },
  /**
   * 그룹별 프로그램 등록
   */
  GroupProgram: {
    name: 'GroupProgram',
    path: 'pages/setting/companymanagement/GroupProgram',
  },
  /**
   * 사업장ID 관리
   */
  CompanyIdManagement: {
    name: 'CompanyIdManagement',
    path: 'pages/setting/companymanagement/CompanyIdManagement',
  },
  /**
   * ID별 사업장관리
   */
  IdCompanyManagement: {
    name: 'IdCompanyManagement',
    path: 'pages/setting/companymanagement/IdCompanyManagement',
  },
  /**
   * 일일보고서
   */
  DailyReport: {
    name: 'DailyReport',
    path: 'pages/mybusiness/operation/DailyReport',
  },
  /**
   * 일반주문
   */
  RegularOrder: {
    name: 'RegularOrder',
    path: 'pages/order/RegularOrder',
  },
}
export default function Test() {
  useEffect(() => {
    const keys = Object.keys(components)
    const normalizeObj = keys.map((key) => {
      const sourceObj = components[key]
      const newObj = {
        name: sourceObj.name,
        path: sourceObj.path,
      }
      return newObj
    })
    console.log('normalizeObj: ', normalizeObj)
    console.log('keys: ', keys)
  }, [])

  return (
    <>
      <h1>Test</h1>
    </>
  )
}

Test.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
