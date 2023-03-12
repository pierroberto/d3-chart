import * as d3 from "d3";
import { theme } from "./theme";
import { user } from "./web/user";

const horizontalBarChart = (chartTheme: typeof theme) => {
  user.get().then((data) => {
    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select("#visualization")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .style("background-color", chartTheme.colors.light)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // Add X axis
    const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .attr("fill", chartTheme.colors.secondary);

    // Y axis
    const y = d3
      .scaleBand()
      .range([0, height])
      .domain(data.map((user) => user.fullName))
      .padding(0.1);

    svg.append("g").call(d3.axisLeft(y));

    //Bars
    svg
      .selectAll("myRect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", x(0))
      .attr("y", (user) => {
        const scaleBand = y(user.fullName);
        return scaleBand !== undefined ? scaleBand : null;
      })

      .attr("width", (user) => {
        return x(user.age);
      })
      .attr("height", y.bandwidth())
      .attr("fill", chartTheme.colors.primary);
  });
};

horizontalBarChart(theme);
