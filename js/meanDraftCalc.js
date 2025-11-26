var meanDraft = 0;
function calculateMeanDraft(){
    if ($("#units").is(":checked")){
        calculateMeanDraftMetric();
    } else {
        calculateMeanDraftImperial();
    }
}
function calculateMeanDraftImperial() {
    if ($("#draft-count").is(":checked")){
        imperialFourDrafts();
    } else {
        imperialTwoDrafts();
    }
}
function calculateMeanDraftMetric(){
    if ($("#draft-count").is(":checked")){
        metricFourDrafts();
    } else {
        metricTwoDrafts();
    }
}
function imperialFourDrafts(){
    var pFwdFt = parseFloat(document.getElementById('port-fwd-ft').value) ||"";
    var portFwdFt=Number(pFwdFt)||0; 
    var pFwdIn = parseFloat(document.getElementById('port-fwd-in').value) ||"";
    var portFwdIn=Number(pFwdIn)||0; 
    var pAftFt = parseFloat(document.getElementById('port-aft-ft').value) ||"";
    var portAftFt=Number(pAftFt)||0; 
    var pAftIn = parseFloat(document.getElementById('port-aft-in').value) ||"";
    var portAftIn=Number(pAftIn)||0; 
    var sFwdFt = parseFloat(document.getElementById('stbd-fwd-ft').value) ||"";
    var stbdFwdFt=Number(sFwdFt)||0; 
    var sFwdIn = parseFloat(document.getElementById('stbd-fwd-in').value) ||"";
    var stbdFwdIn=Number(sFwdIn)||0; 
    var sAftFt = parseFloat(document.getElementById('stbd-aft-ft').value) ||"";
    var stbdAftFt=Number(sAftFt)||0; 
    var sAftIn = parseFloat(document.getElementById('stbd-aft-in').value) ||"";
    var stbdAftIn=Number(sAftIn)||0; 
    console.log("Drafts-FtIn",portFwdFt,portFwdIn,stbdFwdFt,stbdFwdIn,portAftFt,portAftIn,stbdAftFt,stbdAftIn);
    // make p/s/f/a one inches
    var portFwd = (portFwdFt*12)+portFwdIn;
    var portAft = (portAftFt*12)+portAftIn;
    var stbdFwd = (stbdFwdFt*12)+stbdFwdIn;
    var stbdAft = (stbdAftFt*12)+stbdAftIn;
    console.log('Drafts-In', portFwd,stbdFwd,portAft,stbdAft);
    // average f/a inches
    var Fwd = (portFwd+stbdFwd)/2
    var Aft = (portAft+stbdAft)/2
    console.log('Drafts-F/A', Fwd,Aft);

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
    document.getElementById('mean-draft').textContent = feet + " Ft " + inches.toFixed(1) + " In";
        if (trim>0){
    document.getElementById('trim').textContent = trimFeet + " Ft " + trimInches + " In" + " A";
    } else {
    document.getElementById('trim').textContent = trimFeet + " Ft " + trimInches + " In" + " F";
    }
        if(trim===0){
            document.getElementById('trim').textContent=0;
        }
    // Logic Checks
    if(pFwdFt==""||pFwdIn==""||sFwdFt==""||sFwdIn==""||pAftFt==""||pAftIn==""||sAftFt==""||sAftIn==""){
        // label the "div id" as id to check and label based on above.
        const ids = ["port-fwd-ft", "port-fwd-in", "stbd-fwd-ft", "stbd-fwd-in", "port-aft-ft", "port-aft-in", "stbd-aft-ft", "stbd-aft-ft"];

        ids.forEach(id => {
            const input = document.getElementById(id);

            if (input.value.trim() === "") {
                input.classList.add("improper");
                document.getElementById('mean-draft').classList.add("improper");
                document.getElementById('trim').classList.add("improper");
                document.getElementById('swd').classList.add("improper");
            }
        });
    }
    if(pFwdFt!=""&&pFwdIn!=""&&sFwdFt!=""&&sFwdIn!=""&&pAftFt!=""&&pAftIn!=""&&sAftFt!=""&&sAftIn!=""){
        document.getElementById('port-fwd-ft').classList.remove("improper");
        document.getElementById('port-fwd-in').classList.remove("improper");    
        document.getElementById('stbd-fwd-ft').classList.remove("improper");
        document.getElementById('stbd-fwd-in').classList.remove("improper");
        document.getElementById('port-aft-ft').classList.remove("improper");
        document.getElementById('port-aft-in').classList.remove("improper");
        document.getElementById('stbd-aft-ft').classList.remove("improper");
        document.getElementById('stbd-aft-in').classList.remove("improper");
        document.getElementById('mean-draft').classList.remove("improper");
        document.getElementById('trim').classList.remove("improper");
        document.getElementById('swd').classList.remove("improper");
        }
}
function imperialTwoDrafts(){
    // Variables
    var pFwdFt = parseFloat(document.getElementById('port-fwd-ft').value) ||"";
    var portFwdFt=Number(pFwdFt)||0; 
    var pFwdIn = parseFloat(document.getElementById('port-fwd-in').value) ||"";
    var portFwdIn=Number(pFwdIn)||0; 
    var pAftFt = parseFloat(document.getElementById('port-aft-ft').value) ||"";
    var portAftFt=Number(pAftFt)||0; 
    var pAftIn = parseFloat(document.getElementById('port-aft-in').value) ||"";
    var portAftIn=Number(pAftIn)||0;
    // FTIN to IN
    var Fwd = (portFwdFt*12)+portFwdIn;
    var Aft = (portAftFt*12)+portAftIn;
    // Calculate Mean Draft
    meanDraft = (Fwd+Aft)/2;
    // calculate trim f- / a+
    trim = Aft-Fwd
    trim=Number(trim);
    var trimAbs = Math.abs(trim)
    var trimFeet = Math.floor(trimAbs/12);
    var trimInches = Math.round(trimAbs % 12);
    // convert decimal feet to feet and inches
    var feet = Math.floor(meanDraft/12);     // integer feet
    var inches = meanDraft-(feet*12); // remaining inches
    // handle case where inches rounds to 12
    if (inches === 12) {
        feet += 1;
        inches = 0;
    }
    // display as "X ft Y in"
    document.getElementById('mean-draft').textContent = feet + " Ft " + inches.toFixed(1) + " In";
        if (trim>0){
    document.getElementById('trim').textContent = trimFeet + " Ft " + trimInches + " In" + " A";
    } else {
    document.getElementById('trim').textContent = trimFeet + " Ft " + trimInches + " In" + " F";
    }
        if(trim===0){
            document.getElementById('trim').textContent=0;
        }
    // Logic Checks
    if(pFwdFt==""||pFwdIn==""||pAftFt==""||pAftIn==""){
        // label the "div id" as id to check and label based on above.
        const ids = ["port-fwd-ft", "port-fwd-in", "port-aft-ft", "port-aft-in"];

        ids.forEach(id => {
            const input = document.getElementById(id);

            if (input.value.trim() === "") {
                input.classList.add("improper");
                document.getElementById('mean-draft').classList.add("improper");
                document.getElementById('trim').classList.add("improper");
                document.getElementById('swd').classList.add("improper");
            }
        });
    }
    if(pFwdFt!=""&&pFwdIn!=""&&pAftFt!=""&&pAftIn!=""){
        document.getElementById('port-fwd-ft').classList.remove("improper");
        document.getElementById('port-fwd-in').classList.remove("improper");    
        document.getElementById('port-aft-ft').classList.remove("improper");
        document.getElementById('port-aft-in').classList.remove("improper");
        document.getElementById('mean-draft').classList.remove("improper");
        document.getElementById('trim').classList.remove("improper");
        document.getElementById('swd').classList.remove("improper");
        }      
}
function metricFourDrafts(){
    // Variables
    var pFwdMeter = parseFloat(document.getElementById('port-fwd-ft').value) || "";
    var portFwdMeter=Number(pFwdMeter)||0; 
    var pAftMeter = parseFloat(document.getElementById('port-aft-ft').value) || "";
    var portAftMeter=Number(pAftMeter)||0; 
    var sFwdMeter = parseFloat(document.getElementById('stbd-fwd-ft').value) || "";
    var stbdFwdMeter=Number(sFwdMeter)||0; 
    var sAftMeter = parseFloat(document.getElementById('stbd-aft-ft').value) || "";
    var stbdAftMeter=Number(sAftMeter)||0; 
    // Calculate f/a
    var fwdMeter=(portFwdMeter+stbdFwdMeter)/2;
    var aftMeter=(portAftMeter+stbdAftMeter)/2;
    // Calculate mean draft
    meanDraft=(fwdMeter+aftMeter)/2;
    // Calculate trim
    var trimMeter=aftMeter-fwdMeter;
    trimMeter=Number(trimMeter);
    var trimMeterAbs=Math.abs(trimMeter);
    console.log('trim-meters', trimMeter, trimMeterAbs);
    // Print Values
    document.getElementById('mean-draft').textContent=meanDraft.toFixed(2)+" M";
            if (trimMeter>0){
    document.getElementById('trim').textContent = trimMeterAbs.toFixed(2) + " M A";
    } 
           else if (trimMeter<0) {
    document.getElementById('trim').textContent = trimMeterAbs.toFixed(2) + " M F";
    }
            else{
                document.getElementById('trim').textContent=0;
            }
// Logic Check
if(pFwdMeter==""||sFwdMeter==""||pAftMeter==""||sAftMeter==""){
        // label the "div id" as id to check and label based on above.
        const ids = ["port-fwd-ft", "stbd-fwd-ft", "port-aft-ft", "stbd-aft-ft"];

        ids.forEach(id => {
            const input = document.getElementById(id);

            if (input.value.trim() === "") {
                input.classList.add("improper");
                document.getElementById('mean-draft').classList.add("improper");
                document.getElementById('trim').classList.add("improper");
                document.getElementById('swd').classList.add("improper");
            }
        });
    }
    if(pFwdMeter!=""&&sFwdMeter!=""&&pAftMeter!=""&&sAftMeter!=""){
        document.getElementById('port-fwd-ft').classList.remove("improper");
        document.getElementById('stbd-fwd-ft').classList.remove("improper");    
        document.getElementById('port-aft-ft').classList.remove("improper");
        document.getElementById('stbd-aft-ft').classList.remove("improper");
        document.getElementById('mean-draft').classList.remove("improper");
        document.getElementById('trim').classList.remove("improper");
        document.getElementById('swd').classList.remove("improper");
        }
}
function metricTwoDrafts(){
// Variables
    var fMeter = parseFloat(document.getElementById('port-fwd-ft').value) || "";
    var fwdMeter=Number(fMeter)||0; 
    var aMeter = parseFloat(document.getElementById('port-aft-ft').value) || "";
    var aftMeter=Number(aMeter)||0; 
    // Calculate Mean Draft
    meanDraft=(fwdMeter+aftMeter)/2;
    // Calculate Trim
    var trimMeter=aftMeter-fwdMeter;
    trimMeter=Number(trimMeter);
    var trimMeterAbs=Math.abs(trimMeter);
    console.log('trim-meters', trimMeter, trimMeterAbs);
    // Print Mean Draft
    document.getElementById('mean-draft').textContent=meanDraft.toFixed(2)+" M";
            if (trimMeter>0){
    document.getElementById('trim').textContent = trimMeterAbs.toFixed(2) + " M A";
    } 
           else if (trimMeter<0) {
    document.getElementById('trim').textContent = trimMeterAbs.toFixed(2) + " M F";
    }
            else{
                document.getElementById('trim').textContent=0;
            }
    // Logic Checks
    if(fMeter==""||aMeter==""){
        // label the "div id" as id to check and label based on above.
        const ids = ["port-fwd-ft", "port-aft-ft"];

        ids.forEach(id => {
            const input = document.getElementById(id);

            if (input.value.trim() === "") {
                input.classList.add("improper");
                document.getElementById('mean-draft').classList.add("improper");
                document.getElementById('trim').classList.add("improper");
                document.getElementById('swd').classList.add("improper");
            }
        });
    }
    if(fMeter!=""&&aMeter!=""){
        document.getElementById('port-fwd-ft').classList.remove("improper");
        document.getElementById('port-aft-ft').classList.remove("improper");
        document.getElementById('mean-draft').classList.remove("improper");
        document.getElementById('trim').classList.remove("improper");
        document.getElementById('swd').classList.remove("improper");
        } 
}






