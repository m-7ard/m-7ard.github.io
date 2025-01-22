import hljs from "highlight.js";
import { useEffect } from "react";

function CodeHighlighter({ code }: { code: string }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <pre>
        <code className="language-csharp">{code}</code>

        </pre>
    );
}

export default CodeHighlighter;
