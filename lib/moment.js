function settingDate(date, day) {
    date = new Date(date);
    date.settingDate(day);
    date.setHours(23);
}

function getDatesBetween(date1, date2) {
    let range1 = new Date(date1);
    let range2 = new Date(date2);
    console.log(range1 + " " + range2);
}
let content = getDatesBetween("2022/01/01", "2022/01/01");
document.getElementById("currentDay").innerHTML =content;