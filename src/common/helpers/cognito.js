import axios from "axios";
import {
  COGNITO_CLIENT_ID,
  COGNITO_USER_POOL_ID,
} from "../config/constants.js";
import { CognitoJwtVerifier } from "aws-jwt-verify";

export const generateUserTokens = async (email, password) => {
  try {
    const data = {
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: COGNITO_CLIENT_ID,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
      ClientMetadata: {},
    };

    const response = await axios.post(
      "https://cognito-idp.eu-west-1.amazonaws.com/",
      data,
      {
        headers: {
          "Content-Type": "application/x-amz-json-1.1",
          "x-amz-target": "AWSCognitoIdentityProviderService.InitiateAuth",
        },
      },
    );

    return response.data.AuthenticationResult;
  } catch (error) {
    return { error: error.response.data };
  }
};

export const verifier = CognitoJwtVerifier.create({
  userPoolId: COGNITO_USER_POOL_ID,
  tokenUse: "access",
  clientId: COGNITO_CLIENT_ID,
});
