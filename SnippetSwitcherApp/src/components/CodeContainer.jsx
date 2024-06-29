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
