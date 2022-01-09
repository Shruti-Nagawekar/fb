// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var user = {
	username: "John",
	password: "123456789"
};

var database = [
	{	
		username: "John",
		password: "123456789"
	},
];

var newsfeed = [
	{	
		username: "Karen",
		timeline: "Ugh I hate mondays",
	},
	{	
		username: "Sally",
		timeline: "Happy to announce I am working at Meta",
	},{	
		username: "shrutin",
		timeline: "Grateful for everyhting",
	},
]

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if(
		user === database[0].username &&
		pass === database[0].password
	)
	{
		console.log("Hey Welcome!")
	}
	else{
		alert("Sorry, wrong username and password!")
	}
}
signIn(userNamePrompt, passwordPrompt);