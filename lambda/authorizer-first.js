const {
  createAuthorizationResponse,
} = require("./create-authorization-response")

exports.handler = async function (event) {
  if (event.authorizationToken === "api-key-first") {
    return createAuthorizationResponse()
  } else {
    throw "Unauthorized"
  }
}
