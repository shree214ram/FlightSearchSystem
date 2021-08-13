import React, { PureComponent } from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const data = [
	{
		name: "MCP",
		available: 4000,
		used: 2400,
	},
	{
		name: "MPF",
		available: 3000,
		used: 1398,
	},
	{
		name: "ERSS",
		available: 2000,
		used: 9800,
	},
	{
		name: "NCB",
		available: 2780,
		used: 3908,
	},
	{
		name: "MS",
		available: 1890,
		used: 4800,
	},
	{
		name: "DOV",
		available: 2390,
		used: 3800,
	},
	{
		name: "GP",
		available: 3490,
		used: 4300,
	},
	{
		name: "SB",
		available: 2800,
		used: 8700,
	},
	{
		name: "NRB",
		available: 1900,
		used: 2800,
	},
];

export default class Example extends PureComponent {
	static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

	render() {
		return (
			<BarChart
				width={700}
				height={320}
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="available" stackId="a" fill="#8884d8" />
				<Bar dataKey="used" stackId="a" fill="#82ca9d" />
			</BarChart>
		);
	}
}
