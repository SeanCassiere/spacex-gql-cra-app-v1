import { gql } from "apollo-server-express";

const typeDefs = gql`
	type Dimensions {
		meters: Float
		feet: Float
	}

	type Weights {
		kg: Float
		lbf: Float
	}

	type Launch {
		flight_number: ID!
		mission_name: String
		launch_year: String
		launch_date_local: String
		launch_success: Boolean
		details: String
		rocket: Rocket
	}

	type Rocket {
		rocket_id: ID!
		rocket_name: String
		rocket_type: String
		height: Dimensions
		diameter: Dimensions
		mass: Weights
	}

	# This type specifies the entry points into our API.
	type Query {
		launches: [Launch]
		launch(id: ID!): Launch
		rockets: [Rocket]
		rocket(id: ID!): Rocket
	}
`;

export { typeDefs };
