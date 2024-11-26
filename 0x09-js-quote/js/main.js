/* todo:
    # Task : click button display random quote
    * 1. function display quote
    * 2. function get the random index form array of obj
*/

var quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" }
];
function getRandomIndex() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return randomIndex;
}
function quoteDisplay() {
    var selectedQuote = quotes[getRandomIndex()];
    document.getElementById("quote").innerHTML = `"${selectedQuote.text}"`; 
    document.getElementById("author").innerHTML = `--${selectedQuote.author}`; 
}