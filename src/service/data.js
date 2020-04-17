import axios from "axios";

const data = axios.create({
  baseURL: "https://corona.lmao.ninja/v2/countries/brazil"
});

export default data;
