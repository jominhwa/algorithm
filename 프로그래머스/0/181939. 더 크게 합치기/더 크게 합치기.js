function solution(a, b) {
    ab = Number(a.toString() + b.toString());
    ba = Number(b.toString() + a.toString());
    
    return ab > ba ? ab : (ab == ba ? ab : ba);
}