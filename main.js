import data from "quote.js";
  //add in a const  variable
  const myBody = document.getElementById("body");
  const textReceipt = document.getElementById("text");
  const authorReceipt = document.getElementById("author");
  const btn = document.getElementById("new-quote");

  //test2

  function newQuote() {
    let color = "#";
  color += Math.random().toString(16).slice(2, 8);
  console.log(color);
    let index = Math.floor(Math.random() * data.length);

    let quoteContent = data[index].text;
    index;

    let authorContent = "";

    if (data[index].author == null) {
      authorContent = "Unknown";
    } else {
      authorContent = data[index].author;
    }

    textReceipt.innerHTML = quoteContent;
    authorReceipt.innerHTML = authorContent;

    myBody.style.backgroundColor = color;
    text.style.color = color;
    author.style.color = color;
  }
