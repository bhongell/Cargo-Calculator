var meanDraft = 0;
function calculateMeanDraft() {
    var portFwdFt = parseFloat(document.getElementById('port-fwd-ft').value) || 0; 
    var portFwdIn = parseFloat(document.getElementById('port-fwd-in').value) || 0;
    var portAftFt = parseFloat(document.getElementById('port-aft-ft').value) || 0;
    var portAftIn = parseFloat(document.getElementById('port-aft-in').value) || 0;
    var stbdFwdFt = parseFloat(document.getElementById('stbd-fwd-ft').value) || 0;
    var stbdFwdIn = parseFloat(document.getElementById('stbd-fwd-in').value) || 0;
    var stbdAftFt = parseFloat(document.getElementById('stbd-aft-ft').value) || 0;
    var stbdAftIn = parseFloat(document.getElementById('stbd-aft-in').value) || 0;
    // make p/s/f/a one
    var portFwd = (portFwdFt*12)+portFwdIn;
        portFwd = (portFwd ===0) ? stbdFwd : portFwd;
    var portAft = (portAftFt*12)+portAftIn;
        portAft = (portAft ===0) ? stbdAft : portAft;
    var stbdFwd = (stbdFwdFt*12)+stbdFwdIn;
        stbdFwd = (stbdFwd ===0) ? portFwd : stbdFwd;
    var stbdAft = (stbdAftFt*12)+stbdAftIn;
        stbdAft = (stbdAft ===0) ? portAft : stbdAft;
    // average f/a
    var Fwd = (portFwd+stbdFwd)/2
    var Aft = (portAft+stbdAft)/2
    // calculate mean draft in inches
    meanDraft = (Fwd+Aft)/2;
    // calculate trim f- / a+
    trim = Aft-Fwd
    trimAbs = Math.abs(trim)
    var trimFeet = Math.floor(trimAbs/12);
    var trimInches = Math.round(trimAbs % 12);
    // convert decimal feet to feet and inches
    var feet = Math.floor(meanDraft/12);                  // integer feet
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
    document.getElementById('trim').textContent = trimFeet + " Ft " + trimInches + " In" + " Aft";
    } else {
    document.getElementById('trim').textContent = trimFeet + " Ft " + trimInches + " In" + " Fwd";
    }
        if(trim===0){
            document.getElementById('trim').textContent=0
        }


}
