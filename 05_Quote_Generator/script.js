const api_url = "https://api.quotable.io/random";

const newQuote = document.getElementById('newQuote');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const tweet = document.getElementById('tweet');

async function getQuote(api_url){
    const response = await fetch(api_url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = "-- "+data.author;
}

getQuote(api_url);


newQuote.addEventListener('click',function(e){
    getQuote(api_url);
})

tweet.addEventListener('click',function(e){
    Tweet();
},false)

function Tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML+"----- by "+ author.innerHTML,"Tweet Window","width=600,height = 300");
}