import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/test-spira/public/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
