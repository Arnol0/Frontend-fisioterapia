import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

const informacion = [
    {
        icono: <FaMapMarkerAlt size={28} />,
        titulo: "Dirección",
        descripcion: "Av. Javier Prado Este 6200, La Molina, Lima",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icono: <FaPhoneAlt size={28} />,
        titulo: "Teléfono",
        descripcion: "+51 999 999 999",
        color: "bg-green-100 text-green-600"
    },
    {
        icono: <FaEnvelope size={28} />,
        titulo: "Correo",
        descripcion: "contacto@physiotrack.com",
        color: "bg-red-100 text-red-500"
    },
    {
        icono: <FaClock size={28} />,
        titulo: "Horario",
        descripcion: "Lun - Vie | 8:00 AM - 6:00 PM",
        color: "bg-yellow-100 text-yellow-600"
    }
];

export default function InformacionContacto() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {informacion.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
                        >
                            <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center ${item.color}`}>
                                {item.icono}
                            </div>

                            <h3 className="mt-6 text-xl font-bold text-slate-800">
                                {item.titulo}
                            </h3>

                            <p className="mt-4 text-slate-600 leading-7">
                                {item.descripcion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}