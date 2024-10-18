"use client"
import { useState } from 'react';

const CommandLine = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  
  const commands = {
    help: `Available commands:\n- help: Show this help message\n- clear: Clear the terminal\n- greet [name]: Greet the specified name`,
    greet: (name) => `Hello, ${name}!`,
    clear: () => setOutput([]),
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
    <div className="bg-black text-white p-5 font-mono h-screen mt-14">
      <div className="terminal">
        {output.map((line, index) => (
          <div key={index} className="output-line">
            {line}
          </div>
        ))}
      </div>
      <div className="input-area">
        <span className="prompt text-green-500">this is testing. </span>
        <input
          type="text"
          className="bg-black text-white outline-none w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
};

export default CommandLine;
