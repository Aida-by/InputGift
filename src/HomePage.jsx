import { useState } from "react";
import Input from "./Input";

function HomePage() {
  const [text, setText] = useState("");

  const onSelect = (city) => {
    setText(city);
  };

  return (
    <Input
      value={text}
      handleChange={(e) => setText(e.target.value)}
      hint="City"
      onSelect={onSelect}
    />
  );
}

export default HomePage;
