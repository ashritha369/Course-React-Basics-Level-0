import "./card.style.css";

const Card = (props) => {
  // destructuring the below prop as  ' const { name, email, id } = this.props.monster;'
  //this.props indicates that the value for monster is coming from the parent component card-list.component.jsx
  // monster.id as id;
  // monster.name as name;
  // monster.email as email;
  const { name, email, id } = props.monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&set2&size=180x180`}
      />
      <h1 key={id}>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
export default Card;
