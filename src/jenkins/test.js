import jenkins from "jenkins";

const jenkinsInstance = new jenkins({
  baseUrl:
    "https://jihoon-lee:11bb8e13bf5fbd06078a6e5e01d3b00cbd@devtools.nhn-commerce.com/jenkins-jcasc",
});

// jenkinsInstance.info().then((data) => {
//   console.log(data);
// });
// console.log(jenkinsInstance);

(async () => {
  try {
    const data = await jenkinsInstance.job.build({
      name: "shopby-skin-aurora-vanilla",
      parameters: {
        choice: ["TEST"],
      },
    });
    // const data = await jenkinsInstance.build.get("shopby-skin-seo", 34);

    console.log(data);
  } catch (error) {
    console.log(error);
    console.log(error instanceof Error);
    console.log("----------");
    console.log(error instanceof Error ? error.message : String(error));
  }
})();
