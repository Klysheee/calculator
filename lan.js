let a = Number(prompt());
let b = Number(prompt());
let c = prompt();
if(a , b , c){
    if(c == '+'){
        result = a + b;
    }
    else if(c == '-'){
        result = a - b;
    }
    if(c == '%'){
        result = a/b;
    }
    if(c == '*'){
        result = a * b;
    }
    else{
        console.log("некорректный ввод");
    }
    
};
console.log(result);
