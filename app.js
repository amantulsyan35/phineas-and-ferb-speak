const translate = document.querySelector('#translate');
const enteredText = document.querySelector('#enteredText');
const translatedText = document.querySelector('#translatedText');

apiURL = `https://api.funtranslations.com/translate/ferb-latin.json?`;

function constructedURL(text) {
  return apiURL + 'text=' + text;
}

function errorHandler(error) {
  console.log('error occured', error);
}

translate.addEventListener('click', () => {
  value = enteredText.value;
  fetch(constructedURL(value))
    .then((response) => response.json())
    .then((json) => {
      let text = json.contents.translated;
      translatedText.innerText = text;
    })
    .catch(errorHandler);
});
