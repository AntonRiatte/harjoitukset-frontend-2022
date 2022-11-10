import SuperPerson from "./SuperPerson";

const SuperPeople = () => {
  let peeps = [
    { name: "Batman", superpower: "moneys" },
    { name: "Spiderman", superpower: "spideystuff" },
    { name: "Ant-Man", superpower: "being small" },
  ];
  return (
    <ul>
      {peeps.map((p, i) => {
        return <SuperPerson key={i} name={p.name} superpower={p.superpower} />;
      })}
    </ul>
  );
};

export default SuperPeople;
