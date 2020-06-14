export type facultiesDataType = {
	Код: string | null;
	Наименование: string | null;
}[];

export type specialitiesDataType = {
	Группа: string | null;
	Код: string | null;
	Курс: string | null;
	Специальность: string | null;
}[];

export type groupsDataType = {
	Код: string | null;
	Группа: string | null;
	Курс: string | null;
	Специальность: string | null;
}[];

export type scheduleDataType = {
	ВидНагрузки: string | null;
	ВременноеОкно: string | null;
	Дисциплина: string | null;
	Здание: string | null;
	НомерДня: string | null;
	Помещение: string | null;
	Преподаватель: string | null;
	ПреподавательФИО: string | null;
	СписокГрупп: any;
}[];
