function solution(code) {
    var ret = '';
    var mode = 0;
    [...code].map((e, i) => {
        if(mode === 0) {
            e === "1" ? mode = 1 : (i % 2 ? '' : ret += e);
        } else {
            e === "1" ? mode = 0 : (i % 2 ? ret += e : '');
        }
    })
    return !ret ? 'EMPTY' : ret;
}