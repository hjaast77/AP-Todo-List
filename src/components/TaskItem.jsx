/* eslint-disable react/prop-types */
import Checkbox from "@mui/material/Checkbox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function TaskItem({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <Checkbox
        checked={item.terminada}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.terminada ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        style={{ padding: "0.2rem" }}
      >
        <DeleteForeverIcon
          style={{
            fontSize: "24px",
            color: "#C30000",
          }}
        >
          a
        </DeleteForeverIcon>
      </button>
    </li>
  );
}
