import { parseResponseBody } from "../common/errors.js";
import { getJenkinsInstance } from "../common/utils.js";

const jenkinsInstance = getJenkinsInstance();

export const getJobInfo = (jobName: string) => {
  const data = jenkinsInstance.job.get(jobName);

  return parseResponseBody(data);
};
