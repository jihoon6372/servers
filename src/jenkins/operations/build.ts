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

export const stopBuild = async (jobName: string, buildNumber: number) => {
  await jenkinsInstance.build.stop(jobName, buildNumber);

  return {
    content: [{ type: "text", text: JSON.stringify("success", null, 2) }],
  };
};

export const terminateBuild = async (jobName: string, buildNumber: number) => {
  await jenkinsInstance.build.term(jobName, buildNumber);

  return {
    content: [{ type: "text", text: JSON.stringify("success", null, 2) }],
  };
};
