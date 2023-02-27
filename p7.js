// 7. input string and validate it, if it is a valid URL or not [using RegEx]

let reg = /^(https:\/\/www.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g ;

let url = "https://www.w3schools.com/js";

// startWidth and endWidth Function.
// console.log(url.startsWith("https://"))

if(reg.test(url)){
    console.log("URL is valid");
}else{
    console.log("URL is not valid");
}

