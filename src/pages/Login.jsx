import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            <div className="bg-white p-10 rounded-xl shadow-xl w-[420px]">
                <h1 className="text-3xl font-bold text-center text-blue-600">
                    Iniciar Sesión
                </h1>
                <p className="text-center text-gray-500 mt-2">
                    Portal de Fisioterapia
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label>
                            Correo
                        </label>
                        <input
                            type="email"
                            {...register("correo", {
                                required: "Ingrese su correo"
                            })}
                            className="w-full mt-2 border rounded-lg p-3"
                        />
                        <p className="text-red-500">
                            {errors.correo?.message}
                        </p>
                    </div>
                    <div>
                        <label>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            {...register("password", {

                                required: "Ingrese su contraseña"
                            })}
                            className="w-full mt-2 border rounded-lg p-3"
                        />
                        <p className="text-red-500">
                            {errors.password?.message}
                        </p>
                    </div>
                    <button
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                        Ingresar
                    </button>
                    <p className="text-center mt-6">
                        ¿No tienes una cuenta?
                        <Link
                            to="/register"
                            className="text-blue-600 ml-2 font-semibold">
                            Regístrate
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}