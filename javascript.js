var quotes= [
"I am always doing that which I can not do, in order that I may learn how to do it -Pablo Picasso",
"When something is important enough, you do it even if the odds are not in your favor -Elon Musk",
"There is more treasure in books than in all the pirate's loot on treasure island -Walt Disney",
"Every man dies, but not every man really lives -Braveheart",
"Do one thing every day that scares you -Elenor Roosevelt"


]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}

function myFunction (){
 var input = document.getElementById("InputQuote").value;
 String(input);
 quotes.push(input);
}
// github and heroku, add padding, make simple style to get familiar with bootstrap///
