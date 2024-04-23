function solution(num_list) {
    var product = num_list.reduce((acc, cur)=> acc *= cur);
    var square = num_list.reduce((acc, cur)=> acc += cur)**2;
    
    return +(product < square);
}