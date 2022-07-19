const {
  createAuthorizationResponse,
} = require("./create-authorization-response")

exports.handler = async function (event) {
  if (event.headers.authorization === "api-key-first") {
    return createAuthorizationResponse()
  } else {
    throw "Unauthorized"
  }
}
