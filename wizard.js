// Salinity
var displayWizardSalinity = document.getElementById("wizard-salinity");

function appendToWizardSalinity(input){
    displayWizardSalinity.value += input;
}

function deleteSalinityDisplay(){
    displayWizardSalinity.value = "";
}
// FWA Ft
var displayWizardFWAFt = document.getElementById("wizard-fwa-ft");

function appendToWizardFWAFt(input){
    displayWizardFWAFt.value += input;
}

function deleteWizardFWAFt(){
    displayWizardFWAFt.value = "";
}
//FWA In
var displayWizardFWAIn = document.getElementById("wizard-fwa-in");

function appendToWizardFWAIn(input){
    displayWizardFWAIn.value += input;
}

function deleteWizardFWAIn(){
    displayWizardFWAIn.value = "";
}

        $(function(){
    let currentStep=1;
    const totalSteps=$(".wizard-step").length;

    function showStep(step){
    $(".wizard-step").removeClass("active");
    $(`.wizard-step[data-step="${step}"]`).addClass("active");
    }
// Trigger on button
    $('#popup-trigger').on("focus click",function(){
        $(".wizard-container").fadeIn();
        currentStep=1;
        showStep(currentStep);
        $(this).blur();
    });
// Navigation
    $(document).on("click", ".next-button", function(){
        if(currentStep<totalSteps){
            currentStep++;
            showStep(currentStep);
        }
    });
    $(document).on("click",".back-button", function(){
        if (currentStep>1){
            currentStep--;
            showStep(currentStep);
        }
    });
});