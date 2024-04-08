function solution(n) {
    var answer = 0;
    
    for(let i = 0; i <= n; i += 2) {
            n % 2 !== 0 ? answer += i + 1 : answer += i * i
    }
    
    return answer;
}