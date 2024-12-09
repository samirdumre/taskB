function Card({ title, details, onDelete }) {
  return (
    <div className="item">
      <div className="todo-title">{title}</div>
      <div className="details">{details}</div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Card;
