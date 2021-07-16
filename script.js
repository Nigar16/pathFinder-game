
let array=[];
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let rand=0;
let tbl=document.getElementById("tbl");
let td_id=0; 
let c;
let timer;

function start(){
    tbl.style.display="inline-block";
    document.getElementsByTagName("h1")[0].style.display="none";
    document.getElementsByTagName("h3")[0].style.display="none";
    document.getElementsByTagName("button")[1].style.display="none";
    timer=setTimeout(gameOver, 20000,"TIME IS OUT!");
    writeArray();
    c=1;
}


function writeArray(){
    let tr = '';
    fillRandom();
    for (let i = 0; i < 4; i++) {
        tr += `<tr>`;
        for (let j = 0; j < 4; j++) {
            tr += `<td  onclick="findPath(${i},${j},${td_id})"> ${array[i][j]}  </td>`;
            td_id++;
        }
        tr += `</tr>`;
    }
    tbl.innerHTML = tr;
}

function Arr() {
    for (let i = 0; i < 4; i++) {
        array[i] = [];
    }
}

function fillRandom(){
    Arr();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            rand=Math.floor(Math.random() * arr.length);
            array[i][j]=arr[rand];
            arr.splice(rand,1);
        }
    }
}


function findPath(a,b,id){
    setTimeout( winGame, 150);
    if(array[a][b]==c){
        c+=1;
        tbl.getElementsByTagName("td")[id].style.backgroundColor="green";
        tbl.getElementsByTagName("td")[id].style.color="white";
    }
    else{
        tbl.getElementsByTagName("td")[id].style.backgroundColor="red";
        tbl.getElementsByTagName("td")[id].style.color="black";
        setTimeout(gameOver, 300,"YOU  DID WRONG !");
    }
}

function winGame(){
    if(c==17){

        tbl.style.display="none";
        document.getElementsByTagName("button")[0].style.display="block";
        document.getElementsByTagName("h2")[0].innerText="YOU WON!";
        clearTimeout(timer);
    }
  
}

function gameOver(s){
    tbl.style.display="none";
    document.getElementsByTagName("button")[0].style.display="block";
    document.getElementsByTagName("h2")[0].innerText="GAME OVER! " + s;
    clearTimeout(timer);
}

function reset(){
    location.reload();
  }