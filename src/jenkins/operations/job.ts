import { getJenkinsInstance } from "../common/utils.js";

const jenkinsInstance = getJenkinsInstance();

export const getJobInfo = async (jobName: string) => {
  const data = await jenkinsInstance.job.get(jobName);

  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
  };
};

export const requestJobBuild = (
  jobName: string,
  parameters: Record<string, any>
) => {
  const data = jenkinsInstance.job.build({
    name: jobName,
    parameters,
  });

  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
  };
};
