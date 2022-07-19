const {
  createAuthorizationResponse,
} = require("./create-authorization-response")

exports.handler = async function (event) {
  if (event.authorizationToken === "api-key-second") {
    return createAuthorizationResponse()
  } else {
    throw "Unauthorized"
  }
}
