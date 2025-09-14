import React from "react";
const TerminalHeader = () => {
  return (
    <div className="terminal-header">
      <div className="terminal-buttons">
        <div className="btn btn-close"></div>
        <div className="btn btn-minimize"></div>
        <div className="btn btn-maximize"></div>
      </div>
      <div className="terminal-title">SamuelRafino@dev-portfolio:~$</div>
    </div>
  );
};

export default TerminalHeader;
