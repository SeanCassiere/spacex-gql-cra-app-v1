import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v3";

const resolvers = {
	Query: {
		launches: () => {
			return axios.get(`${BASE_URL}/launches`).then((res) => res.data);
		},
		launch: (root, { id }) => {
			return axios.get(`${BASE_URL}/launches/${id}`).then((res) => res.data);
		},
		rockets: () => {
			return axios.get(`${BASE_URL}/rockets`).then((res) => res.data);
		},
		rocket: (root, { id }) => {
			return axios.get(`${BASE_URL}/rockets/${id}`).then((res) => res.data);
		},
	},
};

export { resolvers };
