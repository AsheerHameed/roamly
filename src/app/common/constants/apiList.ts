export const URLS = {

  login: {
    endPoint: "customer/login",
    reqHeader: {
      eventName: "LOGIN",
      eventDescription: "User logged in",
    },
  },
  signup : {
    endPoint: "signup",
    reqHeader: {
      EventName: "LOGOUT",
      EventDescription: "logout user"
    }
  },
  generalSearch:{
    endPoint: "common/placeSearch",
    reqHeader: {
      EventName: "place search",
      EventDescription: "api call for place search"
    }
  }
}
