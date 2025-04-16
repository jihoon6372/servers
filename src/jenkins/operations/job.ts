import { parseResponseBody } from "../common/errors.js";
import { getJenkinsInstance } from "../common/utils.js";

const jenkinsInstance = getJenkinsInstance();

export const getJobInfo = (jobName: string) => {
  const data = jenkinsInstance.job.get(jobName);

  return parseResponseBody(data);
};

export const requestJobBuild = (
  jobName: string,
  parameters: Record<string, any>
) => {
  const data = jenkinsInstance.job.build({
    name: jobName,
    parameters,
  });

  return parseResponseBody(data);
};
