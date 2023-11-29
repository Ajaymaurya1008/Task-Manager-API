import { useEffect, useState } from "react";
import Card from "./Card";
import "./Add-Task.css";
import axios from "axios";

const Add_task = () => {
  const [cards, setCards] = useState([]);
  const [reload, setReload] = useState(false);
  const [newCard, setNewCard] = useState({
    name: "",
    completed: false,
    details: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/tasks/")
      .then((res) => {
        console.log(res.data.data);
        setCards(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);
  const handleAddCard = async () => {
    console.log(newCard);
    const response = await axios.post(
      "http://localhost:3000/api/v1/tasks/",
      newCard
    );
    setNewCard({  name: "", completed: false, details: "" });
    console.log(response.data);
    setReload(prev => !prev);
  };

  const handleEditCard = async (id, newDetails) => {
    const response = await axios.patch(`http://localhost:3000/api/v1/tasks/${id}`, { details: newDetails})
    console.log(response.data)
    setReload(prev => !prev);
  };

  const handleDeleteCard = async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/v1/tasks/${id}`)
    console.log(response.data)
    setReload(prev => !prev);
  };

  return (
    <div>
      <h1>Create Tasks</h1>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <input
          style={{width: "30%"}}
          type="text"
          placeholder="Enter Task Name"
          value={newCard.name}
          onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
        />
        <input
          style={{width: "30%"}}
          type="text"
          placeholder="Enter additional Instructions"
          value={newCard.details}
          onChange={(e) => setNewCard({ ...newCard, details: e.target.value })}
        />
        <button onClick={handleAddCard}>Add Task</button>
      </div>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card._id}
            name={card.name}
            details={card.details}
            onEdit={handleEditCard}
            onDelete={handleDeleteCard}
            id = {card._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Add_task;
