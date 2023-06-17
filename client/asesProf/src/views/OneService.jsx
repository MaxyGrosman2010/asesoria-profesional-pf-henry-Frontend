import { Link } from "react-router-dom"

const OneService = () => {

  return (
    <div>
        <p>Dr. Lorenz</p>
        <ul>
            <li>services</li>
            <li>prices</li>
        </ul>
        <Link to='/payment'>go to pay</Link>
    </div>
  )
}

export default OneService