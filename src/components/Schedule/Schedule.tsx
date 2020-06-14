import React from "react";

import "./style.scss";

export const Schedule = ({ data }: any) => {
	return (
		<div className="schedule">
			{console.log(data)}
			{data.length > 1 && (
				<div className="schedule__row">
					<div className="scheduleRowCell">
						<p>{"НомерДня"}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{"ВременноеОкно"}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{"Дисциплина"}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{"Помещение"}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{"Здание"}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{"Преподаватель"}</p>
					</div>
				</div>
			)}
			{data.map((elem: any, id: any) => (
				<div className="schedule__row" key={id}>
					<div className="scheduleRowCell">
						<p>{elem["НомерДня"]}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{elem["ВременноеОкно"]}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{elem["Дисциплина"]}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{elem["Помещение"]}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{elem["Здание"]}</p>
					</div>
					<div className="scheduleRowCell">
						<p>{elem["Преподаватель"]}</p>
					</div>
				</div>
			))}
		</div>
	);
};
