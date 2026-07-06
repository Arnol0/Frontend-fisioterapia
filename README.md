# 🩺 PhysioTrack - Frontend

Frontend de **PhysioTrack**, una plataforma web diseñada para optimizar el seguimiento de tratamientos de fisioterapia, facilitando la comunicación entre pacientes y fisioterapeutas mediante una interfaz moderna, intuitiva y responsiva.

---

## 📌 Descripción

PhysioTrack permite a los pacientes visualizar sus rutinas de ejercicios, registrar el nivel de dolor, consultar su progreso terapéutico y administrar sus citas desde una única plataforma.

Este repositorio corresponde únicamente al **Frontend** desarrollado con **React**.

---

## 🚀 Tecnologías utilizadas

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- React Hook Form
- Axios
- React Icons
- Sonner (Notificaciones)
- JWT Authentication

---

## 📂 Estructura del proyecto

```
src/
│
├── assets/
├── components/
│   ├── common/
│   ├── home/
│   ├── servicios/
│   ├── beneficios/
│   ├── contacto/
│   └── dashboard/
│
├── context/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── utils/
└── main.jsx
```

---

# ✨ Características

- Landing Page moderna
- Inicio de sesión
- Registro de pacientes
- Dashboard del paciente
- Gestión de rutinas
- Calendario de sesiones
- Historial terapéutico
- Arquitectura basada en componentes reutilizables
- Diseño Responsive
- Integración con API REST

---

# 📷 Pantallas principales

- Inicio
- Servicios
- Beneficios
- Contacto
- Login
- Registro
- Dashboard del Paciente
- Calendario
- Rutinas
- Historial Clínico

---

# 📦 Instalación

Clonar el repositorio

```bash
git clone https://github.com/usuario/Frontend-fisioterapia.git
```

Entrar al proyecto

```bash
cd Frontend-fisioterapia
```

Instalar dependencias

```bash
pnpm install
```

Ejecutar en modo desarrollo

```bash
pnpm dev
```

La aplicación estará disponible en

```
http://localhost:5173
```

---

# ⚙ Variables de entorno

Crear un archivo

```
.env
```

Agregar la dirección del backend

```env
VITE_API_URL=http://localhost:8080/api
```

En producción

```env
VITE_API_URL=https://api.physiotrack.com/api
```

---

# 🔐 Autenticación

La aplicación utiliza autenticación basada en **JSON Web Token (JWT)**.

Después del inicio de sesión:

- El backend genera un Token.
- El Token se almacena en LocalStorage.
- Axios envía automáticamente el Token en cada petición protegida.

---

# 📱 Diseño

El proyecto utiliza Tailwind CSS siguiendo un diseño moderno inspirado en plataformas SaaS como:

- Stripe
- Clerk
- Linear
- Vercel

Características del diseño:

- Responsive
- Minimalista
- Componentes reutilizables
- Colores consistentes
- Accesibilidad

---

# 🌐 Arquitectura

El frontend consume una API REST desarrollada con Spring Boot.

```
React
      │
      ▼
Axios
      │
      ▼
Spring Boot API
      │
      ▼
PostgreSQL
```

---

# 📁 Scripts disponibles

Ejecutar en desarrollo

```bash
pnpm dev
```

Compilar producción

```bash
pnpm build
```

Vista previa de producción

```bash
pnpm preview
```

---

# 👨‍💻 Equipo de desarrollo

Proyecto desarrollado como parte del curso de Arquitectura de Software.

Integrantes:

- Nicole Sharon Mendoza Choqquepura
- Arnol Ramos Chipana
- Fátima Gutierrez

---

# 📄 Licencia

Proyecto desarrollado únicamente con fines académicos.
