import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-southeast-1_d1e8nY1WQ",
  ClientId: "3d1d8debkc21tefftrfmlj4gje"
}

export default new CognitoUserPool(poolData);