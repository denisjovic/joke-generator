const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline;

const getPunchline = () => {
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add('bubble');
  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
};

punchlineBtn.addEventListener('click', getPunchline);

const getJoke = async () => {
  const jokePromise = await fetch(
    'https://official-joke-api.appspot.com/jokes/programming/random'
  );
  const joke = await jokePromise.json();

  setupDiv.innerHTML = joke[0].setup;

  punchline = joke[0].punchline;
  punchlineDiv.innerHTML = '';
  punchlineDiv.classList.remove('bubble');

  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
};

newJokeBtn.addEventListener('click', getJoke);

getJoke();
