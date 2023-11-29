import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ name, details, id, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(details);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedContent);
    setIsEditing(false);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      {isEditing ? (
        <input
          style={{ width: "80%" }}
          type="text"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <p>{details}</p>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
        )}
        <button className="delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
