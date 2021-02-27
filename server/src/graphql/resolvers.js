import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v3";

const resolvers = {
	Query: {
		launches: async () => {
			const { data } = await axios.get(`${BASE_URL}/launches`);
			return data;
		},
		launch: async (_, { id }) => {
			const { data } = await axios.get(`${BASE_URL}/launches/${id}`);
			return data;
		},
		rockets: async () => {
			const { data } = await axios.get(`${BASE_URL}/rockets`);
			return data;
		},
		rocket: async (_, { id }) => {
			const { data } = await axios.get(`${BASE_URL}/rockets/${id}`);
			return data;
		},
	},
};

export { resolvers };
