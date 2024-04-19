function solution(a, b, c) {
    return a===b&&a===c ? 27*(a**6) : (a===b||a===c||b===c ? (a+b+c)*(a**2+b**2+c**2) : a+b+c);
}