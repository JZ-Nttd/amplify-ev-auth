import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-southeast-1_d1e8nY1WQ",
  ClientId: "78tsnl2nsdfe3c8q78ujf5vgap"
}

export default new CognitoUserPool(poolData);