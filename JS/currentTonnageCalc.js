var tonnageCurrent=0;
function currentTonnage(){
//variables
    var draftHvyFt = parseInt(document.getElementById('draft-hvy-ft').value) ||0;
    var draftHvyIn = parseInt(document.getElementById('draft-hvy-in').value) ||0;
    var draftLiteFt = parseInt(document.getElementById('draft-lite-ft').value) ||0;
    var draftLiteIn = parseInt(document.getElementById('draft-lite-in').value) ||0;
    var tonnageHvy = parseInt(document.getElementById('heavy-tons').value) ||0;
    var tonnageLite = parseInt(document.getElementById('light-tons').value) ||0;
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
}
function tonsToGo(){
    var maxTonnage = parseInt(document.getElementById('max-tons').value) ||0;
    var tonsToGo=maxTonnage-tonnageCurrent;
    document.getElementById('tons-to-max').textContent = tonsToGo.toFixed(2);
}
function TPI(){
//variables
    var draftHvyFt = parseInt(document.getElementById('draft-hvy-ft').value) ||0;
    var draftHvyIn = parseInt(document.getElementById('draft-hvy-in').value) ||0;
    var draftLiteFt = parseInt(document.getElementById('draft-lite-ft').value) ||0;
    var draftLiteIn = parseInt(document.getElementById('draft-lite-in').value) ||0;
    var tonnageHvy = parseInt(document.getElementById('heavy-tons').value) ||0;
    var tonnageLite = parseInt(document.getElementById('light-tons').value) ||0;
//calculations
    //drafts to inches
    var draftHvyFtIn = (draftHvyFt*12)+draftHvyIn;
    var draftLiteFtIn = (draftLiteFt*12)+draftLiteIn;
    //differences
    var differenceDraft=draftHvyFtIn-draftLiteFtIn;
    var differenceTonnage=tonnageHvy-tonnageLite;
    //quotient
    var tpi=differenceTonnage/differenceDraft;

    document.getElementById('tpi').textContent = tpi.toFixed(2);
}