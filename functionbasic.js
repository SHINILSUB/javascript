//함수선언 2
function dosomething(add) {
    console.log(add);
    //3**
    const result = add(2, 3);
    console.log(result);
}
//1**여기에 넣지 말것
function add(a, b) {
    const sum = a + b;
    return sum;
}

//함수호출
dosomething(add);