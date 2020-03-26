import axios from "axios";

const data = axios.create({
  baseURL: "https://corona.lmao.ninja/countries/brazil"
});

export default data;
