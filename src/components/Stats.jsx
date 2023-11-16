/* eslint-disable react/prop-types */

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Ponete las pilas y agrega tareas a tu lista!</em>
      </p>
    );

  const numItems = items.length;
  const numTerminadas = items.filter((item) => item.terminada).length;
  const porcentaje = Math.round((numTerminadas / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {porcentaje === 100
          ? "Increible, completaste tu lista!"
          : ` Tenés ${numItems} items en tu lista, y hasta ahora completaste ${numTerminadas} (${porcentaje}%)`}
      </em>
    </footer>
  );
}
