import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { toast } from "sonner";

export default function Login() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {

        try {

            const usuario = await loginUser(data);
            console.log(usuario);
            // Guardar token
            localStorage.setItem("token", usuario.token);

            localStorage.setItem(
                "usuario",
                JSON.stringify(usuario)
            );

            toast.success(`Bienvenido ${usuario.nombre}`, {
            description: "Inicio de sesión exitoso en PhysioTrack."
            });

            
            if (usuario.rol === "admin") {
                navigate("/administrador");
            } else {
                navigate("/dashboard");
            }

        } catch (error) {

            toast.error("Error al iniciar sesión", {
            description:
                error.response?.data?.mensaje ||
                "Correo o contraseña incorrectos."
            });

        }

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

                        <label>Correo</label>

                        <input
                            type="email"
                            {...register("correo", {
                                required: "Ingrese su correo"
                            })}
                            className="w-full mt-2 border rounded-lg p-3"
                        />

                        <p className="text-red-500 text-sm">
                            {errors.correo?.message}
                        </p>

                    </div>

                    <div>

                        <label>Contraseña</label>

                        <input
                            type="password"
                            {...register("password", {
                                required: "Ingrese su contraseña"
                            })}
                            className="w-full mt-2 border rounded-lg p-3"
                        />

                        <p className="text-red-500 text-sm">
                            {errors.password?.message}
                        </p>

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                        Ingresar
                    </button>

                    <p className="text-center mt-6">

                        ¿No tienes una cuenta?

                        <Link
                            to="/register"
                            className="text-blue-600 ml-2 font-semibold"
                        >
                            Regístrate
                        </Link>

                    </p>

                </form>

            </div>
        </div>
    );
}