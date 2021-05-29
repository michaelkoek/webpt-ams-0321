import './Tile.css';

function Tile({ name = 'person', age = 0 }) {
    const newAge = age + 1;
    return (
        <div className="container">
            Hey {name} {newAge}
        </div>
    )
}

export default Tile;
