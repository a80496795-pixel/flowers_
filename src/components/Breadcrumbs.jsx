import { Link, useParams } from "react-router-dom";

export default function Breadcrumbs() {
  const { category, id } = useParams();

  return (
    <nav className="breadcrumbs">
      <Link to="/categories">Категории</Link>

      {category && (
        <>
          <span> › </span>
          <Link to={`/flowers/${category}`}>{category}</Link>
        </>
      )}

      {id && (
        <>
          <span> › </span>
          <span>Цветок</span>
        </>
      )}
    </nav>
  );
}
