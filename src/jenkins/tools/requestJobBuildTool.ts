export const requestJobBuildTool = {
  name: "request_job_build",
  description: "젠킨스 작업 빌드를 요청함",
  inputSchema: {
    type: "object",
    properties: {
      jobName: {
        type: "string",
        description: "작업의 이름",
      },
      parameters: {
        type: "object",
        description: "작업 빌드 파라미터",
      },
    },
    required: ["jobName", "parameters"],
  },
};
