/* eslint-disable react/prop-types */

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Ponete las pilas y agrega tareas a tu lista!</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Increible, completaste tu lista!"
          : ` Tenés ${numItems} items en tu lista, y hasta ahora completaste ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
