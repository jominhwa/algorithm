function solution(arr, queries) {
    queries.forEach(([s, e, k])=>[...Array(e+1-s)].map((_, i)=>i+s).filter(i=>i%k===0).map(i=>arr[i]++));
    return arr;
}