import React, { useState } from "react";
import Navbar from "./Navbar";
import CodeContainer from "./CodeContainer";

import "./CodeDisplay.css";

const CodeDisplay = () => {
  const [codeType, setcodeType] = useState("html");
  const [activeButton, setactiveButton] = useState("html");

  const codes = {
    html: `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SnippetSwitcher</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
    
        `,
    css: `
    .navbar{
        background-color: rgb(71, 0, 71);
        width: 300px;
        padding: 30px;
        display: flex;
        justify-content: space-between;
        width: 840px;
        margin-bottom: 30px;
        margin-top: 30px;
        border-radius: 30px;
    }
    
    .the-button{
        border-radius: 20px;
        background-color: violet;
        padding: 20px;
        padding-left: 30px;
        padding-right: 30px;
        font-size: xx-large;
    
    }
    
    .active-button{
        color: gold;
        background-color: rgb(29, 0, 42);
        box-shadow: 10px 10px 70px 30px gold;
    }
        `,
    js: `
    import React from "react";
    import "./CodeContainer.css";
    
    const CodeContainer = ({code}) =>{
        return <>
        <div className="code-container">
            <pre>
                <code>{code}</code>
            </pre>
        </div>
        </>
    };
    
    export default CodeContainer;
        `,
  };

  return (
    <>
      <div className="container">
        <div>
          <Navbar setcodeType={setcodeType} activeButton={activeButton} setactiveButton={setactiveButton} />
          <CodeContainer code={codes[codeType]} />
        </div>
      </div>
    </>
  );
};

export default CodeDisplay;
