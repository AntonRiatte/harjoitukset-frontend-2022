import SaveFeatures from "./SaveFeatures";
import SuperPerson from "./SuperPerson";

const SuperPeople = ({ peeps, addNewPeep }) => {
  if (peeps.length === 0) {
    return <p>No superpeople.</p>;
  }
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
              bgcolor={p.color}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SuperPeople;
