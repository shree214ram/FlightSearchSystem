import React, { Component } from "react";
import * as d3 from "d3";
import "./styles/styles.css";
import { withStyles } from "@material-ui/styles";
import { ThreeSixtySharp } from "@material-ui/icons";

const styles = (theme) => ({});

class PieChart extends Component {
	componentDidMount() {
		var params = {
			data: this.props.data,
			chartWidth: this.props.width,
			chartHeight: this.props.height,
		};
		this.drawOrganizationChart(params);
	}
	drawOrganizationChart(params) {
		var radius = params.chartHeight / 2 - 20; //Math.min(params.chartWidth, params.chartHeight) / 2;
		var legendRectSize = 5; // defines the size of the colored squares in legend
		var legendSpacing = 6; // defines spacing between squares

		// define color scale
		//var color = d3.scale.category20c();
		
		
		//var color = d3.scale.ordinal().range(["#12376c","#13376d","#14386d","#15396d","#17396d","#183a6d","#193b6d","#1a3b6d","#1c3c6e","#1d3d6e","#1e3e6e","#203e6e","#213f6e","#23406e","#24406e","#25416e","#27426e","#28436e","#29436e","#2b446e","#2c456e","#2e456e","#2f466e","#30476e","#32486e","#33486e","#34496e","#364a6e","#374a6e","#394b6e","#3a4c6e","#3b4d6e","#3d4d6e","#3e4e6e","#3f4f6e","#414f6e","#42506e","#43516d","#44526d","#46526d","#47536d","#48546d","#4a546d","#4b556d","#4c566d","#4d576d","#4e576e","#50586e","#51596e","#52596e","#535a6e","#545b6e","#565c6e","#575c6e","#585d6e","#595e6e","#5a5e6e","#5b5f6e","#5c606e","#5d616e","#5e616e","#60626e","#61636f","#62646f","#63646f","#64656f","#65666f","#66666f","#67676f","#686870","#696970","#6a6970","#6b6a70","#6c6b70","#6d6c70","#6d6c71","#6e6d71","#6f6e71","#706f71","#716f71","#727071","#737172","#747172","#757272","#767372","#767472","#777473","#787573","#797673","#7a7773","#7b7774","#7b7874","#7c7974","#7d7a74","#7e7a74","#7f7b75","#807c75","#807d75","#817d75","#827e75","#837f76","#848076","#858076","#858176","#868276","#878376","#888477","#898477","#898577","#8a8677","#8b8777","#8c8777","#8d8877","#8e8978","#8e8a78","#8f8a78","#908b78","#918c78","#928d78","#938e78","#938e78","#948f78","#959078","#969178","#979278","#989278","#999378","#9a9478","#9b9578","#9b9678","#9c9678","#9d9778","#9e9878","#9f9978","#a09a78","#a19a78","#a29b78","#a39c78","#a49d78","#a59e77","#a69e77","#a79f77","#a8a077","#a9a177","#aaa276","#aba376","#aca376","#ada476","#aea575","#afa675","#b0a775","#b2a874","#b3a874","#b4a974","#b5aa73","#b6ab73","#b7ac72","#b8ad72","#baae72","#bbae71","#bcaf71","#bdb070","#beb170","#bfb26f","#c1b36f","#c2b46e","#c3b56d","#c4b56d","#c5b66c","#c7b76c","#c8b86b","#c9b96a","#caba6a","#ccbb69","#cdbc68","#cebc68","#cfbd67","#d1be66","#d2bf66","#d3c065","#d4c164","#d6c263","#d7c363","#d8c462","#d9c561","#dbc660","#dcc660","#ddc75f","#dec85e","#e0c95d","#e1ca5c","#e2cb5c","#e3cc5b","#e4cd5a","#e6ce59","#e7cf58","#e8d058","#e9d157","#ead256","#ebd355","#ecd454","#edd453","#eed553","#f0d652","#f1d751","#f1d850","#f2d950","#f3da4f","#f4db4e","#f5dc4d","#f6dd4d","#f7de4c","#f8df4b","#f8e04b","#f9e14a","#fae249","#fae349","#fbe448","#fbe548","#fce647","#fce746","#fde846","#fde946","#fdea45"]);
		var color = d3.scale.ordinal().range(["#E7EFF7", "#D1E0EE", "#B9CFE5", "#A2BFDD", "#8BAFD3", "#749FCB","#5D90C2", "#427FBA", "#005FA7", "#00428B" ]);

		//var color = d3.scale.ordinal().range(["#004c6d", "#0c6081", "#197494", "#2689a8", "#349fba", "#43b5cd", "#54ccde", "#67e3ef", "#7bfaff"]);

		var svg = d3
			.select(this.refs.canvas) // select element in the DOM with id 'chart'
			.append("svg") // append an svg element to the element we've selected
			.attr("width", params.chartWidth) // set the width of the svg element we just added
			.attr("height", params.chartHeight) // set the height of the svg element we just added
			.attr("position","relative")
			.append("g") // append 'g' element to the svg element
			.attr(
				"transform",
				"translate(" +
					params.chartHeight / 1.7 +
					"," +
					params.chartHeight / 2.0 +
					")"
			); // our reference is now to the 'g' element. centerting the 'g' element to the svg element

		var arc = d3.svg
			.arc()
			.innerRadius(0) // none for pie chart
			.outerRadius(radius); // size of overall chart

		var pie = d3.layout
			.pie() // start and end angles of the segments
			.value(function (d) {
				return d.count;
			}) // how to extract the numerical data from each entry in our dataset
			.sort(null); // by default, data sorts in oescending value. this will mess with our animation so we set it to null

		// define tooltip
		var tooltip = d3
			.select(this.refs.canvas) // select element in the DOM with id 'chart'
			.append("div") // append a div element to the element we've selected
			.attr("class", "tooltip"); // add class 'tooltip' on the divs we just selected

		tooltip
			.append("div") // add divs to the tooltip defined above
			.attr("class", "label"); // add class 'label' on the selection

		tooltip
			.append("div") // add divs to the tooltip defined above
			.attr("class", "count"); // add class 'count' on the selection

		tooltip
			.append("div") // add divs to the tooltip defined above
			.attr("class", "percent"); // add class 'percent' on the selection

		params.data.forEach(function (d) {
			d.count = +d.count; // calculate count as we iterate through the data
			d.enabled = true; // add enabled property to track which entries are checked
		});

		// creating the chart
		var path = svg
			.selectAll("path") // select all path elements inside the svg. specifically the 'g' element. they don't exist yet but they will be created below
			.data(pie(params.data)) //associate dataset wit he path elements we're about to create. must pass through the pie function. it magically knows how to extract values and bakes it into the pie
			.enter() //creates placeholder nodes for each of the values
			.append("path") // replace placeholders with path elements
			.attr("d", arc) // define d attribute with arc function above
			.attr("fill", function (d) {
				return color(d.data.label);
			}) // use color scale to define fill of each label in dataset
			.each(function (d) {
				return this._current - d;
			}); // creates a smooth animation for each track

		// mouse event handlers are attached to path so they need to come after its definition
		path.on("mouseover", function (d) {
			// when mouse enters div
			var total = d3.sum(
				params.data.map(function (d) {
					// calculate the total number of tickets in the dataset
					return d.enabled ? d.count : 0; // checking to see if the entry is enabled. if it isn't, we return 0 and cause other percentages to increase
				})
			);
			var percent = Math.round((1000 * d.data.count) / total) / 10; // calculate percent
			tooltip.select(".label").html(d.data.label); // set current label
			tooltip.select(".count").html("Count: " + d.data.count); // set current count
			tooltip.select(".percent").html(percent + "%"); // set percent calculated above
			tooltip.style("display", "block");
			tooltip.style("font-size", "12px"); // set display
		});

		path.on("mouseout", function () {
			// when mouse leaves div
			tooltip.style("display", "none"); // hide tooltip for that element
		});

		var e = ""
		var offsetLeft = 0;
		var offsetTop = 0;
		var selectedChartId = this.props.id || "piChart";
			
		path.on("mousemove", function (d) {
			// when mouse moves
			e = document.getElementById(selectedChartId)
			offsetLeft = e.offsetLeft;
			offsetTop = e.offsetTop;
			
			tooltip
				.style("top", d3.event.layerY + offsetTop + 10 + "px") // always 10px below the cursor
				.style("left", d3.event.layerX + offsetLeft + 10 + "px"); // always 10px to the right of the mouse
		});

		// define legend
		var legend = svg
			.selectAll(".legend") // selecting elements with class 'legend'
			.data(color.domain()) // refers to an array of labels from our dataset
			.enter() // creates placeholder
			.append("g") // replace placeholders with g elements
			//.attr("class", "legend") // each g is given a legend class
			.attr("transform", function (d, i) {
				var height = legendRectSize + legendSpacing; // height of element is the height of the colored square plus the spacing
				var offset = (height * color.domain().length) / 2; // vertical offset of the entire legend = height of a single element & half the total number of elements
				var horz = radius + 50; // the legend is shifted to the left to make room for the text
				var vert = i * height - offset; // the top of the element is hifted up or down from the center using the offset defiend earlier and the index of the current element 'i'
				return "translate(" + horz + "," + vert + ")"; //return translation
			});

		// // adding colored squares to legend
		legend
			.append("rect") // append rectangle squares to legend
			.attr("width", legendRectSize) // width of rect size is defined above
			.attr("height", legendRectSize) // height of rect size is defined above
			.style("fill", color) // each fill is passed a color
			.style("stroke", color); // each stroke is passed a color
		

		// adding text to legend
		legend
			.append("text")
			.attr("x", "10")
			.attr("y", "6")
			.style("font-size", "10px")
			.style("overflow", "scroll")
			.text(function (d) {
				return d;
			}); // return label
	}
	render() {
		const { classes, id } = this.props;
		return <div ref="canvas" id={id || "piChart"} className={classes.content}></div>;
	}
}
export default withStyles(styles)(PieChart);
