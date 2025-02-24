
// one function to hande them all

function operation(num1,op,num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(op == "+"){
        return num1+num2;
    }
    else if(op == "-"){
        return num1-num2;
    }
    else if(op == "*"){
        return num1*num2;
    }
    else if(op == "/"){
        return num1/num2;
    }



    return num1;

}

//to display the digit

function display(num){
    // strore the content too  in global variable onyly one number
    const screen = document.getElementById("Screen");
    const numberOnScreen = document.getElementById("numberOnScreen");
    numberOnScreen.textContent = `${num}`;

    screen.appendChild(numberOnScreen);

}

//adding event listener to all the button

const buttons = document.querySelectorAll("button"); //node list
let num1 = "";
let num2 = "";
let op = "";
let result = "";

buttons.forEach((button)=>{
    
    button.addEventListener("click", ()=>{

        let input = button.id;

        if(isNumber(input)){
            if(op === "" && num1.length <=5){
                num1 +=input;
                display(num1);
            }
            else if(op !== "" && num2.length <=5){
                num2 +=input;
                display(num2);
            }
            
        }
        else  if(isOperator(input)){

            if(num1 !== "" && num2 === "" ){
                op = input;
                display(num1 +" " + op);
            }
            else if(num1 !== "" && num2 !== "" ){
                num1 = operation(num1,op,num2).toString();
                op= "";
                num2 = "";
                display(num1);

            }

        }
        else{
            if(input === "ac"){
                num1 = "";
                num2 = "";
                op = "";
                display("0");
            }
            else if(input === "="){
                if(num1 !== "" && num2 !== ""){
                    num1 = operation(num1,op,num2).toString();
                    op= "";
                    num2 = "";
                    display(num1 + " " + op);
                }
                else if(op === ""){
                    display(num1);
                }
                else{
                    display(num1 + " " + op);
                }

            }
            else if(input === "."){
                if(op === "" && !(num1.includes("."))){
                    num1 = num1 ==="" ? "0." : num1+".";
                    display(num1);
                    
                }
                else if(op !== "" && !(num2.includes("."))){
                    num2 = num2 ==="" ? "0." : num2+".";
                    display(num2);
                }
            }



        }

    });

});

//to check for operand

function isNumber(input){
    
    return  /^[-+]?\d+(\.\d+)?$/.test(input);
}

function isOperator(input){
    
    return /^[+\-*/]$/.test(input);

}







