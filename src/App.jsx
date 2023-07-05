import { useState } from "react";
import "./App.css";

function App() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const handleOutput = () => {
    const iframe = document.getElementById("output");
    iframe.contentDocument.body.innerHTML =
      htmlCode + "<style>" + cssCode + "</style>";

    iframe.contentWindow.eval(jsCode);
  };

  const handleClear = () => {
    const iframe = document.getElementById("output");
    iframe.contentDocument.body.innerHTML = "";
  };

  return (
    <div className="w-full h-screen">
      <div className="flex justify-end mr-5">
        <button onClick={handleOutput} className="bg-green-600 text-black mr-2">
          Run
        </button>
        <button onClick={handleClear} className="bg-yellow-500 text-black">
          Clear
        </button>
      </div>
      <div className="playground p-2 flex">
        {/* for ide */}
        <div className="left basis-1/2 p-4">
          {/* for html */}
          <label className="flex justify-center bg-black">HTML</label>
          <textarea
            name="html"
            className="w-full h-1/4 bg-slate-600 text-yellow-200 py-2 px-4 outline-none overflow-visible font-code resize-none"
            onChange={(e) => setHtmlCode(e.target.value)}
          ></textarea>
          {/* for css */}
          <label className="flex justify-center bg-black">CSS</label>
          <textarea
            name="css"
            className="w-full h-1/4 bg-slate-600 text-yellow-200 py-2 px-4 outline-none overflow-visible font-code resize-none"
            onChange={(e) => setCssCode(e.target.value)}
          ></textarea>
          {/* for js */}
          <label className="flex justify-center bg-black">JavaScript</label>
          <textarea
            name="js"
            className="w-full h-1/4 bg-slate-600 text-yellow-200 py-2 px-4 outline-none overflow-visible font-code resize-none"
            onChange={(e) => setJsCode(e.target.value)}
          ></textarea>
        </div>

        {/* for output */}
        <div className="right basis-1/2 p-4 text-center">
          <iframe
            id="output"
            className="w-full h-[80vh] bg-white scroll-smooth overflow-visible"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
