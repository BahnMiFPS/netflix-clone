import axios from "axios"
import { API_KEY, BASE_URL } from "./config"

const apiService = axios.create({
	baseURL: BASE_URL,
	API_KEY: API_KEY,
})

apiService.interceptors.request.use(
	(request) => {
		console.log("Start Request", request)
		return request
	},
	function (error) {
		console.log("Request Error", error)
	}
)

apiService.interceptors.response.use(
	(response) => {
		console.log(" Response", response)
		return response
	},
	function (error) {
		console.log("Response Error", error)
	}
)
export default apiService
