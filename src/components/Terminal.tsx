import React, { useState, useEffect } from 'react';

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');

  const fullCode = [
    "import { Developer } from 'rahul-khanapuri';",
    "",
    "const captain = {",
    "  name: 'Rahul Khanapuri',",
    "  role: 'Senior Software Engineer',",
    "  experience: '2+ Years at Sea',",
    "  haki: ['React', 'TypeScript', 'Node.js', 'AWS'],",
    "  bounty: '฿ 9,999,000,000'",
    "};",
    "",
    "async function embark() {",
    "  console.log('Setting sail to new islands...');",
    "  await captain.deploy('Next Big Project');",
    "}",
    "",
    "embark();"
  ];

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let timer: any;

    const typeChar = () => {
      if (lineIdx < fullCode.length) {
        const targetLine = fullCode[lineIdx];
        if (charIdx < targetLine.length) {
          setCurrentLine(prev => prev + targetLine[charIdx]);
          charIdx++;
          timer = setTimeout(typeChar, 30);
        } else {
          // Finished line
          setLines(prev => [...prev, targetLine]);
          setCurrentLine('');
          lineIdx++;
          charIdx = 0;
          timer = setTimeout(typeChar, 100);
        }
      } else {
        // Complete, restart after delay
        timer = setTimeout(() => {
          setLines([]);
          setCurrentLine('');
          lineIdx = 0;
          charIdx = 0;
          typeChar();
        }, 8000);
      }
    };

    typeChar();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md bg-surface-dim/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,26,51,0.5)] transform rotate-2 hover:rotate-0 transition-transform duration-500 relative overflow-hidden font-mono text-sm">
      {/* Header buttons */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-4 mb-4">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-error/70"></span>
          <span className="w-3 h-3 rounded-full bg-secondary/70"></span>
          <span className="w-3 h-3 rounded-full bg-primary/70"></span>
        </div>
        <span className="font-label-sm text-label-sm text-primary/70">captain_log.ts</span>
      </div>

      {/* Terminal text */}
      <div className="text-primary-fixed-dim leading-relaxed h-72 overflow-y-auto select-none scrollbar-thin">
        {lines.map((line, i) => {
          // Syntax highlight simulation
          return <CodeLine key={i} text={line} />;
        })}
        {currentLine && <CodeLine text={currentLine} />}
        <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
      </div>

      {/* Glow status */}
      <div className="absolute bottom-4 right-4 bg-tertiary/20 border border-tertiary/50 px-3 py-1 rounded font-label-sm text-label-sm text-tertiary shadow-[0_0_10px_rgba(255,179,179,0.3)] backdrop-blur-sm animate-pulse">
        STATUS: ACTIVE
      </div>
    </div>
  );
};

const CodeLine: React.FC<{ text: string; isTyping?: boolean }> = ({ text }) => {
  // Simple regex token highlights
  const getHighlightedText = (val: string) => {
    if (val.startsWith("import") || val.includes("const ") || val.includes("async function")) {
      return val.split(" ").map((word, idx) => {
        if (word === "import" || word === "const" || word === "async" || word === "function" || word === "from") {
          return <span key={idx} className="text-tertiary">{word} </span>;
        }
        if (word.startsWith("'") || word.endsWith("'")) {
          return <span key={idx} className="text-secondary">{word} </span>;
        }
        return <span key={idx}>{word} </span>;
      });
    }

    if (val.includes("console.log") || val.includes("await")) {
      return (
        <span>
          <span className="text-primary">  await </span>
          <span className="text-primary">console</span>
          <span>.log(</span>
          <span className="text-secondary">'Setting sail to new islands...'</span>
          <span>);</span>
        </span>
      );
    }

    // Highlight fields and values
    if (val.includes(":")) {
      const parts = val.split(":");
      const key = parts[0];
      const rest = parts.slice(1).join(":");
      return (
        <span>
          {key}:
          <span className="text-secondary">{rest}</span>
        </span>
      );
    }

    return <span>{val}</span>;
  };

  return <div className="min-h-[1.5rem] whitespace-pre-wrap">{getHighlightedText(text)}</div>;
};
