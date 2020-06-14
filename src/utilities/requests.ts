import { Dispatch, SetStateAction } from "react";
import axios from "axios";

import { facultiesDataType } from "../data/types";

export const getFacultiesData = async (
	setData: Dispatch<SetStateAction<facultiesDataType>>
) => {
	try {
		const response = await axios.get(
			"https://mit-vs-svn.main.vsu.ru/attu_tst/hs/v1/faculty"
		);
		setData(response.data);
	} catch (err) {
		console.log(err);
	} finally {
	}
};

export const setBaseUrl = (url: string) => {
	axios.defaults.baseURL = url;
};

export const setHeader = (header: string, value: string) => {
	axios.defaults.headers.common[header] = value;
};

export const getSpecialitiesData = async (
	e: any,
	setSpecialitiesData: any,
	faculties: any,
	setSelectedFacultyId: any
) => {
	try {
		const facultyId = faculties.filter(
			(elem: any) => e.target.value === elem["Наименование"]
		)[0]["Код"];

		setSelectedFacultyId(facultyId);

		const response = await axios.get(
			`https://mit-vs-svn.main.vsu.ru/attu_tst/hs/v1/group/${facultyId}`
		);

		const specialitiesList = response.data;

		setSpecialitiesData(specialitiesList);
	} catch (err) {
		console.log(err);
	} finally {
	}
};

export const getGroupsData = async (
	e: any,
	setGroupsData: any,
	specialities: any
) => {
	try {
		const groupsList = specialities.filter(
			(elem: any) => e.target.value === elem["Специальность"]
		);
		setGroupsData(groupsList);
	} catch (err) {
		console.log(err);
	} finally {
	}
};

export const getScheduleData = async (
	selectedFacultyId: any,
	selectedGroupId: any,
	setScheduleData: any
) => {
	try {
		const response = await axios.get(
			`http://mit-vs-t4.main.vsu.ru/attu_tst/hs/v1/schedule/${selectedFacultyId}?groupID=${selectedGroupId}`
		);

		setScheduleData(response.data);
	} catch (err) {
		console.log(err);
	} finally {
	}
};
