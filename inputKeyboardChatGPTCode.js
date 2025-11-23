let activeInput = null;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".custom-input").forEach(input => {
        input.setAttribute("readonly", "readonly");
        input.setAttribute("inputmode", "none");
    });
});

// Block native keyboard on touch
document.addEventListener("touchstart", function (e) {
    if (e.target.classList.contains("custom-input")) {
        e.preventDefault();  // iOS keyboard killer
        e.target.focus({ preventScroll: true });  // Still activates your custom keyboard
    }
}, { passive: false });
    // Focus detection for dynamically loaded inputs
    document.addEventListener("focusin", (e) => {
        if (e.target.classList.contains("custom-input")) {
            activeInput = e.target;
            activeInput.scrollIntoView({behavior:"smooth", block:"start"});

            // Show the custom keyboard
            document.getElementById("customKeyboard").classList.remove("hidden");
            document.getElementById("page-container").classList.add("active-input");
        }
    });
    // Key press logic using delegation
    document.addEventListener("click", e => {
        if (e.target.classList.contains("key")) {
            if (!activeInput) return;
            const key = e.target.textContent.trim();

            if (key === "Next >") {
                focusNextInput();
                return;
            }
            if (key === "< Back") {
                focusLastInput();
                return;
            }
            if (key === "C") {
                activeInput.value = "";
                document.getElementById("keyboard-display").textContent = "";
                return;
            }

            activeInput.value += key;
            document.getElementById("keyboard-display").textContent += key;
        }
    });

    // Next input movement
    function focusNextInput() {
        const inputs = [...document.querySelectorAll(".custom-input")]
            .filter(el => el.offsetParent !== null);
        const idx = inputs.indexOf(activeInput);

        if (idx >= 0 && idx < inputs.length - 1) {
            const next = inputs[idx + 1];
            next.focus();
            activeInput = next;
            // next.scrollTo({top: 0, left: 0, behavior:"smooth"});
            document.getElementById("keyboard-display").textContent = "";
        }
    }
    // Last input movement
    function focusLastInput() {
        const inputs = [...document.querySelectorAll(".custom-input")]
            .filter(el => el.offsetParent !== null);
        const idx = inputs.indexOf(activeInput);

        if (idx > 0) {  // Changed condition to allow last input
            const last = inputs[idx - 1];
            last.focus();
            activeInput = last;
            // last.scrollIntoView({ behavior: "smooth", block: "center" });
            document.getElementById("keyboard-display").textContent = "";
            activeInput.value = "";
        }
    }
    // Keyboard calculate button
    $(document).on('click', '#keyboard-calculate', function() {
        if (typeof handleCalculateDWA === "function") handleCalculateDWA();
        if (typeof calculateMeanDraft === "function") calculateMeanDraft();
        if (typeof calculateSWD === "function") calculateSWD();
        if (typeof currentTonnage === "function") currentTonnage();
        if (typeof tonsToGo === "function") tonsToGo();
    });
    // Hide keyboard when clicking outside
    document.addEventListener("click", e => {
        const keyboard = document.getElementById("customKeyboard");
        const clickedInsideKeyboard = keyboard.contains(e.target);
        const clickedInput = e.target.classList.contains("custom-input");
        const calculate = document.getElementById("keyboard-calculate");

        if ((!clickedInsideKeyboard && !clickedInput) || calculate.contains(e.target)) {
            keyboard.classList.add("hidden");
        }
    });

