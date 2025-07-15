let myDate = new Date()
console.log(myDate)
console.log(myDate.toString()) // output Tue Jul 15 2025 12:36:43 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()) // output 7/15/2025, 12:36:43 PM
console.log(myDate.toLocaleDateString()) // output 7/15/2025
console.log(myDate.toLocaleTimeString()) // output 12:36:43 PM
console.log(myDate.toISOString()) // output 2025-07-15T12:36:43.709Z
console.log(myDate.toJSON()) // output 2025-07-15T12:36:43.709Z

// to get the the indian time zone
console.log(myDate.toLocaleString("en-IN", {timeZone : "Asia/Kolkata"}))

console.log(typeof myDate) // output will be object

let myCreatedDate = new Date(2025,6,22, 24, 0)
console.log(myCreatedDate.toLocaleString()) // output 7/23/2025, 12:00:00 AM

let myTime = new Date("2025-07-23")
console.log(myTime.toLocaleString("en-IN")) // Output 23/7/2025, 12:00:00 am as indian date timezone

let timeStamp = Date.now()
console.log(timeStamp) // output will be in miliseconds and it will from 1st jan 1970 as timezone 
// is start from 1st jan 1970 in js

// if any particular date i have to convert in miliseconds
console.log(myTime.getTime())

// if i want to convert date in seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getDate()) // for particulate date
console.log(newDate.getMonth() + 1) // for particular month

