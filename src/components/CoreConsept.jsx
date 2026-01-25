export default function CoreConsept({title, image, description}) {
    return(
    <li>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
    </li>
    )
}
