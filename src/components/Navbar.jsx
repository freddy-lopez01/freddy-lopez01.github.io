import './Navbar.css';
import { Link } from 'react-router-dom'; // If you're using routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//import { faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  const menuItems = ['About Me', 'Projects', 'Socials', 'Professional'];
  const menuIcons = [
    { name: 'Instagram', icon: faInstagram},
    { name: 'GitHub', icon: faGithub},
    { name: 'LinkedIn', icon: faLinkedin}
  ];

  return (
    <>
      <div className="Navbar">
        <div className="Navbar-container">
          <h1 className="logo">Freddy Lopez</h1>
          <div className="nav-opt">
            <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to={`/${item.toLowerCase()}`} className="nav-links">
                  {item}
                </Link>
              </li>
            ))}
            </ul>
          </div>
          <div className="nav-icons">
          {menuIcons.map((menuIcons, index) => (
            <Link key={index} to={menuIcons.link} className="nav-icon-link">
              <FontAwesomeIcon icon={menuIcons.icon} />
            </Link>
          ))}
          </div>
        </div>
      </div>
    </>
    );
}

export default NavBar;
