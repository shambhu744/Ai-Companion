const chatBox = document.getElementById("chat-box");
const inputBox = document.getElementById("input-box");
const sendBtn = document.getElementById("send-btn");

async function sendMessage() {
    const message = inputBox.value.trim();
    if (!message) return;

    // Show user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    inputBox.value = "";

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        // Show AI reply
        chatBox.innerHTML += `<p><strong>GF:</strong> ${data.reply}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        chatBox.innerHTML += `<p><strong>GF:</strong> Error connecting to server.</p>`;
    }
}

sendBtn.addEventListener("click", sendMessage);

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});
