import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { mapDonutChartData } from "../../helpers/constants";
import { useSelector } from "react-redux";
import { convertToAppropriateUnit } from "../../../../shared/utilities";
import "./style.scss"
const MyD3Component = ({ series, innerTitle }) => {
  const ref = useRef();
  const blockChainData = useSelector((store) => store.contentManagementReducer.blockChainData);

  useEffect(() => {
    if (series && series.length) {
      const data = mapDonutChartData(series);
      const height = window.innerWidth > 768 ? 600 : 400;
      const width = window.innerWidth > 768 ? 600 : window.innerWidth;
      const margin = 50;
      const radius = Math.min(width, height) / 2 - margin;

      d3.select(ref.current).selectAll("svg").remove();

      const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("font-family", "Lato")
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const pie = d3
        .pie()
        .sort(null)
        .value((d) => d.value);
      const arc = d3
        .arc()
        .innerRadius(radius * 0.56)
        .outerRadius(radius * 0.8);

      const outerArc = d3
        .arc()
        .innerRadius(radius * 0.85)
        .outerRadius(radius * 0.85);
      const outerArc2 = d3
        .arc()
        .innerRadius(radius * 1)
        .outerRadius(radius * 1);
      svg
        .selectAll("path")
        .data(pie(data))
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d) => d.data.color)
        .attr("stroke", "rgb(17, 24, 39)")
        .style("stroke-width", "2px")
        // .style("opacity", 0.7)
        // Add hover animation
        .on("mouseover", function () {
          d3.select(this)
            .transition()
            .duration(300)
            .style("opacity", 0.7)
            .attr("transform", "scale(1.1)");
        })
        .on("mouseout", function () {
          d3.select(this)
            .transition()
            .duration(300)
            .style("opacity", 1)
            .attr("transform", "scale(1)");
        });
      svg
        .selectAll("polyline")
        .data(pie(data))
        .enter()
        .append("polyline")
        .attr("stroke", "#fff")
        .style("fill", "none")
        .attr("stroke-width", 1)
        .style("stroke-dasharray", ("4, 4")) // Make the line dotted
        .attr("points", (d) => {
          const posA = outerArc.centroid(d);
          const posB = outerArc2.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          const angle = midangle < Math.PI ? 1 : -1; // Determine the angle based on the position of posB

          // Calculate the distance between posB and posC
          const distanceBC = Math.sqrt((posA[0] - posB[0]) ** 2 + (posA[1] - posB[1]) ** 2) + 35;

          // Determine the direction of posC based on the angle
          const posC = angle === 1 ?
            [posB[0] + distanceBC, posB[1]] :  // If angle is on the left side, position to the left
            [posB[0] - distanceBC, posB[1]];   // If angle is on the right side, position to the right

          return [posA, posB, posC];
        });



      svg
        .selectAll("text")
        .data(pie(data))
        .enter()
        .append("text")
        .attr("fill", "#fff")
        .attr("y", -6)
        .text((d) => `${d.data.value}%`)
        .attr("transform", (d) => {
          const posA = outerArc.centroid(d);
          const posB = outerArc2.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          const angle = midangle < Math.PI ? 1 : -1; // Determine the angle based on the position of posB
          // Calculate the distance between posB and posC
          const distanceBC = Math.sqrt((posA[0] - posB[0]) ** 2 + (posA[1] - posB[1]) ** 2);
          console.log('distanceBC: ', distanceBC);

          // Determine the direction of posC based on the angle
          const posC = angle === 1 ?
            [posB[0] + distanceBC, posB[1]] :  // If angle is on the left side, position to the left
            [posB[0] - distanceBC, posB[1]];   // If angle is on the right side, position to the right
          return `translate(${posC})`;
        })
        .style("text-anchor", (d) => {
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return midangle < Math.PI ? "start" : "end";
        });
      // Add label and text on the center
      svg
        .append("text")
        .text(innerTitle?.toUpperCase() || "")
        .attr("text-anchor", "middle")
        .attr("font-size", "18px")
        .attr("font-weight", "800")
        .attr("text-transform", "uppercase")
        .attr("y", -10)
        .style("fill", "#a7d7cf");

      svg
        .append("text")
        .text(blockChainData?.tokenSupply ? convertToAppropriateUnit(blockChainData?.tokenSupply, 0) : '')
        .attr("text-anchor", "middle")
        .attr("font-size", "24px")
        .attr("font-weight", "800")
        .attr("y", 20)
        .style("fill", "white");
      // Append a path element for the dotted line border
      svg.append("path")
        .attr("class", "chart-border")
        .attr("fill", "none")
        .attr("stroke", "#fff")
        .attr("stroke-width", "1.3")
        .style("stroke-dasharray", ("4, 4")) // Make the line dotted
        .attr("d", d3.arc()({
          outerRadius: radius * .85,
          startAngle: 0,
          endAngle: Math.PI * 2
        }));
      svg.append("path")
        .attr("class", "chart-border")
        .attr("fill", "none")
        .attr("stroke", "#fff")
        .attr("stroke-width", "1.3")
        .attr("d", d3.arc()({
          outerRadius: radius * 0.5,
          startAngle: 0,
          endAngle: Math.PI * 2
        }));
    }
  }, [series, blockChainData]);

  return <div className="d3_container" ref={ref} />;
};

export default MyD3Component;
