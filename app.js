function calc() {
    let number01;
    let number02;

    number01 =new Number(document.getElementById("number01").value);
    number02 =new Number(document.getElementById("number02").value);

    //number01 =new number(document.getElementById("number01").value);
    //number02 =new number(document.getElementById("number02").value);

    let op=document.getElementById("op").value;
    let lbloutput = document.getElementById("output");

   console.log(number01+number02);

   //console.log(number01+number02);

    switch(op){
        case "+":
            lbloutput.innerHTML=number01+number02; break;
    }
    
    console.log(typeof number01);
    console.log(typeof number02);


}