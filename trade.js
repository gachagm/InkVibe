// Lade dein bestehendes Spiel
loadGame();

let selectedCard = null;

// 🔹 Karten anzeigen
function renderYourCards() {
  const container = document.getElementById("yourCards");

  const entries = Object.entries(state.collection);

  if (entries.length === 0) {
    container.innerHTML = "Du hast noch keine Karten.";
    return;
  }

  container.innerHTML = entries.map(([id, count]) => {
    const card = getCardById(id);
    return `
      <div class="card" onclick="selectCard('${id}')">
        ${card.name} (x${count})
      </div>
    `;
  }).join("");
}

// 🔹 Karte auswählen
function selectCard(id) {
  selectedCard = id;
  document.getElementById("selectedInfo").textContent =
    "Ausgewählt: " + getCardById(id).name;
}

// 🔥 CODE ERSTELLEN
function generateTradeCode() {
  if (!selectedCard) {
    alert("Bitte zuerst eine Karte auswählen!");
    return;
  }

  const data = {
    cardId: selectedCard,
    time: Date.now()
  };

  // Encode (Base64)
  const code = btoa(JSON.stringify(data));

  document.getElementById("tradeCode").value = code;
}

// 🔄 CODE EINLÖSEN
function redeemCode() {
  const input = document.getElementById("redeemInput").value;

  if (!input) {
    alert("Bitte Code eingeben!");
    return;
  }

  try {
    const data = JSON.parse(atob(input));
    const cardId = data.cardId;

    // Prüfen ob Karte existiert
    const card = getCardById(cardId);
    if (!card) {
      alert("Ungültige Karte!");
      return;
    }

    // Karte hinzufügen
    state.collection[cardId] = (state.collection[cardId] || 0) + 1;

    saveGame();
    renderYourCards();

    alert("🎉 Du hast erhalten: " + card.name);

  } catch (e) {
    alert("Ungültiger Code!");
  }
}

// 🔹 Start
renderYourCards();

