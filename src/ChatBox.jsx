import React, { useState, useEffect } from "react";
import "./ChatBox.css";
import chatIcon from './assets/chat-icon.jpg';

function ChatBox() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    var sendButton = document.getElementById("send-btn");
    var userInput = document.getElementById("user-input");
    var chatBody = document.getElementById("chat-body");

    if (sendButton && userInput && chatBody) {
      sendButton.addEventListener("click", sendMessage);

      userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          sendMessage();
        }
      });
    }

    function appendMessageBot(sender, message) {
      var messageElement = document.createElement("p");
      messageElement.className = "message-bot";
      messageElement.textContent = sender + ": " + message;
      chatBody.appendChild(messageElement);
    }

    function appendMessageUser(sender, message) {
      var messageElement = document.createElement("p");
      messageElement.className = "message-user";
      messageElement.textContent = sender + ": " + message;
      chatBody.appendChild(messageElement);
    }

    function sendMessage() {
      var userMessage = userInput.value.trim();
      if (userMessage !== "") {
        appendMessageUser("You", userMessage);
        userInput.value = "";
        scrollToBottom();
        showTypingAnimation();
        setTimeout(sendAutoReply, 2000);
      }
    }

    function sendAutoReply() {
      hideTypingAnimation();
      appendMessageBot("Bot", "<Automated Reply>");
      scrollToBottom();
    }

    function showTypingAnimation() {
      var typingElement = document.createElement("p");
      typingElement.className = "message message-bot"; 
      typingElement.id = "typing-indicator";
      typingElement.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
      chatBody.appendChild(typingElement);
    }

    function hideTypingAnimation() {
      var typingElement = document.getElementById("typing-indicator");
      if (typingElement) {
        typingElement.remove();
      }
    }

    function scrollToBottom() {
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    return () => {
      if (sendButton && userInput) {
        sendButton.removeEventListener("click", sendMessage);

        userInput.removeEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            sendMessage();
          }
        });
      }
    };
  }, []);

  return (
    <React.Fragment>
      <div id="chat-container" className={isChatOpen ? "" : "hidden"}>
        <div className="chat-header">
          <h3 className="customer-support-chat">Customer Support Chat</h3>
        </div>
        <div className="chat-body" id="chat-body">
          <p className="message-bot">Hello, welcome to Sea Escapes!</p>
        </div>
        <div className="chat-footer">
          <input className="user-text-input-chat" type="text" id="user-input" placeholder="Type your message here..." />
          <button id="send-btn">Send</button>
        </div>
      </div>
      {!isChatOpen && (
        <button id="open-chat-btn" onClick={() => setIsChatOpen(true)} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={chatIcon} alt="Chat Icon" style={{ width: '35px', height: '35px' }} />
      </button>
      
      )}
      {isChatOpen && (
        <button id="close-chat-btn" onClick={() => setIsChatOpen(false)} style={{ display: 'flex', justifyContent: 'center' }}>
        X
      </button>
      
      )}
    </React.Fragment>
  );
}

export default ChatBox;
