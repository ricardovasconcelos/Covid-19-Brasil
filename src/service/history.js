import axios from "axios";

const history = axios.create({
  baseURL: "https://corona.lmao.ninja/v2/historical/brazil"
});

export default history;
