import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { mapDonutChartData } from "../../helpers/constants";
import { useSelector } from "react-redux";
import { convertToAppropriateUnit, convertToLocale } from "../../../../shared/utilities";
import "./style.scss";

const calculateFontSize = (size) => {
  if (window.innerWidth > 768) {
    return `${size}px`; // Font size for larger screens
  } else {
    return `${size - 5}px`; // Font size for smaller screens
  }
};

const MyD3Component = ({ series, innerTitle }) => {
  const ref = useRef();
  const blockChainData = useSelector((store) => store.contentManagementReducer.blockChainData);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth > 768 ? 600 : window.innerWidth,
        height: window.innerWidth > 768 ? 600 : 400
      });
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (series && series.length) {
      const data = mapDonutChartData(series);
      const height = dimensions.height;
      const width = dimensions.width;
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
        .style("stroke-dasharray", "4, 4")
        .attr("points", (d) => {
          const posA = outerArc.centroid(d);
          const posB = outerArc2.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          const angle = midangle < Math.PI ? 1 : -1;

          const distanceBC = Math.sqrt((posA[0] - posB[0]) ** 2 + (posA[1] - posB[1]) ** 2) + 20;

          const posC = angle === 1 ?
            [posB[0] + distanceBC, posB[1]] :
            [posB[0] - distanceBC, posB[1]];
          posB[0] = posB[0] + angle * 15;
          return [posA, posB, posC];
        });

      svg
        .selectAll("text")
        .data(pie(data))
        .enter()
        .append("text")
        .attr("fill", "#fff")
        .attr("y", -6)
        .attr("font-size", calculateFontSize(16))
        .text((d) => `${d.data.value}%`)
        .attr("transform", (d) => {
          const posA = outerArc.centroid(d);
          const posB = outerArc2.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          const angle = midangle < Math.PI ? 1 : -1;

          const distanceBC = Math.sqrt((posA[0] - posB[0]) ** 2 + (posA[1] - posB[1]) ** 2) - (window.innerWidth > 768 ? 15 : 0);

          const posC = angle === 1 ?
            [posB[0] + distanceBC, posB[1]] :
            [posB[0] - distanceBC, posB[1]];
          return `translate(${posC})`;
        })
        .style("text-anchor", (d) => {
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return midangle < Math.PI ? "start" : "end";
        });

      svg
        .append("text")
        .text(innerTitle || "")
        .attr("text-anchor", "middle")
        .attr("font-size", calculateFontSize(18))
        .attr("font-weight", "800")
        .attr("y", -10)
        .style("fill", "#40d1b4");

      svg
        .append("text")
        .text(blockChainData?.tokenSupply ? convertToLocale(blockChainData?.tokenSupply) : '')
        .attr("text-anchor", "middle")
        .attr("font-size", calculateFontSize(24))
        .attr("font-weight", "800")
        .attr("y", 20)
        .style("fill", "white");

      svg.append("path")
        .attr("class", "chart-border")
        .attr("fill", "none")
        .attr("stroke", "#fff")
        .attr("stroke-width", "1.3")
        .style("stroke-dasharray", "4, 4")
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
  }, [series, blockChainData, dimensions]);

  return <div className="d3_container" ref={ref} />;
};

export default MyD3Component;
