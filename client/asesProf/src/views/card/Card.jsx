

const Card = ({user}) => {

  return (
    <div>
        <span className="material-symbols-outlined">account_circle</span>
        <p>{user.name}</p>
        <p>{user.price}</p>
        <p>{user.description}</p>
    </div>
  )
}

export default Card