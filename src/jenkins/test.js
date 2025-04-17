import jenkins from "jenkins";

const jenkinsInstance = new jenkins({
  baseUrl:
    "https://jihoon-lee:11bb8e13bf5fbd06078a6e5e01d3b00cbd@devtools.nhn-commerce.com/jenkins-jcasc",
});

(async () => {
  try {
    const data = await jenkinsInstance.view.remove(
      "프론트엔드개발팀",
      "shopby-skin-aurora-vanilla"
    );

    console.log(data);
  } catch (error) {
    console.log(error);
    console.log(error instanceof Error);
    console.log("----------");
    console.log(error instanceof Error ? error.message : String(error));
  }
})();
