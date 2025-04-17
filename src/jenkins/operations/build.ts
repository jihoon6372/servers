import { getJenkinsInstance } from "../common/utils.js";

const jenkinsInstance = getJenkinsInstance();

export const getBuildStatus = async (jobName: string, buildNumber: number) => {
  const { result, actions } = await jenkinsInstance.build.get(
    jobName,
    buildNumber
  );

  return {
    content: [
      { type: "text", text: JSON.stringify({ result, actions }, null, 2) },
    ],
  };
};
