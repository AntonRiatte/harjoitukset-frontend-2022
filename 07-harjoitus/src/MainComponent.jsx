import { useEffect } from "react";
import { useState } from "react";
import SuperPeople from "./SuperPeople";

const MainComponent = () => {
  const [peeps, setPeeps] = useState([]);
  // const [peeps2, setPeeps] = useState([
  //   { name: "Batman", superpower: "moneys", bgcolor: "#ff0000" },
  //   { name: "Spiderman", superpower: "spideystuff", bgcolor: "#00ff00" },
  //   { name: "Ant-Man", superpower: "being small", bgcolor: "#0000ff" },
  // ]);

  useEffect(() => {
    const fetchPeeps = async () => {
      const data = await fetch(
        "https://superpeople-api.netlify.app/.netlify/functions/get-superpeople"
      );
      let json = await data.json();
      // console.log(json);
      setPeeps(json);
    };
    fetchPeeps();
  }, []);

  const addNewPeep = (p) => {
    setPeeps([...peeps, p]);
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(peeps, null, 2)}</pre> */}
      <SuperPeople peeps={peeps} addNewPeep={addNewPeep} />
    </div>
  );
};

export default MainComponent;
