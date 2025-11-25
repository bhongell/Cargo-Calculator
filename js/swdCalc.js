var swd =0;
function calculateSWD(){
    if ($("#units").is(":checked")){
        calculateSWDMetric();
    } else {
        calculateSWDImperial();
    }
}
function calculateSWDMetric(){
            if(DWA==0){
                swd=meanDraft
            }else{
                swd = meanDraft-(DWA/100);
            };
    document.getElementById('swd').textContent=swd.toFixed(2) + " M";
}

function calculateSWDImperial(){
//SWD Start
            if(DWA==0){
                swd=meanDraft
            }else{
                swd = meanDraft-DWA;
            };
    var feetSWD = Math.floor(swd/12);                 
    var inchesSWD = Math.round(swd % 12); 

     if (inchesSWD === 12) {
        feetSWD += 1;
        inchesSWD = 0;
    }
     // display as "X ft Y in"
    document.getElementById('swd').textContent = feetSWD + " ft " + inchesSWD + " in";
    
}