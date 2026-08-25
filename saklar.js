function saklar(action, lamp) {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")

    if (toggle1.checked) {
        lampu1.src = "ASSETS/IMAGES/on.jpg"
    } else {
        lampu1.src = "ASSETS/IMAGES/off.jpg";
    }

    if (toggle2.checked) {
        lampu2.src = "ASSETS/IMAGES/on.jpg"
    } else {
        lampu2.src = "ASSETS/IMAGES/off.jpg";
    }

    if (toggle3.checked) {
        lampu3.src = "ASSETS/IMAGES/on.jpg"
    } else {
        lampu3.src = "ASSETS/IMAGES/off.jpg";
    }


    if (action == "on") { //nyala
        if (lamp == 1) {
            lampu1.src = "ASSETS/IMAGES/on.jpg"
        }
        if (lamp == 2) {
            lampu2.src = "ASSETS/IMAGES/on.jpg"
        }
        if (lamp == 3) {
            lampu3.src = "ASSETS/IMAGES/on.jpg"
        }
    }
    if (action == "off") { //mati
        if (lamp == 1) {
            lampu1.src = "ASSETS/IMAGES/off.jpg"
        }
        if (lamp == 2) {
            lampu2.src = "ASSETS/IMAGES/off.jpg"
        }
        if (lamp == 3) {
            lampu3.src = "ASSETS/IMAGES/off.jpg"
        }
    }

}