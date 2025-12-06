var tonnageCurrent=0;

function currentTonnage(){
    if ($("#units").is(":checked")){
        calculateCurrentTonnageMetric();
    } else {
        calculateCurrentTonnageImperial();
    }
}
function calculateCurrentTonnageMetric(){
//Variables
    var hvyM = parseInt(document.getElementById('draft-hvy-ft').value) ||"";
    var draftHvyM=Number(hvyM)||0;
    var liteM = parseInt(document.getElementById('draft-lite-ft').value) ||"";
    var draftLiteM=Number(liteM)||0;
    var tonHvy = parseInt(document.getElementById('heavy-tons').value) ||"";
    var tonnageHvy=Number(tonHvy)||0;
    var tonLite = parseInt(document.getElementById('light-tons').value) ||"";
    var tonnageLite=Number(tonLite)||0;
    console.log("drafts", draftHvyM, draftLiteM, tonnageHvy, tonnageLite)
//Calculations
        //Draft side
    var draftDen = draftHvyM-draftLiteM;
    let hvySwd = draftHvyM-swd;
    let swdLite = swd-draftLiteM;
    let draftNum = Math.min(hvySwd,swdLite);
    //Tonnage side
    var tonnageDen = tonnageHvy-tonnageLite;
    //Cross multiply
    var tonnageDifference = draftNum*tonnageDen/draftDen;
    //Apply to tonnage
    if(draftNum===hvySwd){
        tonnageCurrent = tonnageHvy-tonnageDifference; 
    }else{
        tonnageCurrent = tonnageLite+tonnageDifference;
    }
    document.getElementById('current-tons').textContent = tonnageCurrent.toFixed(2);
// Logic Checks
if(hvyM==""|liteM==""||tonHvy==""||tonLite==""){
    // label the "div id" as id to check and label based on above.
    const ids = ["draft-hvy-ft", "draft-hvy-in", "draft-lite-ft", "draft-lite-in", "heavy-tons", "light-tons"];

    ids.forEach(id => {
        const input = document.getElementById(id);

        if (input.value.trim() === "") {
            input.classList.add("improper");
        }
    });
}
if(hvyFt!=""&&hvyIn!=""&&liteFt!=""&&liteIn!=""&&tonHvy!=""&&tonLite!=""){
    document.getElementById('draft-hvy-ft').classList.remove("improper");
    document.getElementById('draft-hvy-in').classList.remove("improper");    
    document.getElementById('draft-lite-ft').classList.remove("improper");
    document.getElementById('draft-lite-in').classList.remove("improper");
    document.getElementById('heavy-tons').classList.remove("improper");
    document.getElementById('light-tons').classList.remove("improper");
    }
}
function calculateCurrentTonnageImperial(){
//variables
    var hvyFt = parseInt(document.getElementById('draft-hvy-ft').value) ||"";
    var draftHvyFt=Number(hvyFt)||0;
    var hvyIn = parseInt(document.getElementById('draft-hvy-in').value) ||"";
    var draftHvyIn=Number(hvyIn)||0;
    var liteFt = parseInt(document.getElementById('draft-lite-ft').value) ||"";
    var draftLiteFt=Number(liteFt)||0;
    var liteIn = parseInt(document.getElementById('draft-lite-in').value) ||"";
    var draftLiteIn=Number(liteIn)||0;
    var tonHvy = parseInt(document.getElementById('heavy-tons').value) ||"";
    var tonnageHvy=Number(tonHvy)||0;
    var tonLite = parseInt(document.getElementById('light-tons').value) ||"";
    var tonnageLite=Number(tonLite)||0;
//calculations
    //drafts to inches
    var draftHvyFtIn = (draftHvyFt*12)+draftHvyIn;
    var draftLiteFtIn = (draftLiteFt*12)+draftLiteIn;
    //Draft side
    var draftDen = draftHvyFtIn-draftLiteFtIn;
    let hvySwd = draftHvyFtIn-swd;
    let swdLite = swd-draftLiteFtIn;
    let draftNum = Math.min(hvySwd,swdLite);
    //Tonnage side
    var tonnageDen = tonnageHvy-tonnageLite;
    //Cross multiply
    var tonnageDifference = draftNum*tonnageDen/draftDen;
    //Apply to tonnage
    if(draftNum===hvySwd){
        tonnageCurrent = tonnageHvy-tonnageDifference; 
    }else{
        tonnageCurrent = tonnageLite+tonnageDifference;
    }
    document.getElementById('current-tons').textContent = tonnageCurrent.toFixed(2);
// Logic Checks
    if(hvyFt==""||hvyIn==""||liteFt==""||liteIn==""||tonHvy==""||tonLite==""){
        // label the "div id" as id to check and label based on above.
        const ids = ["draft-hvy-ft", "draft-hvy-in", "draft-lite-ft", "draft-lite-in", "heavy-tons", "light-tons"];

        ids.forEach(id => {
            const input = document.getElementById(id);

            if (input.value.trim() === "") {
                input.classList.add("improper");
            }
        });
    }
    if(hvyFt!=""&&hvyIn!=""&&liteFt!=""&&liteIn!=""&&tonHvy!=""&&tonLite!=""){
        document.getElementById('draft-hvy-ft').classList.remove("improper");
        document.getElementById('draft-hvy-in').classList.remove("improper");    
        document.getElementById('draft-lite-ft').classList.remove("improper");
        document.getElementById('draft-lite-in').classList.remove("improper");
        document.getElementById('heavy-tons').classList.remove("improper");
        document.getElementById('light-tons').classList.remove("improper");
        }
}
function tonsToGo(){
    var maxTonnage = parseInt(document.getElementById('max-tons').value) ||0;
    var tonsToGo=maxTonnage-tonnageCurrent;
    if(maxTonnage!=0){
    document.getElementById('tons-to-max').textContent = tonsToGo.toFixed(2);
    } else{
    document.getElementById('tons-to-max').textContent="";
    }
}

