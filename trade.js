// =========================
// SPIELER SYSTEM
// =========================

let currentPlayer = localStorage.getItem("currentPlayer") || "player1";

// =========================
// DEMO INVENTAR
// =========================

if (!localStorage.getItem("inventories")) {
  const inventories = {
    player1: [
      { id: "fox-001", name: "Fox Spirit", rarity: "SSR" },
      { id: "mage-002", name: "Shadow Mage", rarity: "SR" }
    ],
    player2: [
      { id: "slime-003", name: "Blue Slime", rarity: "R" },
      { id: "knight-004", name: "Moon Knight", rarity: "SSR" }
    ]
  };

  localStorage.setItem("inventories", JSON.stringify(inventories));
}

// Bereits verwendete Trades
if (!localStorage.getItem("usedTrades")) {
  localStorage.setItem("usedTrades", JSON.stringify([]));
}

// =========================
// HILFSFUNKTIONEN
// =========================

function getInventories() {
  return JSON.parse(localStorage.getItem("inventories"));
}

function saveInventories(data) {
  localStorage.setItem("inventories", JSON.stringify(data));
}

// =========================
// INVENTAR ANZEIGEN
// =========================

function renderInventory() {
  const inventoryDiv = document.getElementById("inventory");
  inventoryDiv.innerHTML = "";

  const inventories = getInventories();
  const cards = inventories[currentPlayer];

  const title = document.createElement("h3");
  title.textContent = "Aktiver Spieler: " + currentPlayer;
  inventoryDiv.appendChild(title);

  const switchBtn = document.createElement("button");
  switchBtn.textContent = "Spieler wechseln";
  switchBtn.onclick = switchPlayer;
  inventoryDiv.appendChild(switchBtn);

  cards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    cardDiv.innerHTML = `
      <strong>${card.name}</strong> (${card.rarity})<br>
      <button onclick="generateTradeQR('${card.id}')">Tauschen</button>
    `;

    inventoryDiv.appendChild(cardDiv);
  });
}

// =========================
// SPIELER WECHSELN
// =========================

function switchPlayer() {
  currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
  localStorage.setItem("currentPlayer", currentPlayer);

  renderInventory();

  document.getElementById("qrcode").innerHTML = "";
  document.getElementById("tradeStatus").textContent = "";
  document.getElementById("scanResult").textContent = "";
}

// =========================
// QR CODE ERSTELLEN
// =========================

function generateTradeQR(cardId) {
  const tradeId = "trade-" + Date.now();

  const tradeData = {
    from: currentPlayer,
    cardId: cardId,
    tradeId: tradeId
  };

  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";

  QRCode.toCanvas(JSON.stringify(tradeData), function (err, canvas) {
    if (err) console.error(err);
    qrContainer.appendChild(canvas);
  });

  document.getElementById("tradeStatus").textContent =
    "QR-Code erstellt für Karte: " + cardId;
}

// =========================
// SCANNER STARTEN
// =========================

function startScanner() {
  const scanner = new Html5Qrcode("preview");

  scanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: 250
    },
    (decodedText) => {
      scanner.stop();
      processTrade(decodedText);
    },
    (errorMessage) => {}
  ).catch(err => {
    console.error(err);
  });
}

// =========================
// TRADE AUSFÜHREN
// =========================

function processTrade(qrText) {
  try {
    const tradeData = JSON.parse(qrText);
    const { from, cardId, tradeId } = tradeData;

    const usedTrades = JSON.parse(localStorage.getItem("usedTrades"));

    if (usedTrades.includes(tradeId)) {
      document.getElementById("scanResult").textContent =
        "Trade wurde schon benutzt!";
      return;
    }

    if (from === currentPlayer) {
      document.getElementById("scanResult").textContent =
        "Du kannst deinen eigenen QR nicht scannen!";
      return;
    }

    const inventories = getInventories();
    const sender = inventories[from];
    const receiver = inventories[currentPlayer];

    const index = sender.findIndex(card => card.id === cardId);

    if (index === -1) {
      document.getElementById("scanResult").textContent =
        "Karte existiert nicht mehr!";
      return;
    }

    const card = sender.splice(index, 1)[0];
    receiver.push(card);

    saveInventories(inventories);

    usedTrades.push(tradeId);
    localStorage.setItem("usedTrades", JSON.stringify(usedTrades));

    document.getElementById("scanResult").textContent =
      "Erfolgreich getauscht: " + card.name;

    renderInventory();

  } catch (e) {
    document.getElementById("scanResult").textContent =
      "Ungültiger QR-Code!";
  }
}

// =========================
// START
// =========================

renderInventory();
