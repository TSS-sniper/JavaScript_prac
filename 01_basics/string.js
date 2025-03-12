const name ='Tarun'
const repoCount=20

//onsole.log(name+repoCount+' Value');

//String Interpolation:
//console.log(`Hi My name is ${name} and my Repo Count is ${repoCount}`);

//String Declaration (method 2)
const Gname= new String('Hello-There-im-TSS')
//console.log(Gname[0]);
//console.log(Gname.__proto__);
//console.log(Gname.length);
//console.log(Gname.toLowerCase());
//console.log(Gname.charAt(5));
//console.log(Gname.indexOf('o'));

const newString = Gname.substring(0,4); //Cant give negative Index Value
console.log(newString);

const anotherString= Gname.slice(0,6)
console.log(anotherString);

const String3 = new String('   Tarun   ');
console.log(String3)
console.log(String3.trim())

const url="https://tarun.com/tss%35sniper"

console.log(url.replace('%35','-'));

console.log(url.includes('nice'));

console.log(Gname.split('-'));

const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20


let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
