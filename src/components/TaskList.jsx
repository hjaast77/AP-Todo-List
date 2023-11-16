/* eslint-disable react/prop-types */

import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import TaskItem from "./TaskItem";
export default function TaskList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      {!sortedItems.length ? (
        ""
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <TaskItem
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
      )}

      {!sortedItems.length ? (
        ""
      ) : (
        <div className="actions">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Age"
            onChange={(e) => setSortBy(e.target.value)}
            sx={{
              fontSize: "12px",
              color: "#fcb85f",
              fontWeight: "bold",
              background: "blue",
              backgroundColor: "black",
            }}
          >
            <MenuItem value="input" sx={{ fontSize: "12px" }}>
              Ordenar por llegada
            </MenuItem>
            <MenuItem value="description" sx={{ fontSize: "12px" }}>
              Orden alfabético
            </MenuItem>
            <MenuItem value="packed" sx={{ fontSize: "12px" }}>
              Orden por estado
            </MenuItem>
          </Select>
          <Button variant="contained" onClick={onClearList}>
            Limpiar
          </Button>
        </div>
      )}
    </div>
  );
}
