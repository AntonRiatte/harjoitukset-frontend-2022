import SaveFeatures from "./SaveFeatures";
import SuperPerson from "./SuperPerson";

const SuperPeople = ({ peeps, addNewPeep }) => {
  return (
    <div>
      <SaveFeatures addNewPeep={addNewPeep} />
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
