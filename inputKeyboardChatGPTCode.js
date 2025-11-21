// let activeInput = null;

// // Mobile detection
// const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

// if (isMobile) {
//     // Focus detection for dynamically loaded inputs
//     document.addEventListener("focusin", (e) => {
//         if (e.target.classList.contains("custom-input")) {
//             activeInput = e.target;

//             // Show the custom keyboard
//             document.getElementById("customKeyboard").classList.remove("hidden");

//             // Scroll so activeInput is 10px from top
//             scrollWithOffset(activeInput, 10);
//         }
//     });

//     // Scroll helper
//     function scrollWithOffset(element, offset) {
//         const elementTop = element.getBoundingClientRect().top;
//         const scrollTop = window.scrollY || window.pageYOffset;
//         const targetY = elementTop + scrollTop - offset;

//         window.scrollTo({
//             top: targetY,
//             behavior: 'smooth'
//         });
//     }

//     // Key press logic using delegation
//     document.addEventListener("click", e => {
//         if (e.target.classList.contains("key")) {
//             if (!activeInput) return;
//             const key = e.target.textContent.trim();

//             if (key === ">") {
//                 focusNextInput();
//                 return;
//             }
//             if (key === "<") {
//                 focusLastInput();
//                 return;
//             }
//             if (key === "C") {
//                 activeInput.value = "";
//                 document.getElementById("keyboard-display").textContent = "";
//                 return;
//             }

//             activeInput.value += key;
//             document.getElementById("keyboard-display").textContent += key;
//         }
//     });

//     // Next input movement
//     function focusNextInput() {
//         const inputs = [...document.querySelectorAll(".custom-input")]
//             .filter(el => el.offsetParent !== null);
//         const idx = inputs.indexOf(activeInput);

//         if (idx >= 0 && idx < inputs.length - 1) {
//             const next = inputs[idx + 1];
//             next.focus();
//             activeInput = next;
//             next.scrollIntoView({ behavior: "smooth", block: "center" });
//             document.getElementById("keyboard-display").textContent = "";
//         }
//     }

//     // Last input movement
//     function focusLastInput() {
//         const inputs = [...document.querySelectorAll(".custom-input")]
//             .filter(el => el.offsetParent !== null);
//         const idx = inputs.indexOf(activeInput);

//         if (idx > 0) {  // Changed condition to allow last input
//             const last = inputs[idx - 1];
//             last.focus();
//             activeInput = last;
//             last.scrollIntoView({ behavior: "smooth", block: "center" });
//             document.getElementById("keyboard-display").textContent = "";
//             activeInput.value = "";
//         }
//     }

//     // Keyboard calculate button
//     $(document).on('click', '#keyboard-calculate', function() {
//         if (typeof handleCalculateDWA === "function") handleCalculateDWA();
//         if (typeof calculateMeanDraft === "function") calculateMeanDraft();
//         if (typeof calculateSWD === "function") calculateSWD();
//         if (typeof currentTonnage === "function") currentTonnage();
//         if (typeof tonsToGo === "function") tonsToGo();
//     });

//     // Hide keyboard when clicking outside
//     document.addEventListener("click", e => {
//         const keyboard = document.getElementById("customKeyboard");
//         const clickedInsideKeyboard = keyboard.contains(e.target);
//         const clickedInput = e.target.classList.contains("custom-input");
//         const calculate = document.getElementById("keyboard-calculate");

//         if ((!clickedInsideKeyboard && !clickedInput) || calculate.contains(e.target)) {
//             keyboard.classList.add("hidden");
//         }
//     });
// }
