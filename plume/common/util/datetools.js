export function getDate(type) {
	const date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;

	return `${year}-${month}-${day}`;
}
export function getNearDate() {
	const temp = [];
	for (let i = 0; i < 15; i++) {
		const time = new Date(new Date().setDate(new Date().getDate() + i - 7));
		const year = time.getFullYear();
		const month = `0${time.getMonth() + 1}`.slice(-2);
		const strDate = `0${time.getDate()}`.slice(-2);
		/*i == 7 ? temp.push('今日') : */
		temp.push(`${year}-${month}-${strDate}`);
	}
	return temp;
}
export function getHours() {
	const temp = [];
	for (let i = 0; i < 24; i++) {
		temp.push(i);
	}
	return temp;
}
export function getMinutes() {
	const temp = [];
	for (let i = 0; i < 60; i++) {
		temp.push(i);
	}
	return temp;
}
