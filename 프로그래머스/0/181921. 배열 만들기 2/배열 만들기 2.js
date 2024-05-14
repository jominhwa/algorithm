function solution(l, r) {
    const arr = [...Array(r+1-l)].map((_,i)=>i+l).filter(e=>/^[50]+$/.test(e));
    return arr.length ? arr : [-1];
}