const keyQ = document.querySelector('.btn-Q');
const keyW = document.querySelector('.btn-W');
const keyE = document.querySelector('.btn-E');
const keyR = document.querySelector('.btn-R');
const keyT = document.querySelector('.btn-T');
const keyY = document.querySelector('.btn-Y');
const keyU = document.querySelector('.btn-U');
const keyI = document.querySelector('.btn-I');
const keyO = document.querySelector('.btn-O');
const keyP = document.querySelector('.btn-P');
const keyA = document.querySelector('.btn-A');
const keyS = document.querySelector('.btn-S');
const keyD = document.querySelector('.btn-D');
const keyF = document.querySelector('.btn-F');
const keyG = document.querySelector('.btn-G');
const keyH = document.querySelector('.btn-H');
const keyJ = document.querySelector('.btn-J');
const keyK = document.querySelector('.btn-K');
const keyL = document.querySelector('.btn-L');
const keyÑ = document.querySelector('.btn-Ñ');
const keyZ = document.querySelector('.btn-Z');
const keyX = document.querySelector('.btn-X');
const keyC = document.querySelector('.btn-C');
const keyV = document.querySelector('.btn-V');
const keyB = document.querySelector('.btn-B');
const keyN = document.querySelector('.btn-N');
const keyM = document.querySelector('.btn-M');

keyQ.addEventListener('click', pressQ);
keyW.addEventListener('click', pressW);
keyE.addEventListener('click', pressE);
keyR.addEventListener('click', pressR);
keyT.addEventListener('click', pressT);
keyY.addEventListener('click', pressY);
keyU.addEventListener('click', pressU);
keyI.addEventListener('click', pressI);
keyO.addEventListener('click', pressO);
keyP.addEventListener('click', pressP);
keyA.addEventListener('click', pressA);
keyS.addEventListener('click', pressS);
keyD.addEventListener('click', pressD);
keyF.addEventListener('click', pressF);
keyG.addEventListener('click', pressG);
keyH.addEventListener('click', pressH);
keyJ.addEventListener('click', pressJ);
keyK.addEventListener('click', pressK);
keyL.addEventListener('click', pressL);
keyÑ.addEventListener('click', pressÑ);
keyZ.addEventListener('click', pressZ);
keyX.addEventListener('click', pressX);
keyC.addEventListener('click', pressC);
keyV.addEventListener('click', pressV);
keyB.addEventListener('click', pressB);
keyN.addEventListener('click', pressN);
keyM.addEventListener('click', pressM);

function pressQ(){keyPressed = 'Q'; checkWord(); keyQ.disabled = true;}
function pressW(){keyPressed = 'W'; checkWord(); keyW.disabled = true;}
function pressE(){keyPressed = 'E'; checkWord(); keyE.disabled = true;}
function pressR(){keyPressed = 'R'; checkWord(); keyR.disabled = true;}
function pressT(){keyPressed = 'T'; checkWord(); keyT.disabled = true;}
function pressY(){keyPressed = 'Y'; checkWord(); keyY.disabled = true;}
function pressU(){keyPressed = 'U'; checkWord(); keyU.disabled = true;}
function pressI(){keyPressed = 'I'; checkWord(); keyI.disabled = true;}
function pressO(){keyPressed = 'O'; checkWord(); keyO.disabled = true;}
function pressP(){keyPressed = 'P'; checkWord(); keyP.disabled = true;}
function pressA(){keyPressed = 'A'; checkWord(); keyA.disabled = true;}
function pressS(){keyPressed = 'S'; checkWord(); keyS.disabled = true;}
function pressD(){keyPressed = 'D'; checkWord(); keyD.disabled = true;}
function pressF(){keyPressed = 'F'; checkWord(); keyF.disabled = true;}
function pressG(){keyPressed = 'G'; checkWord(); keyG.disabled = true;}
function pressH(){keyPressed = 'H'; checkWord(); keyH.disabled = true;}
function pressJ(){keyPressed = 'J'; checkWord(); keyJ.disabled = true;}
function pressK(){keyPressed = 'K'; checkWord(); keyK.disabled = true;}
function pressL(){keyPressed = 'L'; checkWord(); keyL.disabled = true;}
function pressÑ(){keyPressed = 'Ñ'; checkWord(); keyÑ.disabled = true;}
function pressZ(){keyPressed = 'Z'; checkWord(); keyZ.disabled = true;}
function pressX(){keyPressed = 'X'; checkWord(); keyX.disabled = true;}
function pressC(){keyPressed = 'C'; checkWord(); keyC.disabled = true;}
function pressV(){keyPressed = 'V'; checkWord(); keyV.disabled = true;}
function pressB(){keyPressed = 'B'; checkWord(); keyB.disabled = true;}
function pressN(){keyPressed = 'N'; checkWord(); keyN.disabled = true;}
function pressM(){keyPressed = 'M'; checkWord(); keyM.disabled = true;}

// Desactiva tecla de teclado virtual luego de ser presionada, mediante teclado fisico
function disableKey(){
    if(keyPressed == 'Q'){keyQ.disabled = true;}
    if(keyPressed == 'W'){keyW.disabled = true;}
    if(keyPressed == 'E'){keyE.disabled = true;}
    if(keyPressed == 'R'){keyR.disabled = true;}
    if(keyPressed == 'T'){keyT.disabled = true;}
    if(keyPressed == 'Y'){keyY.disabled = true;}
    if(keyPressed == 'U'){keyU.disabled = true;}
    if(keyPressed == 'I'){keyI.disabled = true;}
    if(keyPressed == 'O'){keyO.disabled = true;}
    if(keyPressed == 'P'){keyP.disabled = true;}
    if(keyPressed == 'A'){keyA.disabled = true;}
    if(keyPressed == 'S'){keyS.disabled = true;}
    if(keyPressed == 'D'){keyD.disabled = true;}
    if(keyPressed == 'F'){keyF.disabled = true;}
    if(keyPressed == 'G'){keyG.disabled = true;}
    if(keyPressed == 'H'){keyH.disabled = true;}
    if(keyPressed == 'J'){keyJ.disabled = true;}
    if(keyPressed == 'K'){keyK.disabled = true;}
    if(keyPressed == 'L'){keyL.disabled = true;}
    if(keyPressed == 'Ñ'){keyÑ.disabled = true;}
    if(keyPressed == 'Z'){keyZ.disabled = true;}
    if(keyPressed == 'X'){keyX.disabled = true;}
    if(keyPressed == 'C'){keyC.disabled = true;}
    if(keyPressed == 'V'){keyV.disabled = true;}
    if(keyPressed == 'B'){keyB.disabled = true;}
    if(keyPressed == 'N'){keyN.disabled = true;}
    if(keyPressed == 'M'){keyM.disabled = true;}
}

// Esta funcion bloquea el teclado virtual cuando el juego termina
function keyboardLock(){
    keyQ.disabled = true;
    keyW.disabled = true;
    keyE.disabled = true;
    keyR.disabled = true;
    keyT.disabled = true;
    keyY.disabled = true;
    keyU.disabled = true;
    keyI.disabled = true;
    keyO.disabled = true;
    keyP.disabled = true;
    keyA.disabled = true;
    keyS.disabled = true;
    keyD.disabled = true;
    keyF.disabled = true;
    keyG.disabled = true;
    keyH.disabled = true;
    keyJ.disabled = true;
    keyK.disabled = true;
    keyL.disabled = true;
    keyÑ.disabled = true;
    keyZ.disabled = true;
    keyX.disabled = true;
    keyC.disabled = true;
    keyV.disabled = true;
    keyB.disabled = true;
    keyN.disabled = true;
    keyM.disabled = true;    
}