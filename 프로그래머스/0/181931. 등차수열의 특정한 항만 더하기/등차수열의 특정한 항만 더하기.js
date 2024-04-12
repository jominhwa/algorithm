function solution(a, d, included) {
    return eval(included.map((e,i)=>e?a+(d*i):0).join("+"));
}