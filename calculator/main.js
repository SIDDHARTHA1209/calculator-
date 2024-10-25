let number =0
let number2 =0
let result=0
let result2=0
let result3=0
let result4=0
document.getElementById("add").onclick=function(){
    console.log("add was clicked")
    number=number+1
    console.log(number)
    document.getElementById("num").innerHTML=number
}

document.getElementById("reset").onclick=function(){
    console.log("reset was clicked")
    number=0
    console.log("number")
    document.getElementById("num").innerHTML=number
}
document.getElementById("sub").onclick=function(){
    console.log("sub was clicked")
    number=number-1
    console.log(number)
    document.getElementById("num").innerHTML=number
    if(number<0){
        console.log("its -ve value")
        number=0
        document.getElementById("num").innerHTML="Error"
    }
else if(number==2){
    console.log("its -ve value")
    number=0
    document.getElementById("num").innerHTML="Error"    

}
else if(number==2){
    console.log("you have to choose 2")

}
else{
    console.log("ok")
}
}

document.getElementById("add2").onclick=function(){
console.log("add was clicked")
number2=number2+1
console.log("number2")
}