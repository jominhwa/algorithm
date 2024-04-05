function solution(str1, str2) {
    var answer = '';

    var arr = [...str1].map((element, index) => {
        return element + [...str2][index];
    })
    answer = arr.join('');
    
    return answer;
}