import { useState } from "react";

const SaveFeatures = ({ addNewPeep }) => {
  const [name, setName] = useState("");
  const [power, setPower] = useState("");

  const handleSave = (e) => {
    if (name === "" || power === "") {
      return;
    }
    let newPerson = { name, superpower: power };
    addNewPeep(newPerson);
    setName("");
    setPower("");
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="superpower"
        placeholder="superpower"
        value={power}
        onChange={(e) => setPower(e.target.value)}
      />
      <button onClick={handleSave}>Tallenna</button>
    </div>
  );
};

export default SaveFeatures;
