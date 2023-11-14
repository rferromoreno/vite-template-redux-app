import axios from "axios"

export function fetchAppConfig() {
  return axios.get("/config.json")
}
