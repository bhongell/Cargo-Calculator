var meanDraft = 0;
function calculateMeanDraft(){
    if ($("#units").is(":checked")){
        calculateMeanDraftMetric();
    } else {
        calculateMeanDraftImperial();
    }
}
function calculateMeanDraftImperial() {
    var portFwdFt = parseFloat(document.getElementById('port-fwd-ft').value) || 0; 
    var portFwdIn = parseFloat(document.getElementById('port-fwd-in').value) || 0;
    var portAftFt = parseFloat(document.getElementById('port-aft-ft').value) || 0;
    var portAftIn = parseFloat(document.getElementById('port-aft-in').value) || 0;
    var stbdFwdFt = parseFloat(document.getElementById('stbd-fwd-ft').value) || 0;
    var stbdFwdIn = parseFloat(document.getElementById('stbd-fwd-in').value) || 0;
    var stbdAftFt = parseFloat(document.getElementById('stbd-aft-ft').value) || 0;
    var stbdAftIn = parseFloat(document.getElementById('stbd-aft-in').value) || 0;
    // make p/s/f/a one inches
    portFwd = (portFwdFt*12)+portFwdIn;
    portFwd = (portFwd ===0) ? stbdFwd : portFwd;
    portAft = (portAftFt*12)+portAftIn;
    portAft = (portAft ===0) ? stbdAft : portAft;
    stbdFwd = (stbdFwdFt*12)+stbdFwdIn;
    stbdFwd = (stbdFwd ===0) ? portFwd : stbdFwd;
    stbdAft = (stbdAftFt*12)+stbdAftIn;
    stbdAft = (stbdAft ===0) ? portAft : stbdAft;
    // average f/a inches
    var Fwd = (portFwd+stbdFwd)/2
    var Aft = (portAft+stbdAft)/2
    // calculate mean draft in inches
    meanDraft = (Fwd+Aft)/2;
    // calculate trim f- / a+
    trim = Aft-Fwd
    trim=Number(trim);
    var trimAbs = Math.abs(trim)
    var trimFeet = Math.floor(trimAbs/12);
    var trimInches = Math.round(trimAbs % 12);
    // convert decimal feet to feet and inches
    var feet = Math.floor(meanDraft/12);     // integer feet
    var inches = Math.round(meanDraft % 12); // remaining inches

    // handle case where inches rounds to 12
    if (inches === 12) {
        feet += 1;
        inches = 0;
    }

    // display as "X ft Y in"
    document.getElementById('mean-draft').textContent = feet + " Ft " + inches + " In";
    document.getElementById('draft-current-ft').textContent = feet;
    document.getElementById('draft-current-in').textContent =  inches;
        if (trim>0){
    document.getElementById('trim').textContent = trimFeet + " Ft " + trimInches + " In" + " A";
    } else {
    document.getElementById('trim').textContent = trimFeet + " Ft " + trimInches + " In" + " F";
    }
        if(trim===0){
            document.getElementById('trim').textContent=0;
        }
}
function calculateMeanDraftMetric(){
    var portFwdMeter = parseFloat(document.getElementById('port-fwd-ft').value) || 0; 
    var portAftMeter = parseFloat(document.getElementById('port-aft-ft').value) || 0;
    var stbdFwdMeter = parseFloat(document.getElementById('stbd-fwd-ft').value) || 0;
    var stbdAftMeter = parseFloat(document.getElementById('stbd-aft-ft').value) || 0;

    portFwdMeter = (portFwdMeter ===0) ? stbdFwdMeter : portFwdMeter;
    portAftMeter = (portAftMeter ===0) ? stbdAftMeter : portAftMeter;
    stbdFwdMeter = (stbdFwdMeter ===0) ? portFwdMeter : stbdFwdMeter;
    stbdAftMeter = (stbdAftMeter ===0) ? portAftMeter : stbdAftMeter;

    var fwdMeter=(portFwdMeter+stbdFwdMeter)/2;
    var aftMeter=(portAftMeter+stbdAftMeter)/2;
    meanDraft=(fwdMeter+aftMeter)/2;

    var trimMeter=aftMeter-fwdMeter;
    trimMeter=Number(trimMeter);
    var trimMeterAbs=Math.abs(trimMeter);
    console.log('trim-meters', trimMeter, trimMeterAbs);

    document.getElementById('mean-draft').textContent=meanDraft.toFixed(2)+" M";
    document.getElementById('draft-current-ft').textContent=meanDraft.toFixed(2);
            if (trimMeter>0){
    document.getElementById('trim').textContent = trimMeterAbs.toFixed(2) + " M A";
    } 
           else if (trimMeter<0) {
    document.getElementById('trim').textContent = trimMeterAbs.toFixed(2) + " M F";
    }
            else{
                document.getElementById('trim').textContent=0;
            }
}
