const counter = (answer, obj) => {
    obj[answer.color]++
    return obj;
}

export default counter;