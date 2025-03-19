<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JavaScript_UserInput</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<script src="script.js"></script>
 

<h1 id="welcome"></h1>
<label for="myText">Username:</label>
<input type="text" id="myText">
<button id="mySubmit">Submit</button>
</body>
</html>
let username = window.prompt("What's your username?");

console.log(username);

let username;
document.getElementById("mySubmit").onclick = function() {
username = document.getElementById("myText").value;
console.log(username);
}

document.getElementById("welcome").textContent = `Hello, ${username}!`;
