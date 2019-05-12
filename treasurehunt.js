//icons assigned to ?s
//have the qustion marks return a random

function randomizeIcons(){
    var boxIdA= [0,0,0,0,0,0,0,0,0]
    var randomNum = Math.floor(Math.random()*8)
    var boxIdLength = boxIdA.length-1
    console.log(boxIdLength)
    for(var i=0 ; boxIdLength >= i; i++){
      boxIdA[i]= randomIcon()
    }
    boxIdA[randomNum]= 3
    console.log(randomNum)
    console.log(boxIdA)
    return(boxIdA)
}
var boxId= randomizeIcons()
console.log(boxId)
function randomIcon(){
    number12 = Math.floor(Math.random()*2) +1
    return(number12)
}
var counter= 1
console.log("second place in boxId", boxId[1])
function treasure(valueId){
    console.log(counter)

    console.log("Testing to see if boxId gets passed through", boxId)
    if( boxId[valueId] === 2){
        for(var i=0 ; 8 >= i; i++){
          document.getElementById(i).innerHTML ="&#x2620"}
          alert("you lost :(")
          location.reload()
        }
        else if(boxId[valueId] === 3){
            for(var i=0 ; 8 >= i; i++){
              document.getElementById(i).innerHTML ="&#x1f308"}
        alert("YOU FOUND THE TREASURE, YOU WIN")
        document.getElementById(11).innerHTML ="How many trys it took you to win: "
        document.getElementById(10).innerHTML = counter
        counter=0
        boxId=[3,3,3,3,3,3,3,3,3]
    }else{
        alert("Try again")
        document.getElementById(valueId).innerHTML ="&#x1f332"
    }
    if(counter===1){
         document.getElementById(10).innerHTML ="2"}
        else if(counter===2){
         document.getElementById(10).innerHTML ="1"}
        else if(counter===3){
         document.getElementById(10).innerHTML ="0"
         alert("out of trys you lost :(")
         location.reload()}
}
