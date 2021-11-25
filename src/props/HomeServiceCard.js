

export default function HomeServiceCard(props) {
    return (
        <div className="card">
        <img src={props.img} alt={props.img} />
        <h2>{props.title}</h2>
        <p>{props.des}</p>
        <a href={props.link}><button>Book This</button></a>
                        </div>
    )
}
