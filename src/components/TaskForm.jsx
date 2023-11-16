/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TaskForm({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, terminada: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Que querés agregar a tu lista?</h3>

      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          placeholder="Tareas..."
          id="fullWidth"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          InputProps={{
            sx: {
              backgroundColor: "rgba(255, 114, 0, .9)",

              borderRadius: "8px",
              color: "rgba(50,50,50, 1)",
              fontSize: "1.8rem",
              height: "45px",
            },
          }}
        />
      </Box>
    </form>
  );
}
