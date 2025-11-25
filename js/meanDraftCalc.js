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
    var portFwdFt = parseFloat(document.getElementById('port-fwd-ft').value) ||""; 
    var portFwdIn = parseFloat(document.getElementById('port-fwd-in').value) ||"";
    var portAftFt = parseFloat(document.getElementById('port-aft-ft').value) ||"";
    var portAftIn = parseFloat(document.getElementById('port-aft-in').value) ||"";
    var stbdFwdFt = parseFloat(document.getElementById('stbd-fwd-ft').value) ||"";
    var stbdFwdIn = parseFloat(document.getElementById('stbd-fwd-in').value) ||"";
    var stbdAftFt = parseFloat(document.getElementById('stbd-aft-ft').value) ||"";
    var stbdAftIn = parseFloat(document.getElementById('stbd-aft-in').value) ||"";
    // make p/s/f/a one inches
    var portFwd = (portFwdFt*12)+portFwdIn;
    var portAft = (portAftFt*12)+portAftIn;
    var stbdFwd = (stbdFwdFt*12)+stbdFwdIn;
    var stbdAft = (stbdAftFt*12)+stbdAftIn;
    console.log('drafts', portFwd,stbdFwd,portAft,stbdAft)
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
    // Logic Checks
    if(portFwdFt==""||portFwdIn==""||stbdFwdFt==""||stbdFwdIn==""||portAftFt==""||portAftIn==""||stbdAftFt==""||stbdAftIn==""){
       document.querySelectorAll("input").forEach(input=>{
        if (input.value.trim()===""){
            input.classList.add("improper")
        }
       }); 
        }
    if(portFwdFt!=""&&portFwdIn!=""&&stbdFwdFt!=""&&stbdFwdIn!=""&&portAftFt!=""&&portAftIn!=""&&stbdAftFt!=""&&stbdAftIn!=""){
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
    var portFwdFt = parseFloat(document.getElementById('port-fwd-ft').value) ||""; 
    var portFwdIn = parseFloat(document.getElementById('port-fwd-in').value) ||"";
    var portAftFt = parseFloat(document.getElementById('port-aft-ft').value) ||"";
    var portAftIn = parseFloat(document.getElementById('port-aft-in').value) ||"";
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
// Logic Checks
    if(portFwdFt==""||portFwdIn==""||portAftFt==""||portAftIn==""){
        document.getElementById('mean-draft').textContent="Check";
        document.getElementById('mean-draft').classList.add("improper");
        document.getElementById('trim').textContent="Check";
        document.getElementById('trim').classList.add("improper");
        document.getElementById('swd').textContent="Check";
        document.getElementById('swd').classList.add("improper");
       document.querySelectorAll("input").forEach(input=>{
        if (input.value.trim()===""){
            input.classList.add("improper");
        }
       }); 
        }
    if(portFwdFt!=""&&portFwdIn!=""&&portAftFt!=""&&portAftIn!=""){
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
function metricFourDrafts(){
    // Variables
    var portFwdMeter = parseFloat(document.getElementById('port-fwd-ft').value) || 0; 
    var portAftMeter = parseFloat(document.getElementById('port-aft-ft').value) || 0;
    var stbdFwdMeter = parseFloat(document.getElementById('stbd-fwd-ft').value) || 0;
    var stbdAftMeter = parseFloat(document.getElementById('stbd-aft-ft').value) || 0;
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
    // Logic Checks
        if(portFwdMeter==""||portFwdMeter==""||portAftMeter==""||portAftMeter==""){
        document.getElementById('mean-draft').textContent="Check";
        document.getElementById('mean-draft').classList.add("improper");
        document.getElementById('trim').textContent="Check";
        document.getElementById('trim').classList.add("improper");
        document.getElementById('swd').textContent="Check";
        document.getElementById('swd').classList.add("improper");
       document.querySelectorAll("input").forEach(input=>{
        if (input.value.trim()===""){
            input.classList.add("improper");
        }
       }); 
        }
    if(portFwdMeter!=""&&portFwdMeter!=""&&portAftMeter!=""&&portAftMeter!=""){
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
function metricTwoDrafts(){
// Variables
    var fwdMeter = parseFloat(document.getElementById('port-fwd-ft').value) || 0; 
    var aftMeter = parseFloat(document.getElementById('port-aft-ft').value) || 0;
    // Calculate Mean Draft
    meanDraft=(fwdMeter+aftMeter)/2;
    // Calculate Trim
    var trimMeter=aftMeter-fwdMeter;
    trimMeter=Number(trimMeter);
    var trimMeterAbs=Math.abs(trimMeter);
    console.log('trim-meters', trimMeter, trimMeterAbs);
    // Print Mean Draft
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
    // Logic Checks
        if(fwdMeter==""||aftMeter==""){
        document.getElementById('mean-draft').textContent="Check";
        document.getElementById('mean-draft').classList.add("improper");
        document.getElementById('trim').textContent="Check";
        document.getElementById('trim').classList.add("improper");
        document.getElementById('swd').textContent="Check";
        document.getElementById('swd').classList.add("improper");
       document.querySelectorAll("input").forEach(input=>{
        if (input.value.trim()===""){
            input.classList.add("improper");
        }
       }); 
        }
    if(fwdMeter!=""&&aftMeter!=""){
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






