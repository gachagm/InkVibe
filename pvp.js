let currentRoom = null;

let round = 1;
let playerHP = 100;
let enemyHP = 100;


// Raum erstellen
function createRoom() {

    currentRoom = Math.floor(100000 + Math.random() * 900000);

    document.getElementById("player1Status").innerText =
        "Raum erstellt: " + currentRoom;

    document.getElementById("message").innerText =
        "Teile diesen Code mit deinem Gegner: " + currentRoom;
}


// Raum beitreten
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



// Kampf Aktion
function chooseAction(action) {

    let result = "";


    if (action === "attack") {

        let damage = Math.floor(Math.random() * 20) + 5;

        enemyHP -= damage;

        result =
            "⚔️ Angriff! Du machst " + damage + " Schaden.";
    }



    if (action === "defend") {

        let blocked = Math.floor(Math.random() * 10) + 5;

        enemyHP -= blocked;

        result =
            "🛡 Verteidigung! Gegner verliert " + blocked + " HP.";
    }



    if (action === "skill") {

        let damage = 30;

        enemyHP -= damage;

        result =
            "✨ Spezialfähigkeit! " + damage + " Schaden.";
    }



    if (enemyHP < 0) {
        enemyHP = 0;
    }



    // einfacher Gegner-Gegenzug
    if (enemyHP > 0) {

        let enemyDamage =
            Math.floor(Math.random() * 15) + 3;

        playerHP -= enemyDamage;


        result +=
            " 👹 Gegner macht " +
            enemyDamage +
            " Schaden.";
    }



    if (playerHP < 0) {
        playerHP = 0;
    }



    round++;



    document.getElementById("round").innerText =
        "Runde: " + round;


    document.getElementById("playerHP").innerText =
        playerHP;


    document.getElementById("enemyHP").innerText =
        enemyHP;


    document.getElementById("battleMessage").innerText =
        result;



    if (enemyHP <= 0) {

        document.getElementById("battleMessage").innerText =
            "🏆 Sieg! Der Gegner wurde besiegt.";
    }



    if (playerHP <= 0) {

        document.getElementById("battleMessage").innerText =
            "💀 Niederlage.";
    }

}