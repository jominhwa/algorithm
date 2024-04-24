function solution(n, control) {
    [...control].map((e)=>{switch(e) {
        case "w": return n+=1;
        case "s": return n-=1;
        case "d": return n+=10;
        case "a": return n-=10;
    }})
    
    return n;
}