export const getJobInfoTool = {
  name: "get_job_info",
  description: "젠킨스 작업 정보를 조회합니다.",
  inputSchema: {
    type: "object",
    properties: {
      jobName: {
        type: "string",
        description: "작업의 이름",
      },
    },
    required: ["jobName"],
  },
};
