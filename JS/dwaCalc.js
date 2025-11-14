var DWA = 0
            function calculateFwaInches(fwaFt, fwaIn, fwaDec) {
                return (fwaFt * 12) + fwaIn + fwaDec;
            }

            function handleCalculateFwaIn() {
                var fwaFt = parseInt(document.getElementById('fwa-ft').value) || 0;
                var fwaIn = parseInt(document.getElementById('fwa-in').value) || 0;
                var fwaInNum = parseInt(document.getElementById('fwa-in-num').value) || 0;
                var fwaInDen = parseInt(document.getElementById('fwa-in-den').value) || 0;
                var fwaDec = fwaInNum/fwaInDen
                    if (isFinite(fwaDec)) {
                        console.log("Valid FWA decimal:", fwaDec);
                        } else {
                        console.log("Ignoring NaN or Infinity");
                        fwaDec = 0; // or just skip it
                    }
                var fwaInches = calculateFwaInches(fwaFt, fwaIn, fwaDec);
                return fwaInches;
            }

            function calculateDwa(salinity, fwaInches) {
                return (((1.025 - salinity) / 0.025) * fwaInches) || 0;
            }

            function handleCalculateDWA() {
                var fwaInches = handleCalculateFwaIn();
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

            }

