var swd =0;
function calculateSWD(){
//SWD Start
    swd = meanDraft-DWA;
    var feetSWD = Math.floor(swd/12);                 
    var inchesSWD = Math.round(swd % 12); 

     if (inchesSWD === 12) {
        feetSWD += 1;
        inchesSWD = 0;
    }
     // display as "X ft Y in"
    document.getElementById('swd').textContent = feetSWD + " ft " + inchesSWD + " in";
    
}