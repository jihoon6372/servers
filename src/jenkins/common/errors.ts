export const parseResponseBody = (response: any) => {
  return response
    .then((data: any) => {
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    })
    .catch((error: any) => {
      return {
        content: [{ type: "text", text: error.message }],
      };
    });
};
