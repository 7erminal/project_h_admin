import axios from 'axios'
// import cookie from "react-cookies";

var hosturl = 'http://13.36.131.2:8080';

class Api{
    async getAllHosts () {
		let response = await axios.get(`${hosturl}/api/hosts`)

        return response.data
       
	}

    // Get services hosted

    async getAllServices () {
		let response = await axios.get(`${hosturl}/api/services`)

        return response.data
       
	}

    // Get Requests

    async getAllRequests () {
		let response = await axios.get(`${hosturl}/api/requests`)

        return response.data
       
	}

    // Get Request Notices

    async getAllRequestNotices () {
		let response = await axios.get(`${hosturl}/api/request-notices`)

        return response.data
       
	}

    // Get Request Notices Responses

    async getAllRequestNoticesResponses () {
		let response = await axios.get(`${hosturl}/api/request-notice-responses`)

        return response.data
       
	}

    // Get Request Responses

    async getAllRequestResponses () {
		let response = await axios.get(`${hosturl}/api/request-responses`)

        return response.data
       
	}

    // Get Customers

    async getAllCustomers () {
		let response = await axios.get(`${hosturl}/api/customers`)

        return response.data
       
	}

    // Get Categories

    async getAllCategories () {
		let response = await axios.get(`${hosturl}/api/categories`)

        return response.data
       
	}

    async getStory (storyid, pageNo, type, optionid) {
		console.log("sending story ID "+storyid+" with type "+type+" and page number "+pageNo)
		
		try {
			const config = {
				method: 'get',
				url: `${hosturl}/api/story/`,
				params:{ storyid: storyid, pageno: pageNo, type: type, optionid: optionid },
				headers: {
					// 'X-CSRFTOKEN': $('meta[name="csrf-token"]').attr('content'),
					// "Authorization": 'Bearer '+ $('meta[name="csrf-token"]').attr('content'),
					'X-CSRFTOKEN': cookie.load("csrftoken"),
					"Access-Control-Allow-Origin":"*",
				}
			}


			let response = await axios(config)


			return response.data
       
		} catch (err) {
			// throw new Error
			return {err};
		}
	} 

    // Register
	async register(params){
        console.log("Register")
        console.log(params)

        const config = {
            method: 'post',
            url: `${hosturl}/register`,
            // data: formData,
            data: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // 'X-CSRFTOKEN': $('meta[name="csrf-token"]').attr('content'),
                // "Authorization": 'Bearer '+ $('meta[name="csrf-token"]').attr('content'),
                // 'X-CSRFTOKEN': cookie.load("csrftoken"),
                // "Access-Control-Allow-Origin":"*",
                // "accept": 'application/json',
            }
        }

        const res = await axios(config);

        return await res
    }

    // Login
	async login(params){
        console.log("Login")
        console.log(params)

        const config = {
            method: 'post',
            url: `${hosturl}/login`,
            // data: formData,
            data: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // 'X-CSRFTOKEN': $('meta[name="csrf-token"]').attr('content'),
                // "Authorization": 'Bearer '+ $('meta[name="csrf-token"]').attr('content'),
                // 'X-CSRFTOKEN': cookie.load("csrftoken"),
                // "Access-Control-Allow-Origin":"*",
                // "accept": 'application/json',
            }
        }

        const res = await axios(config);

        return await res
    }

    // Logout
	async logout(){
        console.log("Logout")

        const config = {
            method: 'post',
            url: `${hosturl}/logout`,
            // data: formData,
            // data: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // 'X-CSRFTOKEN': $('meta[name="csrf-token"]').attr('content'),
                // "Authorization": 'Bearer '+ $('meta[name="csrf-token"]').attr('content'),
                // 'X-CSRFTOKEN': cookie.load("csrftoken"),
                // "Access-Control-Allow-Origin":"*",
                // "accept": 'application/json',
            }
        }

        const res = await axios(config);

        return await res
    }
}

export default Api