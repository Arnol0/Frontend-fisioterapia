export default function ResumenCardAdmin({

    titulo,
    valor,
    descripcion,
    icono,
    color

}) {

    return (

        <div className="group bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">

                        {titulo}

                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-800">

                        {valor}

                    </h2>

                    <p className="mt-3 text-sm text-slate-500">

                        {descripcion}

                    </p>

                </div>

                <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ${color} group-hover:scale-110 transition`}
                >

                    {icono}

                </div>

            </div>

        </div>

    );

}