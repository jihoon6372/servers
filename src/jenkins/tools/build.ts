export const getBuildStatusTool = {
  name: "get_build_status",
  description: "젠킨스 빌드 상태를 조회합니다.",
  inputSchema: {
    type: "object",
    properties: {
      jobName: {
        type: "string",
        description: "빌드 상태를 조회할 작업의 이름",
      },
      buildNumber: {
        type: "number",
        description: "빌드 번호",
      },
    },
    required: ["jobName", "buildNumber"],
  },
};

export const stopBuildTool = {
  name: "stop_build",
  description: "젠킨스 빌드를 중지합니다.",
  inputSchema: {
    type: "object",
    properties: {
      jobName: {
        type: "string",
        description: "빌드를 중지할 작업의 이름",
      },
      buildNumber: {
        type: "number",
        description: "빌드 번호",
      },
    },
    required: ["jobName", "buildNumber"],
  },
};

export const terminateBuildTool = {
  name: "terminate_build",
  description: "젠킨스 빌드를 종료합니다.",
  inputSchema: {
    type: "object",
    properties: {
      jobName: {
        type: "string",
        description: "빌드를 종료할 작업의 이름",
      },
      buildNumber: {
        type: "number",
        description: "빌드 번호",
      },
    },
    required: ["jobName", "buildNumber"],
  },
};
