import { useState } from "react";

export default function App() {
  const [value, setValue] = useState<string | null>(null);
  const handleInput = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const file = changeEvent.target.files ? changeEvent.target.files[0] : null;
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (typeof event?.target?.result === "string") {
        setValue(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="App">
      <input type="file" accept="image/*" onChange={handleInput} />
      {value && <img src={value} alt={"preview"} />}
    </div>
  );
}
