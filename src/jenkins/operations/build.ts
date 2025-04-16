import { getJenkinsInstance } from "../common/utils.js";

const jenkinsInstance = getJenkinsInstance();

export const getBuildStatus = (jobName: string, buildNumber: number) => {
  const data = jenkinsInstance.build
    .get(jobName, buildNumber)
    .then(({ result, actions }) => {
      return {
        result,
        actions,
      };
    });

  return data;
};
