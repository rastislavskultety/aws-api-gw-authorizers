exports.handler = async function (event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      from: "second",
      message: "Hello World!",
    }),
  }
}
