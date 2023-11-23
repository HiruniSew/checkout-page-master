import "./Input.css";
import { useState } from "react";

function Input() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your email..."
        />
      </label>
    </form>
  );
}

export default Input;
