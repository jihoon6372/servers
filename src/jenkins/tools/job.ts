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

export const checkJobExistsTool = {
  name: "check_job_exists",
  description: "젠킨스 작업 존재 여부를 확인합니다.",
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
