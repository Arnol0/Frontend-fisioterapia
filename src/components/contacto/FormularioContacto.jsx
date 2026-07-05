import { useForm } from "react-hook-form";
import {
    FaPaperPlane
} from "react-icons/fa";

export default function FormularioContacto() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {

        console.log(data);

        alert("Mensaje enviado correctamente.");

    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-8">
                <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 p-10">
                    <div className="text-center">
                        <span className="text-blue-600 uppercase tracking-widest font-semibold">
                            Escríbenos
                        </span>
                        <h2 className="mt-4 text-4xl font-bold text-slate-800">
                            Envíanos un mensaje
                        </h2>
                        <p className="mt-5 text-slate-600">
                            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-12 space-y-8"
                    >

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="font-medium">
                                    Nombre completo
                                </label>

                                <input
                                    type="text"
                                    {...register("nombre", {
                                        required: "Ingrese su nombre"
                                    })}
                                    className="w-full mt-2 border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                />

                                <p className="text-red-500 text-sm mt-2">
                                    {errors.nombre?.message}
                                </p>
                            </div>

                            <div>
                                <label className="font-medium">
                                    Correo electrónico
                                </label>

                                <input
                                    type="email"
                                    {...register("correo", {
                                        required: "Ingrese su correo"
                                    })}
                                    className="w-full mt-2 border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                />

                                <p className="text-red-500 text-sm mt-2">
                                    {errors.correo?.message}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="font-medium">
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    {...register("telefono")}
                                    className="w-full mt-2 border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="font-medium">
                                    Asunto
                                </label>

                                <input
                                    type="text"
                                    {...register("asunto", {
                                        required: "Ingrese un asunto"
                                    })}
                                    className="w-full mt-2 border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                />

                                <p className="text-red-500 text-sm mt-2">
                                    {errors.asunto?.message}
                                </p>
                            </div>
                        </div>

                        <div>
                            <label className="font-medium">
                                Mensaje
                            </label>

                            <textarea
                                rows="6"
                                {...register("mensaje", {
                                    required: "Escriba un mensaje"
                                })}
                                className="w-full mt-2 border border-slate-300 rounded-xl p-4 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                            ></textarea>

                            <p className="text-red-500 text-sm mt-2">
                                {errors.mensaje?.message}
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3"
                        >
                            <FaPaperPlane />
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}