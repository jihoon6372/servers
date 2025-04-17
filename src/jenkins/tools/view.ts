export const getViewTool = {
  name: "get_view",
  description: "젠킨스 view 정보를 조회합니다.",
  inputSchema: {
    type: "object",
    properties: {
      viewName: {
        type: "string",
        description: "view 이름",
      },
    },
    required: ["viewName"],
  },
};

export const getViewListTool = {
  name: "get_view_list",
  description: "젠킨스 view 리스트 전체를 조회합니다.",
  inputSchema: {
    type: "object",
    properties: {},
  },
};

export const addViewJobTool = {
  name: "add_view_job",
  description: "젠킨스 view에 작업을 추가",
  inputSchema: {
    type: "object",
    properties: {
      viewName: {
        type: "string",
        description: "view 이름",
      },
      jobName: {
        type: "string",
        description: "job 이름",
      },
    },
    required: ["viewName", "jobName"],
  },
};

export const removeViewJobTool = {
  name: "remove_view_job",
  description: "젠킨스 view에서 작업을 제거",
  inputSchema: {
    type: "object",
    properties: {
      viewName: {
        type: "string",
        description: "view 이름",
      },
      jobName: {
        type: "string",
        description: "job 이름",
      },
    },
    required: ["viewName", "jobName"],
  },
};

export const checkViewExistsTool = {
  name: "check_view_exists",
  description: "젠킨스 view 존재 여부를 확인합니다.",
  inputSchema: {
    type: "object",
    properties: {
      viewName: {
        type: "string",
        description: "view 이름",
      },
    },
    required: ["viewName"],
  },
};
