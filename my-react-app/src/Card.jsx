import myLogo from "./assets/CE2.jpg"

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={myLogo} alt="logo" />
            <h2>Creative Elixir</h2>
            <p>We make websites and logo designs</p>
        </div>
    );
}

export default Card