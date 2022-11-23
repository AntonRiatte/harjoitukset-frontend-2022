import { useState } from "react";
import SuperPerson from "./SuperPerson";

const SuperPeople = () => {
  const [peeps, setPeeps] = useState([
    { name: "Batman", superpower: "moneys", bgcolor: "#ff0000" },
    { name: "Spiderman", superpower: "spideystuff", bgcolor: "#00ff00" },
    { name: "Ant-Man", superpower: "being small", bgcolor: "#0000ff" },
  ]);

  const [name, setName] = useState("");
  const [power, setPower] = useState("");

  const handleSave = (e) => {
    if (name === "" || power === "") {
      return;
    }
    let newPerson = { name, superpower: power };
    setPeeps([...peeps, newPerson]);
    setName("");
    setPower("");
  };
  return (
    <div>
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
      <ul>
        {peeps.map((p, i) => {
          return (
            <SuperPerson
              key={i}
              name={p.name}
              superpower={p.superpower}
              bgcolor={p.bgcolor}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SuperPeople;
