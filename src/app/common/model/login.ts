export interface loginRequest{
  emailId:string,
  password:string
}
export interface signUpRequest{
  firstName:string,
  lastName:string,
  emailId:string,
  password:string,
}
// for login
export interface loginResponse {
  message: string
  status: number
  data: loginData
}

export interface loginData {
  tokens: Tokens
  data: userData
}

export interface Tokens {
  accessToken: string
  refreshToken: string
}

export interface userData {
  id: string
  name: string
  emailId: string
}

//for sign up
export interface signUpResponse {
  message: string
  status:number
  data: signedUpUserData
}

export interface signedUpUserData {
  email: string
  otpExpiration: string
}

// for otp
export interface verifyOtpRequest {
  email: string,
  otp: string
}
export interface verifyOtpResponse {
  message: string
  status: number
  data: any
}
