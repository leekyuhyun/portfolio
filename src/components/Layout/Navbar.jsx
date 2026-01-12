import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const menus = ['AboutMe', 'Activity', 'Skills', 'Projects', 'Dev Steps'];

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {menus.map((menu) => (
          <li key={menu} className="navbar-item">
            <button
              className={`navbar-link ${activeTab === menu ? 'active' : ''}`}
              onClick={() => setActiveTab(menu)}
            >
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
