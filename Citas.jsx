import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FiClock, FiPlus, FiUser, FiX, FiCheckCircle } from "react-icons/fi";

// ---------------------------------------------------------------------------
// Datos de ejemplo. Cuando el backend esté listo, esto se reemplaza por
// useQuery de @tanstack/react-query apuntando al endpoint de citas.
// ---------------------------------------------------------------------------
const citasIniciales = [
  {
    id: 1,
    paciente: "Mariana Rojas",
    fecha: new Date(2026, 6, 6),
    hora: "09:00",
    tipo: "Rehabilitación de rodilla",
    estado: "confirmada",
  },
  {
    id: 2,
    paciente: "Carlos Espinoza",
    fecha: new Date(2026, 6, 6),
    hora: "11:30",
    tipo: "Terapia de espalda",
    estado: "pendiente",
  },
  {
    id: 3,
    paciente: "Lucía Fernández",
    fecha: new Date(2026, 6, 8),
    hora: "16:00",
    tipo: "Evaluación inicial",
    estado: "confirmada",
  },
];

const TIPOS_TRATAMIENTO = [
  "Evaluación inicial",
  "Rehabilitación de rodilla",
  "Terapia de espalda",
  "Rehabilitación de hombro",
  "Terapia post-quirúrgica",
];

const ESTADO_ESTILOS = {
  confirmada: "bg-teal-50 text-teal-700 ring-teal-600/20",
  pendiente: "bg-amber-50 text-amber-700 ring-amber-600/20",
  completada: "bg-slate-100 text-slate-600 ring-slate-500/20",
};

// ---------------------------------------------------------------------------
// Validación del formulario de nueva cita
// ---------------------------------------------------------------------------
const citaSchema = z.object({
  paciente: z
    .string()
    .min(2, "Ingresa el nombre del paciente")
    .max(60, "El nombre es demasiado largo"),
  hora: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Usa un formato de hora válido (HH:MM)"),
  tipo: z.string().min(1, "Selecciona un tipo de tratamiento"),
});

function mismodiaEntre(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatoFechaLarga(fecha) {
  return fecha.toLocaleDateString("es-PE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function FormularioCita({ fechaSeleccionada, onGuardar, onCerrar }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(citaSchema) });

  const enviar = async (datos) => {
    onGuardar({ ...datos, fecha: fechaSeleccionada });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Nueva cita · {formatoFechaLarga(fechaSeleccionada)}
          </h3>
          <button
            onClick={onCerrar}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Cerrar"
          >
            <FiX size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit(enviar)} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Paciente
            </label>
            <input
              {...register("paciente")}
              placeholder="Nombre del paciente"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
            />
            {errors.paciente && (
              <p className="mt-1 text-xs text-red-600">{errors.paciente.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Hora
            </label>
            <input
              {...register("hora")}
              placeholder="14:30"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
            />
            {errors.hora && (
              <p className="mt-1 text-xs text-red-600">{errors.hora.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Tipo de tratamiento
            </label>
            <select
              {...register("tipo")}
              defaultValue=""
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {TIPOS_TRATAMIENTO.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.tipo && (
              <p className="mt-1 text-xs text-red-600">{errors.tipo.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onCerrar}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800 disabled:opacity-60"
            >
              Guardar cita
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Citas() {
  const [citas, setCitas] = useState(citasIniciales);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date(2026, 6, 6));
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  const citasDelDia = useMemo(
    () =>
      citas
        .filter((c) => mismodiaEntre(c.fecha, fechaSeleccionada))
        .sort((a, b) => a.hora.localeCompare(b.hora)),
    [citas, fechaSeleccionada]
  );

  const diasConCitas = useMemo(
    () => citas.map((c) => c.fecha.toDateString()),
    [citas]
  );

  const mostrarMensaje = (texto) => {
    setMensaje(texto);
    setTimeout(() => setMensaje(null), 3000);
  };

  const guardarCita = (datos) => {
    setCitas((prev) => [
      ...prev,
      { id: Date.now(), estado: "pendiente", ...datos },
    ]);
    setMostrarFormulario(false);
    mostrarMensaje("Cita guardada correctamente");
  };

  return (
    <div className="mx-auto max-w-5xl p-6">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Calendario de citas
          </h1>
          <p className="text-sm text-slate-500">
            Gestiona las sesiones agendadas con tus pacientes
          </p>
        </div>
        <button
          onClick={() => setMostrarFormulario(true)}
          className="flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800"
        >
          <FiPlus size={16} />
          Nueva cita
        </button>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[340px_1fr]">
        {/* Calendario */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <Calendar
            onChange={setFechaSeleccionada}
            value={fechaSeleccionada}
            locale="es-PE"
            tileClassName={({ date }) =>
              diasConCitas.includes(date.toDateString())
                ? "relative font-semibold text-teal-700"
                : undefined
            }
          />
        </div>

        {/* Lista de citas del día seleccionado */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-base font-semibold capitalize text-slate-800">
            {formatoFechaLarga(fechaSeleccionada)}
          </h2>

          {citasDelDia.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-400">
              No hay citas programadas para este día.
            </p>
          ) : (
            <ul className="space-y-3">
              {citasDelDia.map((cita) => (
                <li
                  key={cita.id}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                      <FiUser size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        {cita.paciente}
                      </p>
                      <p className="text-xs text-slate-500">{cita.tipo}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <FiClock size={14} />
                      {cita.hora}
                    </span>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${ESTADO_ESTILOS[cita.estado]}`}
                    >
                      {cita.estado}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {mostrarFormulario && (
        <FormularioCita
          fechaSeleccionada={fechaSeleccionada}
          onGuardar={guardarCita}
          onCerrar={() => setMostrarFormulario(false)}
        />
      )}

      {mensaje && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm text-white shadow-lg">
          <FiCheckCircle className="text-teal-400" size={16} />
          {mensaje}
        </div>
      )}
    </div>
  );
}
