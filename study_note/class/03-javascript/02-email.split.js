const email = "123456@gmail.com";

email.includes("@");
//  true

email.split("@");
// ['123456' , 'gmail.com']

email.split("@")[0];
// ['123456']

email.split("@")[1];
// ['gmail.com']

let userMail = email.slit("@")[0]; // "codecamp"
let company = email.slit("@")[1]; // "gmail.com"

// userMail을 한글자씩 넣어주기 위한 빈배열
let maskingMail = [];
maskingMail.push(userMail[0]);
maskingMail.push(userMail[1]);
maskingMail.push(userMail[2]);
maskingMail.push(userMail[3]);
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");

// maskingMail = ["c","o","d","e","*","*","*","*"]

let emailMasking = maskingMain.join("") + "@" + company;
// 'code****@gmail.com'

let result = maskingMain.join("") + "@" + company;
