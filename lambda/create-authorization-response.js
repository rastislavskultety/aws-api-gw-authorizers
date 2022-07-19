exports.createAuthorizationResponse = function () {
  const principalId = "authorizer" // There are no users so we don't need a real principalId

  return {
    principalId,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: ["execute-api:Invoke"],
          Effect: "Allow",
          Resource: "*",
        },
      ],
    },
  }
}
