import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChatPromptInput from "./components/ui/ChatInputPrompt";

function App() {
  const handlePromptSubmit = async (prompt) => {
    console.log("Prompt submitted:", prompt);

    const canSummarize = await ai.summarizer.capabilities();

    let summarizer;
    if (canSummarize && canSummarize.available !== "no") {
      if (canSummarize.available === "readily") {
        // The summarizer can immediately be used.
        summarizer = await ai.summarizer.create();
      } else {
        // The summarizer can be used after the model download.
        summarizer = await ai.summarizer.create();
        summarizer.addEventListener("downloadprogress", (e) => {
          console.log(e.loaded, e.total);
        });
        await summarizer.ready;
      }
    } else {
      // The summarizer can't be used at all.
    }

    const result = await summarizer.summarize(someUserText);
    console.log(result);
  };

  return <ChatPromptInput onSubmit={handlePromptSubmit} />;
}

export default App;
