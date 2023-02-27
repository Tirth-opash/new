// 5. input date and convert it to an object
//     eg. date = new Date() = '2021-12-22T11:07:03.123Z'
//     o/p. { year: 2021, month: 12, date: 22, hour: 11, minute: 07, second: 03, ms: 123 } 


let date = new Date('2021-12-22T11:07:03.123Z');

let dateObject = {
    'year' : date.getFullYear(),
    'month' : date.getMonth()+1,
    'date' : date.getDate(),
    'hour' : date.getUTCHours(),
    'minute' : date.getUTCMinutes(),
    'second' : date.getSeconds(),
    'ms' : date.getMilliseconds()
}

console.log(dateObject);