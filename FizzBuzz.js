function fizzBuzz (){
    var a = 0;
    var b = 0;
    var c = 0;
    for(var i = 1; i <=100; i++){
        if(i % 3 == 0 && i % 5 !== 0){
            a ="fizz"
            console.log(a);
        }
        if(i % 5 == 0 && i % 3 !== 0){
            b ="buzz"
            console.log(b);
        }
        if(i % 3 == 0 && i % 5 == 0){
            c ="fizzbuzz"
            console.log(c);
        }
        if(i % 3 !== 0 && i % 5 !== 0){
            console.log(i);
        }
}
}
fizzBuzz();
