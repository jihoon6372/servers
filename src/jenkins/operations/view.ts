import { getJenkinsInstance } from "../common/utils.js";

const jenkinsInstance = getJenkinsInstance();

export const getViewList = async () => {
  const data = await jenkinsInstance.view.list();

  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
  };
};

export const getView = async (viewName: string) => {
  const data = await jenkinsInstance.view.get(viewName);

  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
  };
};

export const addViewJob = async (viewName: string, jobName: string) => {
  await jenkinsInstance.view.add(viewName, jobName);

  return {
    content: [{ type: "text", text: JSON.stringify("success", null, 2) }],
  };
};

export const removeViewJob = async (viewName: string, jobName: string) => {
  await jenkinsInstance.view.remove(viewName, jobName);

  return {
    content: [{ type: "text", text: JSON.stringify("success", null, 2) }],
  };
};
