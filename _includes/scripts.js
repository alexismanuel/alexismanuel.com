hashCode = function(s) {
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
};
checkAnswer = function(i, n) {
    let answerMap = {
        1: n == 108 | n == 76,
        2: n == 1511331,
        3: n == 3052488,
        4: n == 55,
    }
    return answerMap[i]
}
fetchPart = function(n) {
    let partMap = {
        108: 2,
        1511331: 1,
        3052488: 6,
        55: 7,
    }
    return partMap[n]
};
