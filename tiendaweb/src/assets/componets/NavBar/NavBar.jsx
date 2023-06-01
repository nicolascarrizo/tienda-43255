import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda KoinoYokan</h1>

        <nav>
            <ul>
                <li>Buzos</li>
                <li>Remeras</li>
                <li>Jeans</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar

