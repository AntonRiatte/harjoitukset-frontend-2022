import { useState } from "react";
import SuperPeople from "./SuperPeople";

const MainComponent = () => {
  const [peeps, setPeeps] = useState([
    { name: "Batman", superpower: "moneys", bgcolor: "#ff0000" },
    { name: "Spiderman", superpower: "spideystuff", bgcolor: "#00ff00" },
    { name: "Ant-Man", superpower: "being small", bgcolor: "#0000ff" },
  ]);

  const addNewPeep = (p) => {
    setPeeps([...peeps, p]);
  };
  return (
    <div>
      <SuperPeople peeps={peeps} addNewPeep={addNewPeep} />
    </div>
  );
};

export default MainComponent;
