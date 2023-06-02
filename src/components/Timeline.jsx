/** @format */

import React from "react";
import data from "../assets/data.json";

function Timeline() {
    return (
        <div id="timeline">
            <div className="timelineBox">
                {data.projects.map((i, index) => (
                    <TimelineItem
                        headding={i.title}
                        text={i.date}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

const TimelineItem = ({ headding, text, index }) => (
    <div
        className={`timelineItem ${
            index % 2 === 0 ? "leftTimeline" : "rightTimeline"
        }`}>
        <div>
            <h2>{headding}</h2>
            <p>{text}</p>
        </div>
    </div>
);

export default Timeline;
