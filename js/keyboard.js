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

function pressQ(){keyPressed = 'Q'; lettersUsed.push(keyPressed); checkWord(); keyQ.disabled = true;}
function pressW(){keyPressed = 'W'; lettersUsed.push(keyPressed); checkWord(); keyW.disabled = true;}
function pressE(){keyPressed = 'E'; lettersUsed.push(keyPressed); checkWord(); keyE.disabled = true;}
function pressR(){keyPressed = 'R'; lettersUsed.push(keyPressed); checkWord(); keyR.disabled = true;}
function pressT(){keyPressed = 'T'; lettersUsed.push(keyPressed); checkWord(); keyT.disabled = true;}
function pressY(){keyPressed = 'Y'; lettersUsed.push(keyPressed); checkWord(); keyY.disabled = true;}
function pressU(){keyPressed = 'U'; lettersUsed.push(keyPressed); checkWord(); keyU.disabled = true;}
function pressI(){keyPressed = 'I'; lettersUsed.push(keyPressed); checkWord(); keyI.disabled = true;}
function pressO(){keyPressed = 'O'; lettersUsed.push(keyPressed); checkWord(); keyO.disabled = true;}
function pressP(){keyPressed = 'P'; lettersUsed.push(keyPressed); checkWord(); keyP.disabled = true;}
function pressA(){keyPressed = 'A'; lettersUsed.push(keyPressed); checkWord(); keyA.disabled = true;}
function pressS(){keyPressed = 'S'; lettersUsed.push(keyPressed); checkWord(); keyS.disabled = true;}
function pressD(){keyPressed = 'D'; lettersUsed.push(keyPressed); checkWord(); keyD.disabled = true;}
function pressF(){keyPressed = 'F'; lettersUsed.push(keyPressed); checkWord(); keyF.disabled = true;}
function pressG(){keyPressed = 'G'; lettersUsed.push(keyPressed); checkWord(); keyG.disabled = true;}
function pressH(){keyPressed = 'H'; lettersUsed.push(keyPressed); checkWord(); keyH.disabled = true;}
function pressJ(){keyPressed = 'J'; lettersUsed.push(keyPressed); checkWord(); keyJ.disabled = true;}
function pressK(){keyPressed = 'K'; lettersUsed.push(keyPressed); checkWord(); keyK.disabled = true;}
function pressL(){keyPressed = 'L'; lettersUsed.push(keyPressed); checkWord(); keyL.disabled = true;}
function pressÑ(){keyPressed = 'Ñ'; lettersUsed.push(keyPressed); checkWord(); keyÑ.disabled = true;}
function pressZ(){keyPressed = 'Z'; lettersUsed.push(keyPressed); checkWord(); keyZ.disabled = true;}
function pressX(){keyPressed = 'X'; lettersUsed.push(keyPressed); checkWord(); keyX.disabled = true;}
function pressC(){keyPressed = 'C'; lettersUsed.push(keyPressed); checkWord(); keyC.disabled = true;}
function pressV(){keyPressed = 'V'; lettersUsed.push(keyPressed); checkWord(); keyV.disabled = true;}
function pressB(){keyPressed = 'B'; lettersUsed.push(keyPressed); checkWord(); keyB.disabled = true;}
function pressN(){keyPressed = 'N'; lettersUsed.push(keyPressed); checkWord(); keyN.disabled = true;}
function pressM(){keyPressed = 'M'; lettersUsed.push(keyPressed); checkWord(); keyM.disabled = true;}

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

// Esta funcion desbloquea el teclado virtual cuando se inicia un nuevo juego
function keyboardUnlock(){
    keyQ.disabled = false;
    keyW.disabled = false;
    keyE.disabled = false;
    keyR.disabled = false;
    keyT.disabled = false;
    keyY.disabled = false;
    keyU.disabled = false;
    keyI.disabled = false;
    keyO.disabled = false;
    keyP.disabled = false;
    keyA.disabled = false;
    keyS.disabled = false;
    keyD.disabled = false;
    keyF.disabled = false;
    keyG.disabled = false;
    keyH.disabled = false;
    keyJ.disabled = false;
    keyK.disabled = false;
    keyL.disabled = false;
    keyÑ.disabled = false;
    keyZ.disabled = false;
    keyX.disabled = false;
    keyC.disabled = false;
    keyV.disabled = false;
    keyB.disabled = false;
    keyN.disabled = false;
    keyM.disabled = false;
    keyQ.removeAttribute('style');
    keyW.removeAttribute('style');
    keyE.removeAttribute('style');
    keyR.removeAttribute('style');
    keyT.removeAttribute('style');
    keyY.removeAttribute('style');
    keyU.removeAttribute('style');
    keyI.removeAttribute('style');
    keyO.removeAttribute('style');
    keyP.removeAttribute('style');
    keyA.removeAttribute('style');
    keyS.removeAttribute('style');
    keyD.removeAttribute('style');
    keyF.removeAttribute('style');
    keyG.removeAttribute('style');
    keyH.removeAttribute('style');
    keyJ.removeAttribute('style');
    keyK.removeAttribute('style');
    keyL.removeAttribute('style');
    keyÑ.removeAttribute('style');
    keyZ.removeAttribute('style');
    keyX.removeAttribute('style');
    keyC.removeAttribute('style');
    keyV.removeAttribute('style');
    keyB.removeAttribute('style');
    keyN.removeAttribute('style');
    keyM.removeAttribute('style');
}