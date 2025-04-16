# Jenkins MCP Server

---

Jenkins API를 위한 MCP 서버로, 잡 정보 검색, 빌드 상태 검색, 빌드 요청 기능 등을 제공합니다.

## Tools

1. `get_build_status`

   - 빌드 상태를 조회합니다.
   - Inputs:
     - `jobName` (string): 빌드 상태를 조회할 작업의 이름
     - `buildNumber` (number): 빌드 번호
   - Returns: Build 세부 정보

2. `get_job_info`

   - 젠킨스 작업 정보를 조회합니다.
   - Inputs:
     - `jobName` (string): 작업의 이름
   - Returns: Job 세부 정보

3. `request_job_build`

   - 젠킨스 작업 빌드를 요청함
   - Inputs:
     - `jobName` (string): 작업의 이름
     - `parameters` (object): 작업 빌드 파라미터
   - Returns: 젠킨스 작업 빌드

### Node

```json
{
  "mcpServers": {
    "github": {
      "command": "node",
      "args": ["./dist/index.js"], // MCP 클라이언트에 등록할때 풀 경로 지정해야함
      "env": {
        "JENKINS_BASE_URL": "<YOUR_JENKINS_BASE_URL>"
      }
    }
  }
}
```

## Build

yarn build:

```bash
yarn build
```
