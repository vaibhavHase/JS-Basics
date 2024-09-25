let myDate = new Date()
// console.log(myDate.toString()) // Wed Sep 25 2024 10:46:41 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString()) // 9/25/2024
// console.log(myDate.toLocaleString())  // 9/25/2024, 10:48:37 AM
// console.log(typeof (myDate))

//let myCreatedDate =new Date(2022,1,5);  // 2/5/2022, 12:00:00 AM
//let myCreatedDate =new Date(2022,1,5,5,3);  //2/5/2022, 5:03:00 AM
  let myCreatedDate =new Date("06-18-2023");  //6/18/2023, 12:00:00 AMc
  console.log(myCreatedDate.toLocaleString()); 


  let timeStamp = Date.now();  //1727242773984  gives time in ms from jan 1970
//   console.log(timeStamp);
//   console.log(myCreatedDate.getTime());
  console.log(Math.floor(myCreatedDate.getTime()/1000));

        
  console.log(myDate.getMonth())