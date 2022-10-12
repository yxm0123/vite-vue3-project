import returnData from './data'
export default [
  {
    url: "/api/dashboard/get_data",
    method: "get",
    response: () => {
      return {
        code: 200,
        success: true,
        data: returnData.data
      }
    }
  }
]