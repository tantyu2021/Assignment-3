var memory;    
function init() {
    {
        document.getElementById('zero').addEventListener("click", number0, false);

    }

function number0()
    {
        document.getElementById('display').value += 0;
        memory += 0;
        return 0;
    }
}


window.addEventListener("load", init(), false);