document.getElementById("sendBtn").addEventListener("click", sendMessage);

async function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (!message) return;

    addMessage("You", message);
    input.value = "";

    try {
        const response = await fetch("/api/chat/route", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        if (data.reply) {
            addMessage("AI Girlfriend", data.reply);
        } else {
            addMessage("AI Girlfriend", "Sorry, something went wrong.");
        }
    } catch (error) {
        addMessage("AI Girlfriend", "Error: " + error.message);
    }
}

function addMessage(sender, text) {
    const chatBox = document.getElementById("chatBox");
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(msg);
}
