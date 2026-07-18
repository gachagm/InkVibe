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