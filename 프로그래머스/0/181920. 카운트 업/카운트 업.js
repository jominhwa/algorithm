function solution(start_num, end_num) {
    return [...Array(end_num+1-start_num)].map((_,i)=>i+start_num);
}