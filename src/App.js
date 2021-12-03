import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/seguridad/Login";
import RegistrarUsuario from "./components/seguridad/RegistrarUsuario";
import PerfilUsuario from "./components/seguridad/PerfilUsuario";
import RegistrarCatPerfiles from "./components/CatPerfiles/RegistrarCatPerfiles";
import RegistrarTipoMuestra from "./components/CatTipoMuestras/RegistrarTipoMuestra";
import RegistrarCatTipoOrden from "./components/CatTipoOrden/RegistrarCatTipoOrden";
import RegistrarSexo from "./components/Sexos/RegistrarSexo";
import TablaPais from "./components/catPais/TablaPais";
import TablaSexo from "./components/catSexo/TablaSexo";
import TablaDepartamento from "./components/catDepartamento/TablaDepartamento";
import TablaPaciente from "./components/catPaciente/TablaPaciente";
import TablaMedico from "./components/catMedico/TablaMedico";

function App() {
  return (
    <Router>
      <Header></Header>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/edificio-del-hospital.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">NetLis</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          <br />
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Gestión seguridad
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/seguridad_login"><i className="far fa-circle nav-icon" />
                    <p>Login</p></Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/seguridad_registrar"><i className="far fa-circle nav-icon" />
                    <p>Registrar usuario</p></Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/seguridad_perfil"><i className="far fa-circle nav-icon" />
                    <p>Perfil usuario</p></Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Gestión paciente
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/table_paciente"><i className="far fa-circle nav-icon" />
                    <p>Paciente</p></Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Gestión médico
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/table_medico"><i className="far fa-circle nav-icon" />
                    <p>Médico</p></Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Gestión catálogos
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/create_perfiles"><i className="far fa-circle nav-icon" />
                    <p>Catálogo de Perfiles</p></Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/create_tipo_muestra"><i className="far fa-circle nav-icon" />
                    <p>Catálogo de Tipo Muestra</p></Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/create_tipo_orden"><i className="far fa-circle nav-icon" />
                    <p>Catálogo de Tipo Orden</p></Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/table_pais"><i className="far fa-circle nav-icon" />
                    <p>Catálogo de Paises</p></Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/table_sexo"><i className="far fa-circle nav-icon" />
                    <p>Catálogo de Sexos</p></Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className="nav-link" to="/table_departamento"><i className="far fa-circle nav-icon" />
                    <p>Catálogo de Departamentos</p></Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
      <Routes>
        <Route path="/seguridad_login" element={<Login />} />
        <Route path="/seguridad_registrar" element={<RegistrarUsuario />} />
        <Route path="/seguridad_perfil" element={<PerfilUsuario />} />
        <Route path="/contacto" element={<RegistrarUsuario />} />
        <Route path="/create_perfiles" element={<RegistrarCatPerfiles />} />
        <Route path="/create_tipo_muestra" element={<RegistrarTipoMuestra />} />
        <Route path="/create_tipo_orden" element={<RegistrarCatTipoOrden />} />
        <Route path="/create_sexo" element={<RegistrarSexo />} />
        <Route path="/table_pais" element={<TablaPais />} />
        <Route path="/table_sexo" element={<TablaSexo />} />
        <Route path="/table_departamento" element={<TablaDepartamento />} />
        <Route path="/table_paciente" element={<TablaPaciente />} />
        <Route path="/table_medico" element={<TablaMedico/>} />
      </Routes>
    </Router>
  );
}

export default App;
