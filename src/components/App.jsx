import { useState, useEffect } from "react";

import Logo from "./Logo";
import Form from "./TaskForm";
import TaskList from "./TaskList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Cargar datos desde localStorage al cargar la aplicación
    try {
      const storedItems = JSON.parse(localStorage.getItem("items")) || [];
      setItems((prevItems) => {
        // Solo actualizar si localStorage tiene datos
        return storedItems.length > 0 ? storedItems : prevItems;
      });
    } catch (error) {
      console.error("Error al cargar desde localStorage:", error);
    }
  }, []); // Solo se ejecuta al montar el componente

  useEffect(() => {
    // Guardar el array de tareas en el localStorage cada vez que cambie
    try {
      localStorage.setItem("items", JSON.stringify(items));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  }, [items]);

  function handleAddItems(item) {
    // Actualizar el estado y agregar el nuevo elemento
    setItems((items) => {
      const newItems = [...items, item];

      return newItems;
    });
  }

  function handleDeleteItem(id) {
    // Actualizar el estado y filtrar los elementos
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    // Actualizar el estado y cambiar el estado a "completada"
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Estás seguro de querer borrar toda la lista?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <TaskList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
