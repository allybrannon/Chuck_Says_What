"use strict";

let category = "dev";

const refreshQuoteButton = document.querySelector("#refreshQuote");
const submitFormButton = document.querySelector("#submitForm");
const categoryChangeForm = document.querySelector("#categoryChangeForm");

const getQuote = async category => {
  const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const chuckSaysParagraph = document.querySelector("#chuckSays");

  const theQuote = await getWithAwait(apiUrl);
  chuckSaysParagraph.innerHTML = theQuote.value;
};

const getCategories = async () => {
  const apiUrl = `https://api.chucknorris.io/jokes/categories`;
  const categorySelectLabel = document.querySelector("#categorySelectLabel");

  const categoryList = await getWithAwait(apiUrl);
  // create a select option for the categories
  const categoryElement = document.createElement("select");
  //create the options for the select element
  categoryList.map(function(category) {
    const categoryOption = document.createElement("option");
    categoryOption.value = category;
    categoryOption.text = category;
    categoryElement.append(categoryOption);
  });
  categorySelectLabel.appendChild(categoryElement);
};

refreshQuoteButton.addEventListener("click", function(e) {
  e.preventDefault();
  getQuote(category);
});

submitFormButton.addEventListener("click", function(e) {
  e.preventDefault();
  const categoryInput = document.querySelector("#categoryChangeForm select");

  category = categoryInput.value;
  getQuote(category);
});

getQuote(category);
getCategories();

getWithAwait(`https://api.chucknorris.io/jokes/random?category=dev`);
