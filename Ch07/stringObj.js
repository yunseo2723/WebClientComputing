let str = String("안녕하세요?Hi?ㅋㅋHi");

console.log(str.charAt(2));
console.log(str.charCodeAt(2));
console.log(str.concat("하세요!"));
console.log(str.indexOf("Hi"));
console.log(str.indexOf("Hi", 8));
console.log(str.lastIndexOf("Hi"));
console.log(str.replace("?","!"));
console.log(str.replaceAll("?","!"));
console.log(str.search("ㅋ"));
console.log(str.slice(0,2));
console.log(str.split("?"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());