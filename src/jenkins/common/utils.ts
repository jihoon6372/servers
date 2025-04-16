import jenkins from "jenkins";

export const getJenkinsInfo = () => {
  return {
    JENKINS_BASE_URL:
      process.env.JENKINS_BASE_URL ?? "https://jenkins.nhn-commerce.com",
  };
};

export const getJenkinsInstance = () => {
  const { JENKINS_BASE_URL } = getJenkinsInfo();

  return new jenkins({
    baseUrl: JENKINS_BASE_URL,
  });
};
