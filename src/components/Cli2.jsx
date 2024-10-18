"use client"
import { useState } from 'react';

const CommandLine = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  
  const commands = {
    help: `Available commands:\n- help: Show this help message\n- clear: Clear the terminal\n- greet [name]: Greet the specified name`,
    greet: (name) => `Hello, ${name}!`,
    clear: () => setOutput([]),
    start: "Starting the process...",
    stop: "Stopping the process...",
    restart: "Restarting the process...",
    status: "Current status is up.",
    log: "Showing logs...",
    update: "Updating...",
    delete: "Deleting...",
    exit: "Exiting..."
  };

  const handleCommand = () => {
    const [command, ...args] = input.split(' ');
    if (command in commands) {
      if (command === 'greet') {
        const result = commands[command](args.join(' '));
        setOutput((prevOutput) => [...prevOutput, `> ${input}`, result]);
      } else if (command === 'clear') {
        commands[command]();
      } else {
        setOutput((prevOutput) => [...prevOutput, `> ${input}`, commands[command]]);
      }
    } else {
      setOutput((prevOutput) => [...prevOutput, `> ${input}`, 'Command not found']);
    }
    setInput(''); // Clear input after executing command
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black text-white p-4 font-mono w-2/5 rounded-lg shadow-lg">
        <div className="terminal h-64 overflow-y-auto mb-2">
          {output.map((line, index) => (
            <div key={index} className="output-line whitespace-pre-line">
              {line}
            </div>
          ))}
        </div>
        <div className="input-area flex">
          <span className="prompt text-green-500"> `{'>'}` `&gt;` </span>
          <input
            type="text"
            className="bg-black text-white outline-none flex-grow ml-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default CommandLine;
