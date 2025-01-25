import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { GoogleGenerativeAI } from "@google/generative-ai";
import ai from "../../assets/ai.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { sendMail } from "@/connecting/connecting";

const genAI = new GoogleGenerativeAI("AIzaSyBmRJaqVysiegWGeeiwT42ZkfKrE_KDDaA");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const SubmitProblem = () => {
  const [problem, setProblem] = useState("");
  const [aiInput, setAiInput] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh
    if (!problem.trim()) {
      toast.error("Please describe your problem!");
      return;
    }

    try {
      setSending(true);
      await sendMail({ body : problem })
      .then((res) => {
        toast.success(res.message);
        setProblem("");
      }).catch((error) => {console.log(error.response?.data.message);toast.error(error.response?.data.message);
      })
      .finally(() =>{
      setSending(false)})
    } catch (error) {
      console.error(error);
    }
  };

  const handleAIRequest = async () => {
    if (!aiInput.trim()) {
      toast.error("Please provide input for the AI!");
      return;
    }

    try {
      const prompt = `Generate a professional email based on the following issue described by the user: \"${aiInput}\".

Format it with the following structure:
1. Subject: A brief summary of the issue.
2. Greeting: Start with a formal greeting.
3. Issue Description: Clearly outline the problem with relevant details.
4. Request: Politely request the appropriate action or assistance.

Ensure the email is 10-12 lines long without placeholders like [your name].`;

      const result = await model.generateContent(prompt);
      const answer = result.response.text();
      setAiAnswer(answer);
      toast.success("AI response generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate AI response.");
    }
  };

  const handleInsert = () => {
    setProblem((prev) => `${prev}\n${aiAnswer}`);
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--black)] text-[var(--white)] p-6">
      <div className="w-full max-w-2xl bg-[var(--darkgrey)] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Write Your Problem</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-start gap-4 relative">
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Describe your problem in detail..."
              className="w-full h-40 p-4 text-[var(--black)] bg-[var(--white)] rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[var(--green)] resize-none"
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <img
                    src={ai}
                    alt="AI Tool"
                    className="cursor-pointer hover:scale-105 transition-transform absolute bottom-4 right-4 w-7 h-7"
                    onClick={() => setShowPopup(true)}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-black">Ask AI to write mail</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <button
            type="submit"
            className={`w-full py-3 bg-[var(--green)] text-[var(--white)] font-semibold rounded-lg hover:bg-[var(--darkgrey)] transition duration-300 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {sending ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Popup for AI Tool */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white text-[var(--black)] p-6 rounded-xl shadow-2xl max-w-md w-full">
            <button
              className="absolute top-3 right-3 text-black font-bold text-lg hover:scale-110 transition-transform"
              onClick={() => setShowPopup(false)}
            >
              ❌
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-[var(--green)]">Ask AI</h2>
            <textarea
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
              placeholder="Enter your question..."
              className="w-full scrollMe h-32 p-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[var(--green)] resize-none mb-4 border border-[var(--grey)]"
            />
            <div className="flex justify-between items-center space-x-4">
              <button
                className="w-full py-2 px-4 bg-[var(--green)] text-[var(--white)] font-semibold rounded-lg hover:bg-[var(--darkgrey)] transition duration-300"
                onClick={handleAIRequest}
              >
                Generate
              </button>
              <button
                className={`w-full py-2 px-4 bg-[var(--blue)] text-[var(--white)] font-semibold rounded-lg hover:bg-[var(--darkgrey)] transition duration-300 ${
                  !aiAnswer.trim() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleInsert}
                disabled={!aiAnswer.trim()}
              >
                Insert
              </button>
            </div>
            {aiAnswer && (
              <div className="mt-4 bg-[var(--grey)] p-4 rounded-lg shadow">
                <h3 className="font-bold mb-2">AI Response:</h3>
                <p className="max-h-72 overflow-auto scrollMe">{aiAnswer}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitProblem;
