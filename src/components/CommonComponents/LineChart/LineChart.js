import React, { Component } from 'react';
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


class ReactLineChart extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <ResponsiveContainer width="100%" height="100%">
                {/* <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart> */}
                
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize= {10}
                    layout={"horizontal"}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis  hide="true" dataKey="label"/>
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#12376c" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

export default ReactLineChart;
