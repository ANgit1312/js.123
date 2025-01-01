const name ="ankit"
const repoCount = 50

//console.log(name + repoCount + "value");//outdated method


//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
//modern method,follow it(string interpolation)
// can do things on the go

const gameName = new String("g-a-m-e");
// string is a object in console

//.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3)
//console.log(newString);

const anotherString = gameName.slice(-3,4)
//console.log(anotherString);
//can't give negative values in substring

//slice is more powerful than substring

const newString1 = " ankit  "
 console.log(newString1);
 console.log(newString1.trim());//remove spaces at begining and end of string

const url = "https://ankit.com/ankit%20"

console.log(url.replace('%20', '-'));
console.log(url.includes('jhgk'))


console.log(gameName.split('-'));
