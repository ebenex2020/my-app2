import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID PWWvX9dp1F-VjJ3Cm6x-vzHVI11ZaslURRCygaDdzGo",
  },
});
