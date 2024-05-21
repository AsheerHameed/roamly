export interface loginRequest{
  emailId:string,
  password:string
}
export interface signUpRequest{
  firstName:string,
  lastName:string,
  emailid:string,
  password:string,
}
export interface loginResponse{
    success: string;
    data: responseData;
  }
export interface responseData{
  tokens: Tokens;
  data: Data;
}
export interface Data {
  id: string;
  name: string;
  emailId: string;
}
export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
