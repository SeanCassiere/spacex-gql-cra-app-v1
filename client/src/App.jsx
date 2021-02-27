import React from "react";
import "./assets/bootstrap.min.css";

import { useQuery, gql } from "@apollo/client";

import HomeJumbotron from "./components/HomeJumbotron";
import LaunchItems from "./components/LaunchItems";

const LAUNCHES_QUERY = gql`
	query {
		launches {
			flight_number
			mission_name
			rocket {
				rocket_name
			}
		}
	}
`;

const App = () => {
	const { loading, error, data } = useQuery(LAUNCHES_QUERY);
	return (
		<div>
			<HomeJumbotron />
			<div className='container mt-4'>
				{error && <h5>{error}</h5>}
				{loading ? (
					<h5>Loading Data...</h5>
				) : (
					<LaunchItems launchItems={data.launches} />
				)}
			</div>
		</div>
	);
};

export default App;
