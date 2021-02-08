import http from "../http-common";

class UserDataService {
 
  login(data) {
    return http.post("/login", data);
  }

  
}

export default new UserDataService();