import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Servicios from "../pages/Servicios";
import Beneficios from "../pages/Beneficios"
import Contacto from "../pages/Contacto"

import PoliticaPrivacidad from "../pages/PoliticaPrivacidad";
import TerminosCondiciones from "../pages/TerminosCondiciones";

import DashboardAdministrador from "../pages/DashboardAdministrador";

import DashboardPaciente from "../pages/DashboardPaciente";
import CalendarioPaciente from "../pages/CalendarioPaciente";
import Rutina from "../pages/Rutina";
import Historial from "../pages/Historial"



export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/beneficios" element={<Beneficios />} />
                <Route path="/contacto" element={<Contacto />} />

                <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
                <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />

                <Route path="/dashboard" element={<DashboardPaciente />} />
                <Route path="/calendario" element={<CalendarioPaciente />} />
                <Route path="/rutina" element={<Rutina />} />
                <Route path="/historial" element={<Historial />} />
                <Route path="/administrador" element={<DashboardAdministrador />}/>


            </Routes>

        </BrowserRouter>

    );

}