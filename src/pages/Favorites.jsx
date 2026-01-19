import { useEffect, useState } from "react";
import { getFlowers } from "../api/flowersApi";
import { getStored } from "../utils/storage";


export default function Favorites() {
const [flowers, setFlowers] = useState([]);


useEffect(() => {
getFlowers().then(data => {
const favs = getStored("favorites");
setFlowers(data.filter(f => favs[f.id]));
});
}, []);


return (
<div className="habitat-page">
<h1 className="habitat-title">💖 Избранные цветы</h1>


<div className="habitat-grid">
{flowers.map(f => (
<div className="flower-card" key={f.id}>
<img src={f.image} alt={f.name} />
<div className="flower-body">
<h3>{f.name}</h3>
<p>{f.habitat}</p>
</div>
</div>
))}
</div>
</div>
);
}