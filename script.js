const textInput = document.getElementById('input-text');

const countWords = () => {
    const text = textInput.value;

    const wordArray = text.split(' ');

    console.log(wordArray.length);

    const countDisplay = document.getElementById('wordcount');
    countDisplay.innerText = `${wordArray.length} Words`;

    const goal = document.getElementById('goal').value;

    const goalDisplay = document.getElementById('goal-display');
    goalDisplay.innerText = `${ goal ? goal - wordArray.length : (500 - wordArray.length)} Left`
}

textInput.addEventListener('input', () => {
    countWords();
});