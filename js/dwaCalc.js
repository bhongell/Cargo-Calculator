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
                function parseFraction(input) {
                input = input.trim();

                // Check for mixed number: "1 11/16"
                if (input.includes(" ")) {
                    const [whole, fraction] = input.split(" ");
                    const [num, den] = fraction.split("/").map(Number);
                    const fwaDec = num/den;
                        if (isFinite(fwaDec)) {
                        console.log("Valid FWA decimal:", fwaDec);
                        } else {
                        console.log("Ignoring NaN or Infinity");
                        fwaDec = 0; // or just skip it
                    }
                    return Number(whole) + (fwaDec);
                }

                // Simple fraction: "13/64"
                if (input.includes("/")) {
                    const [num, den] = input.split("/").map(Number);
                    const fwaDec =num/den;
                        if (isFinite(fwaDec)) {
                        console.log("Valid FWA decimal:", fwaDec);
                        } else {
                        console.log("Ignoring NaN or Infinity");
                        fwaDec = 0; // or just skip it  
                        }                  
                    return fwaDec;
                }

                // Just a whole number: "5"
                return Number(input);
            }

            function handleCalculateFwaIn() {
                var fwaFt = parseInt(document.getElementById('fwa-ft').value) || 0;
                var fwaInString = (document.getElementById('fwa-in').value || "").trim();
                fwaInString=fwaInString.replace("-"," ");
                var fwaIn= parseFraction(fwaInString);
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

