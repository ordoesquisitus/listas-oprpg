import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-light">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold" to="/">
            Listas OPRPG
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  to="/"
                  end
                >
                  <i className="bi bi-house me-1"></i>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  to="/skills"
                >
                  <i className="fa-solid fa-hand-fist"></i>
                  Habilidades e Poderes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  to="/equipment"
                >
                  <i className="fa-solid fa-toolbox"></i> Equipamento
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  to="/other-side"
                >
                  <i className="fa-solid fa-hand-sparkles"></i> Outro Lado
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1 bg-dark">
        <div className="container py-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
