let currentRoom = null;

function createRoom() {
    currentRoom = Math.floor(100000 + Math.random() * 900000);

    document.getElementById("player1Status").innerText =
        "Raum erstellt: " + currentRoom;

    document.getElementById("message").innerText =
        "Teile diesen Code mit deinem Gegner: " + currentRoom;
}


function joinRoom() {
    let code = document.getElementById("roomCode").value;

    if (code === "") {
        document.getElementById("message").innerText =
            "Bitte einen Code eingeben.";
        return;
    }

    document.getElementById("player2Status").innerText =
        "Beigetreten: " + code;

    document.getElementById("message").innerText =
        "Spieler verbunden! (Test)";
}

let round = 1;
let playerHP = 100;
let enemyHP = 100;


function chooseAction(action) {

    let result = "";

    if (action === "attack") {
        let damage = Math.floor(Math.random() * 20) + 5;
        enemyHP -= damage;

        result = "⚔️ Du machst " + damage + " Schaden!";
    }


    if (action === "defend") {

        result = "🛡 Du bist bereit für den Angriff!";
    }


    if (action === "skill") {

        let damage = 30;
        enemyHP -= damage;

        result = "✨ Spezialfähigkeit macht " + damage + " Schaden!";
    }


    round++;

    document.getElementById("round").innerText =
        "Runde: " + round;

    document.getElementById("battleMessage").innerText =
        result + " Gegner HP: " + enemyHP;


    if (enemyHP <= 0) {
        document.getElementById("battleMessage").innerText =
            "🏆 Sieg!";
    }
}