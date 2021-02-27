import React from "react";

const LaunchItems = ({ launchItems }) => {
	return (
		<table className='table table-sm'>
			<thead>
				<th scope='col'>#</th>
				<th scope='col'>Mission Name</th>
				<th scope='col'>Rocket Name</th>
			</thead>
			<tbody>
				{launchItems.map((item, key) => (
					<tr key={key}>
						<th scope='row'>{item.flight_number}</th>
						<td>{item.mission_name}</td>
						<td>{item.rocket.rocket_name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default LaunchItems;
