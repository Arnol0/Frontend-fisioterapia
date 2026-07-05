import {
    FaDownload,
    FaFilePdf
} from "react-icons/fa";

export default function DescargarReporte() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-xl p-8 text-white">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="text-2xl font-bold">
                        Exportar historial clínico
                    </h2>
                    <p className="text-blue-100 mt-2">
                        Descarga un reporte completo de tu tratamiento en formato PDF para compartirlo con tu fisioterapeuta o conservar un registro personal.
                    </p>
                </div>

                <button
                    className="bg-white text-blue-700 hover:bg-slate-100 transition px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg"
                >
                    <FaFilePdf />
                    Descargar PDF
                    <FaDownload />
                </button>
            </div>
        </div>
    );
}