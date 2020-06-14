import React, { Dispatch, SetStateAction } from "react";

import "./style.scss";

import {
	getSpecialitiesData,
	getGroupsData,
	getScheduleData,
} from "../../utilities/requests";

import { facultiesDataType, specialitiesDataType } from "../../data/types";

export const Filter = ({
	facultiesData,
	setFacultiesData,
	setSelectedFacultyId,
	selectedFacultyId,
	specialitiesData,
	setSpecialitiesData,
	groupsData,
	setGroupsData,
	selectedGroupId,
	setSelectedGroupId,
	setScheduleData,
}: {
	facultiesData: facultiesDataType;
	setFacultiesData: Dispatch<SetStateAction<facultiesDataType>>;

	setSelectedFacultyId: any;
	selectedFacultyId: any;

	specialitiesData: specialitiesDataType;
	setSpecialitiesData: Dispatch<SetStateAction<specialitiesDataType>>;
	groupsData: any[];
	setGroupsData: Dispatch<SetStateAction<any>>;
	selectedGroupId: string | null;

	setSelectedGroupId: Dispatch<SetStateAction<string | null>>;

	setScheduleData: Dispatch<SetStateAction<any[]>>;
}) => (
	<div className="filter">
		<div className="filter__dataSelect">
			<div className="dataSelect__faculty">
				<span>Факультет</span>
				<select
					id="faculty"
					name="faculty"
					defaultValue={"Выберите факультет"}
					onChange={(e) => {
						getSpecialitiesData(
							e,
							setSpecialitiesData,
							facultiesData,
							setSelectedFacultyId
						);
					}}
				>
					<option disabled value={"Выберите факультет"} key="faculty">
						Выберите факультет
					</option>
					{facultiesData &&
						facultiesData.map((elem: any) => (
							<option key={`faculty${elem["Код"]}`}>
								{elem["Наименование"]}
							</option>
						))}
				</select>
			</div>
			<div className="dataSelect__speciality">
				<span>Специальность</span>
				<select
					id="speciality"
					name="speciality"
					defaultValue="Выберите специальность"
					onChange={(e) => {
						getGroupsData(e, setGroupsData, specialitiesData);
					}}
				>
					<option disabled value="Выберите специальность">
						Выберите специальность
					</option>
					{specialitiesData &&
						specialitiesData.map((elem: any) => (
							<option key={`speciality${elem["Код"]}`}>
								{elem["Специальность"]}
							</option>
						))}
				</select>
			</div>
			<div className="dataSelect__group">
				<span>Группа</span>
				<select
					onChange={async (e) => {
						const selectedGroupId = specialitiesData.filter(
							(elem) => e.target.value === elem["Группа"]
						)[0]["Код"];
						setSelectedGroupId(selectedGroupId);
					}}
					defaultValue={"Выберите группу"}
				>
					<option disabled value="Выберите группу">
						Выберите группу
					</option>
					{groupsData.map((elem) => (
						<option key={`group${elem["Код"]}`}>{elem["Группа"]}</option>
					))}
				</select>
			</div>
		</div>
		<button
			className="filter__filterButton"
			onClick={() => {
				getScheduleData(selectedFacultyId, selectedGroupId, setScheduleData);
			}}
		>
			Показать расписание
		</button>
	</div>
);
