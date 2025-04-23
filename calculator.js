function calculate(params){
    let num1 = document.getElementById("userinp").value;
    let num2 = document.getElementById("userinp1").value;

    if(params == 'add'){
        document.getElementById("result").value=parseInt(num1)+parseInt(num2)
    }
    else if (params == 'sub'){
        document.getElementById("result").value=parseInt(num1)-parseInt(num2)
    }
    else if (params == 'mul'){
        document.getElementById("result").value=parseInt(num1)*parseInt(num2)
    }
    else if (params == 'div'){
        document.getElementById("result").value=parseInt(num1)/parseInt(num2)
    }
}