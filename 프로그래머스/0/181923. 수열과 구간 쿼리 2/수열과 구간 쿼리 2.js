function solution(arr, queries) {
    return queries.map(([s, e, k])=>{
        var a = [];
        for(let i=s; i<=e; i++){
            if(arr[i] > k) {
                a.push(arr[i]);
            }
        }
        return a.length>0 ? Math.min(...a) : -1;
    })
}