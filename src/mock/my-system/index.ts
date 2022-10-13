import returnData from './data'
export default [
  {
    url: "/api/users/get_data",
    method: "get",
    response: () => {
      return {
        code: 200,
        success: true,
        data: returnData.tableData
      }
    }
  }
]