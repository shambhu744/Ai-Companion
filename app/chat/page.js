export default function ChatPage() {
  return (
    <html>
      <head>
        <title>AI Girlfriend Chat</title>
        <script src="chat.js" defer></script>
      </head>
      <body style={{ background: "#f5f5f5", fontFamily: "Arial", padding: "20px" }}>
        <h2>AI Girlfriend 💙</h2>

        <div id="chat-box"
          style={{
            width: "100%",
            height: "400px",
            background: "white",
            border: "1px solid #ccc",
            padding: "10px",
            overflowY: "auto",
            marginBottom: "10px"
          }}
        ></div>

        <input id="input-box" type="text" placeholder="Type your message..."
          style={{ width: "80%", padding: "10px" }} />

        <button id="send-btn" style={{ padding: "10px 20px" }}>Send</button>
      </body>
    </html>
  );
}
