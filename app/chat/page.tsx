'use client'
import React, { useState, useRef } from 'react';

export default function Chat() {
    const [query, setQuery] = useState('');
    const chatMessagesRef = useRef<HTMLDivElement | null>(null);

    async function handleSearch() {
        try {
            const result = await fetch(`/api/gemini?q=${encodeURIComponent(query)}`, {
                method: 'GET',
            });
            const data = await result.json();
            const output = data.success.response.candidates[0].content.parts[0].text;

            // Add user message to chat
            if (query.trim()) {
                const userMessage = document.createElement('div');
                userMessage.classList.add('message', 'user');
                userMessage.innerHTML = `<div class="message-content">${query.trim()}</div>`;
                if (chatMessagesRef.current == null) {
                    return
                }
                chatMessagesRef.current.appendChild(userMessage);

                // Clear input field
                setQuery('');
            }

            // Display the bot's response
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot');
            botMessage.innerHTML = `<div class="message-content">${output}</div>`;
            if (chatMessagesRef.current == null) {
                return
            }
            chatMessagesRef.current.appendChild(botMessage);

            // Auto-scroll to the bottom
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        } catch (error) {
            console.error('Error fetching chat response:', error);
        }
    }

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="chat-container">
                <div className="chat-header">Chat Room</div>
                <div
                    className="chat-messages min-h-[350px] max-h-[400px] overflow-y-auto"
                    ref={chatMessagesRef}
                >
                    <div className="message bot">
                        <div className="message-content">Hello! How can I help you today?</div>
                    </div>
                </div>
                <div className="chat-input flex">
                    <input
                        type="text"
                        value={query}
                        className="text-black flex-grow border p-2"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 ml-2"
                        onClick={handleSearch}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
