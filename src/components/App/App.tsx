import React, { useState, useEffect } from "react";
import "./style.scss";

import Filter from "../Filter";
import Schedule from "../Schedule";

import {
	facultiesDataType,
	specialitiesDataType,
	groupsDataType,
	scheduleDataType,
} from "../../data/types";

import { getFacultiesData, setBaseUrl, setHeader } from "../../utilities";

export const App = () => {
	const token = "Basic aHR0cHN2YzpodHRwc3ZjQHNydg==";

	useEffect(() => {
		setBaseUrl("https://mit-vs-svn.main.vsu.ru/attu_tst/hs/v1/");
		setHeader("Authorization", token);
	}, []);

	const [faculties, setFaculties] = useState<facultiesDataType>([
		{
			Код: null,
			Наименование: null,
		},
	]);

	const [selectedFacultyId, setSelectedFacultyId] = useState<string>("");
	const [specialities, setSpecialities] = useState<specialitiesDataType>([
		{
			Группа: null,
			Код: null,
			Курс: null,
			Специальность: null,
		},
	]);
	const [groups, setGroups] = useState<groupsDataType>([
		{ Группа: null, Код: null, Курс: null, Специальность: null },
	]);
	const [selectedGroupId, setSelectedGroupId] = useState<string | null>("");
	const [schedule, setSchedule] = useState<scheduleDataType>([
		{
			ВидНагрузки: null,
			ВременноеОкно: null,
			Дисциплина: null,
			Здание: null,
			НомерДня: null,
			Помещение: null,
			Преподаватель: null,
			ПреподавательФИО: null,
			СписокГрупп: null,
		},
	]);

	useEffect(() => {
		getFacultiesData(setFaculties);
	}, []);

	return (
		<div className="app">
			<Filter
				facultiesData={faculties}
				setFacultiesData={setFaculties}
				selectedFacultyId={selectedFacultyId}
				setSelectedFacultyId={setSelectedFacultyId}
				specialitiesData={specialities}
				setSpecialitiesData={setSpecialities}
				groupsData={groups}
				setGroupsData={setGroups}
				selectedGroupId={selectedGroupId}
				setSelectedGroupId={setSelectedGroupId}
				setScheduleData={setSchedule}
			/>
			<Schedule data={schedule} />
		</div>
	);
};
