export const URLS = {

  login: {
    endPoint: "customer/login",
    reqHeader: {
      eventName: "LOGIN",
      eventDescription: "User logged in",
    },
  },
  signup : {
    endPoint: "customer/signUp",
    reqHeader: {
      EventName: "signup",
      EventDescription: "signup user"
    }
  },
  generalSearch:{
    endPoint: "common/placeSearch",
    reqHeader: {
      EventName: "place search",
      EventDescription: "api call for place search"
    }
  },
  validateOtp:{
    endPoint: "customer/validateOtp",
    reqHeader: {
      EventName: "otp sent",
      EventDescription: "api call for otp sent"
    }
  }
}
