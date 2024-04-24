const object = {
    '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
}

function solution(numLog) {
    return numLog.map((e, i)=>object[e - numLog[i - 1]]).join('');
}