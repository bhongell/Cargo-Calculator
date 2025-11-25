var DWA = 0;
var salinity=0;
function handleCalculateDWA(){
    if ($("#units").is(":checked")){
        calculateDWAMetric();
    } else {
        calculateDWAImperial();
    }
}
// check salinity between 1.00-1.025
function salinityCheck(){
    let min=1.000;
    let max=1.025;
    salinity=parseFloat(document.getElementById('salinity').value) || "";
    if (salinity >=min && salinity <=max){
        salinity=salinity;
    } else {
        document.getElementById('salinity').value="";
        document.getElementById('salinity').classList.add("invalid");
        console.log("Salinity Not Valid");
    }
}
// Metric
function calculateDWAMetric(){
    // Declare variables
    var fwa=parseFloat(document.getElementById('fwa-ft').value) || "";
    salinityCheck();
    // Calculate 
    DWA=(((1.025 - salinity) / 0.025) * fwa) || 0;
    // Print to display and log
    document.getElementById('dwa').textContent=DWA.toFixed(1) + " Cm";
    console.log("DWA",DWA);
// Logic Checks
    if ((salinity!=""||fwa!="")&&(salinity==""||fwa=="")){
    document.getElementById('salinity').classList.add("improper");
    document.getElementById('fwa-ft').classList.add("improper");
    document.getElementById('dwa').classList.add("improper");    
    document.getElementById('dwa').textContent="Check";
    }
    if(salinity==""&&fwa==""){
    document.getElementById('salinity').classList.remove("invalid");
    document.getElementById('fwa-ft').classList.remove("invalid");
    document.getElementById('dwa').classList.remove("invalid");
    document.getElementById('dwa').textContent="";    
    }
}     
// Imperial
function calculateDWAImperial(){
    // Declare variables
    var fwaFt = parseInt(document.getElementById('fwa-ft').value) || 0;
    var fwaIn = parseFloat(document.getElementById('fwa-in').value) || "";
    var fwaInches= (fwaFt*12)+fwaIn || "";
    salinityCheck();
    // Calculate 
    DWA = (((1.025 - salinity) / 0.025) * fwaInches) || 0;
    // Formatting/printing to display
    var feet = 0, inches = 0;
        if (DWA >= 12) {
            feet = Math.floor(DWA / 12);
            inches = Math.round(DWA % 12);
            document.getElementById('dwa').textContent = feet + " Ft " + inches + " In";
        } else {
            document.getElementById('dwa').textContent = DWA.toFixed(2) + ' In';
        }
        // Print to log
    console.log("DWA",DWA);
    console.log("fwaInches",fwaInches);
// Logic Checks
    if ((salinity!=""||fwaInches!=0)&&(salinity==""||fwaFt==""||fwaIn=="")){
    document.getElementById('salinity').classList.add("improper");
    document.getElementById('fwa-ft').classList.add("improper");
    document.getElementById('fwa-in').classList.add("improper");
    document.getElementById('dwa').classList.add("improper");    
    }
    if(salinity==0&&fwaFt==0&&fwaIn==0){
    document.getElementById('salinity').classList.remove("invalid");
    document.getElementById('fwa-ft').classList.remove("invalid");
    document.getElementById('fwa-in').classList.remove("invalid");
    document.getElementById('dwa').classList.remove("invalid");
    }
}

