let activeInput=null;
document.querySelectorAll(".custom-input").forEach(inp=>{
    inp.addEventListener("focusin",()=>{
        activeInput=inp;
        document.getElementById("customKeyboard").classList.remove("hidden");
        inp.scrollIntoView({behavior:"smooth",block: "center"});
    });
});