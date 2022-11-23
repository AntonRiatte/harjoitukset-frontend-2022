const SuperPerson = ({ name, superpower, bgcolor = "#eee" }) => {
  return (
    <li style={{ background: bgcolor }}>
      {name} - {superpower}
    </li>
  );
};

export default SuperPerson;
