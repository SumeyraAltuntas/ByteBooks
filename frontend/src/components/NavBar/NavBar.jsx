import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/frontend">Frontend</Link></li>
        <li><Link to="/backend">Backend</Link></li>
        <li><Link to="/cybersecurity">Cyberscurity</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar