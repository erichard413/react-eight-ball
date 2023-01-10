const getRandom = (answers) => {
    let idx = Math.floor(Math.random(answers.length) * answers.length);
    return answers[idx];
}

export default getRandom;