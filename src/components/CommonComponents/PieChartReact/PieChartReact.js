import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default class Example extends PureComponent {
  render() {
    const data = this.props.data;
    const COLORS = ["#3EA5BB", "#3399B6", "#3399B6", "#1D77A3", "#166094","#1C4982", "#1F3E78", "#1F3E78", "#21336E" ];

    return (
      <ResponsiveContainer width="100%" height="100%">
         {/* <PieChart width={1000} height={400}>
            <Pie
                dataKey="count"
                nameKey="label"
                data={data}
                cx={300}
                cy={150}
                innerRadius={40}
                outerRadius={120}
                fill="#82ca9d"
                label
            >
            { data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>) }
            </Pie>
            <Tooltip />
        </PieChart> */}
        <PieChart width={1000} height={400}>
            <Pie
            dataKey="count"
            nameKey="label"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
            >
            { data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>) }
            </Pie>
            <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
