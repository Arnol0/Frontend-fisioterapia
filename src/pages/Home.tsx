import { FaHeartbeat, FaChartLine, FaClipboardCheck, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-white">
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-8">
          <h1 className="text-3xl font-bold text-blue-600">
            PhysioTrack
          </h1>
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600">
              Inicio
            </a>
            <a href="#" className="hover:text-blue-600">
              Servicios
            </a>
            <a href="#" className="hover:text-blue-600">
              Beneficios
            </a>
            <a href="#" className="hover:text-blue-600">
              Contacto
            </a>
          </nav>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl">
            <Link to="/login">
              Iniciar sesión
            </Link>
          </button>
        </div>
      </header>
      <section className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-8">
          <div>
            <h2 className="text-5xl font-bold leading-tight text-gray-800">
              Recupera tu movilidad
              <br />
              con ayuda profesional.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              Plataforma web que conecta pacientes y fisioterapeutas
              para realizar el seguimiento de rutinas terapéuticas,
              registrar el dolor y monitorear el progreso clínico.
            </p>
            <div className="mt-10 flex gap-5">
              <Link to="/login">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl">
                  Comenzar
                </button>
              </Link>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl">
                Saber más
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              alt="Fisioterapia"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-bold">
            Todo lo que necesitas
          </h2>
          <p className="text-center text-gray-600 mt-5">
            Herramientas diseñadas para mejorar la recuperación del paciente.
          </p>
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
              <FaClipboardCheck className="text-5xl text-blue-600 mb-6" />
              <h3 className="text-xl font-bold">
                Rutinas
              </h3>
              <p className="text-gray-600 mt-3">
                Ejercicios personalizados para cada tratamiento.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
              <FaHeartbeat className="text-5xl text-red-500 mb-6" />
              <h3 className="text-xl font-bold">
                Registro del dolor
              </h3>
              <p className="text-gray-600 mt-3">
                Evaluación mediante Escala EVA.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
              <FaChartLine className="text-5xl text-green-500 mb-6" />
              <h3 className="text-xl font-bold">
                Progreso
              </h3>
              <p className="text-gray-600 mt-3">
                Visualización del avance terapéutico.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
              <FaBell className="text-5xl text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold">
                Recordatorios
              </h3>
              <p className="text-gray-600 mt-3">
                Notificaciones para cumplir tus rutinas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-4 gap-10 mt-16">
            <div>
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="mt-6 font-semibold">
                Regístrate
              </h3>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="mt-6 font-semibold">
                Recibe tu rutina
              </h3>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="mt-6 font-semibold">
                Registra tu avance
              </h3>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                4
              </div>
              <h3 className="mt-6 font-semibold">
                Consulta tu progreso
              </h3>
            </div>
          </div>
        </div>
      </section>
    
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
          <div>
            <h2 className="text-white text-2xl font-bold">
              PhysioTrack
            </h2>
            <p className="mt-2">
              Portal de Fisioterapia y Rehabilitación.
            </p>
          </div>
          <div>
            © 2026 Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
