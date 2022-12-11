let butons = document.querySelectorAll('#btn');
let equation = document.getElementById('eqn');
let sym;
let op;
for(let i = 0; i < butons.length ; i++){
    butons[i].addEventListener('click', function f(){
      
        sym = butons[i].innerHTML;
        
        equation.innerHTML += sym

    })
}
let oprts = document.querySelectorAll('#opr');
for(let i = 0; i < oprts.length ; i ++){
    oprts[i].addEventListener('click',function g(){
        
         op = oprts[i].innerHTML;
       
        equation.innerHTML += op;
    })
}
function result(){
    let eq = equation.innerHTML;
   
    let k = eq.indexOf(op);
    
    let op1 = eq.substring(0,k);
    let op2 = eq.substring(k+1,equation.length);
    if(op == '+'){
        let sum = parseInt(op1)  +parseInt(op2)  ;
    
    equation.innerHTML += "=" + sum
    }
    if(op == '-'){
        let dif = parseInt(op1) - parseInt(op2)  ;
    
    equation.innerHTML += "=" + dif
    }
    if(op == '*'){
        let mul = parseInt(op1) * parseInt(op2)  ;
    
    equation.innerHTML += "=" + mul
    }
    if(op == '/'){
        let sum = parseInt(op1)  / parseInt(op2)  ;
    
    equation.innerHTML += "=" + sum
    }

   
    
}
function clean(){
   
    equation.innerHTML =  " "
}
