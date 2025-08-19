import { useState } from "react";

export interface InputBoxProps {
  handleSendMessage: (value: string) => void;
}

function InputBox({ handleSendMessage }: InputBoxProps) {
  const [value, setValue] = useState("");

  return (
    <div className="border-t p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
        />
        <button
          onClick={() => handleSendMessage(value)}
          className="px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#2563eb]/90"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default InputBox;
