#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import {
  getBuildStatusTool,
  getJobInfoTool,
  requestJobBuildTool,
} from "./tools/index.js";
import { getJobInfo, requestJobBuild } from "./operations/job.js";
import { getBuildStatus } from "./operations/build.js";

const server = new Server(
  {
    name: "github-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [getBuildStatusTool, getJobInfoTool, requestJobBuildTool],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    if (!request.params.arguments) {
      throw new Error("Arguments are required");
    }

    switch (request.params.name) {
      case "get_build_status": {
        return getBuildStatus(
          request.params.arguments.jobName as string,
          request.params.arguments.buildNumber as number
        );
      }

      case "get_job_info": {
        return getJobInfo(request.params.arguments.jobName as string);
      }

      case "request_job_build": {
        return requestJobBuild(
          request.params.arguments.jobName as string,
          request.params.arguments.parameters as Record<string, any>
        );
      }
      default:
        throw new Error(`Unknown tool: ${request.params.name}`);
    }
  } catch (error) {
    throw error;
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
