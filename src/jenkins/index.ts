#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import {
  getBuildStatusTool,
  requestJobBuildTool,
  addViewJobTool,
  removeViewJobTool,
  getViewListTool,
  getViewTool,
  getJobInfoTool,
  checkViewExistsTool,
  checkJobExistsTool,
  stopBuildTool,
  terminateBuildTool,
} from "./tools/index.js";
import {
  getViewList,
  getView,
  addViewJob,
  getJobInfo,
  requestJobBuild,
  getBuildStatus,
  removeViewJob,
  checkViewExists,
  checkJobExists,
  stopBuild,
  terminateBuild,
} from "./operations/index.js";

const server = new Server(
  {
    name: "github-mcp-server",
    version: "1.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      getBuildStatusTool,
      getJobInfoTool,
      requestJobBuildTool,
      getViewListTool,
      getViewTool,
      addViewJobTool,
      removeViewJobTool,
      checkViewExistsTool,
      checkJobExistsTool,
      stopBuildTool,
      terminateBuildTool,
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    if (!request.params.arguments) {
      throw new Error("Arguments are required");
    }

    switch (request.params.name) {
      case "get_build_status": {
        return await getBuildStatus(
          request.params.arguments.jobName as string,
          request.params.arguments.buildNumber as number
        );
      }

      case "get_job_info": {
        return await getJobInfo(request.params.arguments.jobName as string);
      }

      case "request_job_build": {
        return await requestJobBuild(
          request.params.arguments.jobName as string,
          request.params.arguments.parameters as Record<string, any>
        );
      }

      case "get_view_list": {
        return await getViewList();
      }

      case "get_view": {
        return await getView(request.params.arguments.viewName as string);
      }

      case "add_view_job": {
        return await addViewJob(
          request.params.arguments.viewName as string,
          request.params.arguments.jobName as string
        );
      }

      case "remove_view_job": {
        return await removeViewJob(
          request.params.arguments.viewName as string,
          request.params.arguments.jobName as string
        );
      }

      case "check_view_exists": {
        return await checkViewExists(
          request.params.arguments.viewName as string
        );
      }

      case "check_job_exists": {
        return await checkJobExists(request.params.arguments.jobName as string);
      }

      case "stop_build": {
        return await stopBuild(
          request.params.arguments.jobName as string,
          request.params.arguments.buildNumber as number
        );
      }

      case "terminate_build": {
        return await terminateBuild(
          request.params.arguments.jobName as string,
          request.params.arguments.buildNumber as number
        );
      }

      default:
        throw new Error(`Unknown tool: ${request.params.name}`);
    }
  } catch (error: any) {
    return {
      content: [{ type: "text", text: error.message }],
    };
  }
});

async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Jenkins MCP Server running on stdio");
}

runServer().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
