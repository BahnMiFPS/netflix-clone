import axios from "axios"
import { BASE_URL, API_KEY } from "./requests"

const apiService = axios.create({
	baseURL: BASE_URL,
	API_KEY: API_KEY,
})

apiService.interceptors.request.use(
	(request) => {
		return request
	},
	function (error) {}
)

apiService.interceptors.response.use(
	(response) => {
		return response
	},
	function (error) {}
)
export default apiService
