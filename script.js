var database = [
	{
		username: "oussema",
		password: "1234"
	},
		{
		username: "emna",
		password: "12345"
	},
		{
		username: "fathi",
		password: "12344"
	},
];
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
 function isuservalid(username,password){
for (var i=0; i<database.length; i++){
	if(database[i].username===username&& database[i].password===password){
		return ("login success");
			 }
	}
	 return false;
 }
function signin(username, password) {
console.log(isuservalid(username,password));

	if (isuservalid(username,password)){
		console.log(newsfeed);
}	else{ 	
		alert("sorry wrong informations")
		 }
		}
var usernameprompt = prompt("what's your username ?");
var passwordprompt= prompt("what's your password ?");


signin(usernameprompt, passwordprompt); 