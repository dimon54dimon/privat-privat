import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [code, setCode] = useState("");
  const [access, setAccess] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (code === "2525") {
      setAccess(true);
    } else {
      alert("Невірний код");
    }
  };

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "white", height: "100vh", fontFamily: "Arial", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {!access ? (
        <>
          <h2>Введіть код доступу</h2>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ padding: "10px", borderRadius: "5px", marginBottom: "10px", width: "200px" }}
          />
          <button onClick={handleLogin} style={{ padding: "10px 20px", background: "#1e88e5", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Увійти
          </button>
        </>
      ) : (
        <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", height: "90vh" }}>
          <h2 style={{ textAlign: "center" }}>Секретний чат</h2>
          <div style={{ flex: 1, overflowY: "auto", border: "1px solid #444", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ background: "#1e88e5", padding: "8px", margin: "5px 0", borderRadius: "5px" }}>{msg}</div>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Введіть повідомлення"
              style={{ flex: 1, padding: "10px", borderRadius: "5px 0 0 5px", border: "none" }}
            />
            <button onClick={sendMessage} style={{ padding: "10px 20px", background: "#1e88e5", color: "white", border: "none", borderRadius: "0 5px 5px 0", cursor: "pointer" }}>
              Надіслати
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
