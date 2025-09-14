const ComandLine = ({
  prompt = "SamuelRafino@dev-portfolio:~$",
  command,
  isTyping = false,
}) => {
  return (
    <div className="command-line">
      <span className="prompt">{prompt}</span>
      <span className={`command ${isTyping ? "typing-animation" : ""}`}>
        {command}
      </span>
    </div>
  );
};

export default ComandLine;
