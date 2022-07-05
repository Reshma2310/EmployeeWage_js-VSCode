const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const No_Of_Working_Days = 20;
const MAX_HRS_IN_MONTH = 160;

//UC3: Using Functions
function getWorkingHours(empCheck){
    //UC2: Switch Case Usage
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
//UC6: Store daily wage of each day
let totalEmpHrs = 0;
let empHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <=MAX_HRS_IN_MONTH && totalWorkingDays < No_Of_Working_Days) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
}
let empWage = calDailyWage(totalEmpHrs);
console.log(empDailyWageArr);
console.log("Total Days: " + totalWorkingDays  + ", Total Working Hours: " + totalEmpHrs + ", Employee Wage: " + empWage);

//UC 7A: Calculate Total Wage using Array forEach tranversal or reduce method
let totalEmpWage = 0;
function sum (dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: " +  totalWorkingDays + ", " + "Total Hrs: " +  totalEmpHrs + ", " + "Emp Wage: " +  totalEmpWage );
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("7A: Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

//7B - Show the Day along with Daily Wage using ArrayMap
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
    //return "Day:" + dailyCounter + " = " + "wage:" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("7B: Daily wage using Map. Day No = Wage of that Day");
console.log(mapDayWithWageArr);

//UC 7C: Show Days when Full time wage of 160 were earned using filter
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("7C: Daily wage filter when fulltime wage is 160 earned: " + fullDayWageArr);

//UC 7D: Find first occurance when full time wage was earned using Find function
function findFirstFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("7D: First full time wage using find function: " + mapDayWithWageArr.find(findFirstFullTimeWage));

//UC 7E: Check if Every Element of Full Time Wage is truly holding Full Time Wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("7E: Checking Every Element of Full Time Wage is truly holding 160 value using function : " + fullDayWageArr.every(isAllFullTimeWage));

//UC 7F: Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("7F: Checking Presence of part time wage using function : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G: Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("7G: Number of Days Employee Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));

//UC8: Map Functions
let empDailyWageMap = new Map();
empDailyWageMap.set("DailyWage", empDailyWageArr);
console.log("UC8: Day wise Emp Wage:");
console.log(empDailyWageMap.get("DailyWage"));
console.log("Emp Wage Map totalHrs: " + Array.from(empDailyWageArr.values()).reduce(totalWages, 0));
