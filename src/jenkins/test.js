import jenkins from "jenkins";

const jenkinsInstance = new jenkins({
  baseUrl:
    "https://jihoon-lee:11bb8e13bf5fbd06078a6e5e01d3b00cbd@devtools.nhn-commerce.com/jenkins-jcasc",
});

(async () => {
  try {
    const data = await jenkinsInstance.build.stop(
      "shopby-skin-aurora-vanilla",
      115
    );

    console.log(data);
  } catch (error) {
    console.log(error);
    console.log(error instanceof Error);
    console.log("----------");
    console.log(error instanceof Error ? error.message : String(error));
  }
})();
