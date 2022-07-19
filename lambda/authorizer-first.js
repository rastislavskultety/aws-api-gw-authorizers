const {
  createAuthorizationResponse,
} = require("./create-authorization-response")

exports.handler = async function (event) {
  if (event.headers.authorization === process.env.API_KEY) {
    return createAuthorizationResponse()
  } else {
    throw "Unauthorized"
  }
}
