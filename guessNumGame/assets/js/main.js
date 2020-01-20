
    let ans = Math.floor(Math.random() * 100 + 1);
    let chance = 10
    console.log(ans);
    document.getElementById('chance').innerHTML = 'You have '+chance+' chance';
    let txt = '';
    document.getElementById('res').disabled = true;

    function Cnum(){ 
   // number guessed by user      
   var x = document.getElementById("num").value;
   console.log(x);
  
   if (isNaN(x)||x==''){
    document.getElementById('lessOrMore').innerHTML = 'Something Wrong Pls Enter a Number!!'
    return;
   }

   if(x == ans) 
   {
    document.getElementById('correctOrNot').innerHTML = 'Correct !!';
    document.getElementById('lessOrMore').innerHTML = '';
    document.getElementById('allOfGnum').innerHTML = '';
    document.getElementById("num").disabled = true;
    document.getElementById("subm").disabled = true;
    document.getElementById("res").disabled = false;
    document.getElementById('chance').style.visibility = "hidden";
   } 
   else if(x > ans)
   {     
    document.getElementById('lessOrMore').innerHTML = 'Please Guess agian with a smaller number'
   } 
   else if(x< ans)
   {
    document.getElementById('lessOrMore').innerHTML = 'Please Guess agian with a bigger number'
   }
   txt += x + ' ';
   document.getElementById('allOfGnum').innerHTML = txt;
   chance--;
   document.getElementById('chance').innerHTML = 'You have '+chance+' chance';

   if(chance <= 0){
    document.getElementById("num").disabled = true;
    document.getElementById("subm").disabled = true;
    document.getElementById('chance').innerHTML = 'Game Over You lose!';
    document.getElementById("res").disabled = false;
}

}

function reset(){
    document.getElementById('correctOrNot').innerHTML = '';
    document.getElementById("num").disabled = false;
    document.getElementById("subm").disabled = false;
    document.getElementById('chance').style.visibility = "visible";
    chance = 10;
    document.getElementById('chance').innerHTML = 'You have '+chance+' chance';
    txt = '';
    document.getElementById('allOfGnum').innerHTML = txt;
    document.getElementById('lessOrMore').innerHTML = '';
    ans = Math.floor(Math.random() * 100 + 1)
    console.log(ans);
    document.getElementById("res").disabled = true;
    document.getElementById("num").value = "";
}