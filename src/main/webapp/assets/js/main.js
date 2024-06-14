
function openMessage(subject, body, from) {

    var messageElement = document.getElementById("openMessage");
    var subjectElement = document.getElementById("openMessageSubject");
    var bodyElement = document.getElementById("openMessageBody");
    var fromElement = document.getElementById("openMessageFrom");

    subjectElement.textContent = subject;
    fromElement.textContent = "From: " + from;
    bodyElement.textContent = body;

    messageElement.classList.remove("hidden");
}

function composeMessage() {
    var messageElement = document.getElementById("composeMessage");
    messageElement.classList.remove("hidden");
}


function closeMe() {

    document.getElementById("openMessage").classList.add("hidden");
    document.getElementById("composeMessage").classList.add("hidden");
}

function toggleShipRegistration() {
    if(document.getElementById("registerShip").checked) {
        document.getElementById("shipLabels").classList.remove("hidden");
        document.getElementById("shipInputs").classList.remove("hidden");
    } else {
        document.getElementById("shipLabels").classList.add("hidden");
        document.getElementById("shipInputs").classList.add("hidden");
    }

}

/*
* MAKE THE MESSAGE DIVS DRAGGABLE
 */

const OM = document.getElementById("openMessage");
const OMS = document.getElementById("openMessageSubject");

const CM = document.getElementById("composeMessage");
const CMH = document.getElementById("composeMessageHeader");

if(OM) {
    function onDrag1(e) {
        const getStyle = window.getComputedStyle(OM);
        const left = parseInt(getStyle.left);
        const top = parseInt(getStyle.top);
        console.log(left, top);
        OM.style.left = `${left + e.movementX}px`;
        OM.style.top = `${top + e.movementY}px`;
    }

    OMS.addEventListener('mousedown', () => {
        OMS.addEventListener('mousemove', onDrag1)
    });

    document.addEventListener('mouseup', () => {
        OMS.removeEventListener('mousemove', onDrag1)
    });

}

if(CM) {
    function onDrag2(e) {
        const getStyle = window.getComputedStyle(CM);
        const left = parseInt(getStyle.left);
        const top = parseInt(getStyle.top);
        console.log(left, top);
        CM.style.left = `${left + e.movementX}px`;
        CM.style.top = `${top + e.movementY}px`;
    }

    CMH.addEventListener('mousedown', () => {
        CMH.addEventListener('mousemove', onDrag2)
    });

    document.addEventListener('mouseup', () => {
        CMH.removeEventListener('mousemove', onDrag2)
    });

}

function httpGet(url) {
    window.location.href = window.location.origin + "/Antioch_Station_war/" + url;
}