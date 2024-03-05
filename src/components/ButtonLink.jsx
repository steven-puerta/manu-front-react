import {Link} from "react-router-dom"



function ButtonLink({children,destino}) {
  return (
    <Link to={destino}>
        <button className="button">{children}</button>
    </Link>
  )
}

export default ButtonLink