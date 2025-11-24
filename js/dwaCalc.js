var DWA = 0
function handleCalculateDWA(){
    if ($("#units").is(":checked")){
        calculateDWAMetric();
    } else {
        calculateDWAImperial();
    }
}
function calculateDWAMetric(){
    var fwa=parseFloat(document.getElementById('fwa-ft').value) || 0;
    var salinity=parseFloat(document.getElementById('salinity').value) || 0;
    
                
    DWA=(((1.025 - salinity) / 0.025) * fwa) || 0;
    document.getElementById('dwa').textContent=DWA.toFixed(1) + " Cm";
    console.log("DWA",DWA);

}     
function calculateDWAImperial(){
            function handleCalculateFwaIn() {
                var fwaFt = parseInt(document.getElementById('fwa-ft').value) || 0;
                var fwaIn = parseFloat(document.getElementById('fwa-in').value) || 0;
                fwaInches= (fwaFt*12)+fwaIn;
                return fwaInches;
                
            }
            function calculateDwa(salinity, fwaInches) {
                return (((1.025 - salinity) / 0.025) * fwaInches) || 0;
            }
            
                fwaInches = handleCalculateFwaIn();
                var salinity = parseFloat(document.getElementById('salinity').value) || 1.025;  
                DWA = calculateDwa(salinity, fwaInches);
                            var feet = 0, inches = 0;
                                if (DWA >= 12) {
                                    feet = Math.floor(DWA / 12);
                                    inches = Math.round(DWA % 12);
                                    document.getElementById('dwa').textContent = feet + " Ft " + inches + " In";
                                } else {
                                    document.getElementById('dwa').textContent = DWA.toFixed(2) + ' In';
                                }
            console.log("DWA",DWA);
            console.log("fwaInches",fwaInches);
            
        }

