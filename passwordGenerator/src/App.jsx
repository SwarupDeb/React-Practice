import { useEffect, useRef } from "react";
import { useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (symbols)
      characters += "!@#$%^&*()-_=+[{]}\\|;:,<.>/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(
        Math.random() * characters.length + 1
      );
      result += characters.charAt(char);
    }
    setPassword(result);
  }, [length, numbers, symbols]);

  const copyPassToCLip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    navigator.clipboard.writeText(password);
    toast.success("Password copied!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, numbers, symbols]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-900">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center text-white mb-6">Password Generator</h1>
          <div className="relative mb-6">
            <input
              type="text"
              value={password}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Generated Password"
              readOnly
              ref={passwordRef}
            />
            <button 
              className="absolute top-0 right-0 shrink-0 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              onClick={copyPassToCLip}
            >
              Copy
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="length" className="text-white">
              Length:
            </label>
            <input
              id="length"
              type="range"
              value={length}
              min="6"
              max="20"
              onChange={(e) => setLength(e.target.value)}
              className="w-20 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="numbers" className="text-white">
              Include Numbers:
            </label>
            <input
              id="numbers"
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers((prev) => !prev)}
              className="w-5 h-5 text-orange-500 focus:ring-orange-400"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="symbols" className="text-white">
              Include Symbols:
            </label>
            <input
              id="symbols"
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols((prev) => !prev)}
              className="w-5 h-5 text-orange-500 focus:ring-orange-400"
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
      />
    </>
  );
}

export default App;
