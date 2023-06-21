import { NavLink } from "react-router-dom"

const OneService = () => {

  return (
    <div className="">
        <p>Dr. Lorenz</p>
        <ul className="">
            <NavLink to='/service'>services</NavLink>
            <NavLink to='/price'>prices</NavLink>
        </ul>
        <NavLink to='/payment'>go to pay</NavLink>
    </div> 
  )
}

export default OneService