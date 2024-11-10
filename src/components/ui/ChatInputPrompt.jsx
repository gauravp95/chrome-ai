import React, { useState } from "react";

const ChatPromptInput = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt); // Pass the prompt back to parent component
      setPrompt(""); // Clear input after submission
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* <div className="bg-gray-100 p-4 rounded-lg shadow-lg"> */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <textarea
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="3"
          placeholder="Type your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="flex">
          {" "}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-300 text-white font-semibold rounded-full border-2 border-gray-300 hover:bg-blue-900 transition-colors duration-200"
          >
            Translate
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default ChatPromptInput;
