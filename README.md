***REMOVED*** 🛒 Ecommerce Admin Dashboard

Panel de administración moderno para ecommerce desarrollado con **React + TypeScript**, enfocado en una UI limpia, componentes reutilizables y una arquitectura preparada para escalar y conectarse a una API real.

---

***REMOVED******REMOVED*** 🚀 Características principales

* 📦 Gestión de productos (crear, editar, eliminar)
* 🧾 Gestión de órdenes
* 📊 Dashboard con estadísticas
* 🧩 Componentes reutilizables
* 🌙 Modo oscuro
* 🎨 UI moderna con Tailwind CSS
* 🧠 Tipado estricto con TypeScript
* 🧪 Datos simulados (mock data)

---

***REMOVED******REMOVED*** 🛠️ Tecnologías utilizadas

* **React 18**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **Framer Motion** (animaciones)
* **Lucide React / Material Icons**

---

***REMOVED******REMOVED*** 📁 Estructura del proyecto

```
ecommerce-admin/
├── src/
│   ├── components/
│   │   ├── modals/          ***REMOVED*** Modales para CRUD operations
│   │   │   ├── OrderModal.tsx
│   │   │   ├── ProductModal.tsx
│   │   │   ├── CampaignModal.tsx
│   │   │   └── ReportModal.tsx
│   │   ├── dialogs/         ***REMOVED*** Diálogos de confirmación
│   │   │   └── DeleteDialog.tsx
│   │   └── ui/              ***REMOVED*** Componentes reutilizables
│   │       ├── Sidebar.tsx
│   │       ├── Header.tsx
│   │       ├── StatsCard.tsx
│   │       └── PageHeader.tsx
│   ├── pages/               ***REMOVED*** Páginas principales
│   │   ├── Dashboard.tsx
│   │   ├── Orders.tsx
│   │   ├── Products.tsx
│   │   ├── Marketing.tsx
│   │   ├── Rates.tsx
│   │   ├── Reports.tsx
│   │   └── Login.tsx
│   ├── context/             ***REMOVED*** Gestión de estado global
│   │   └── AuthContext.tsx
│   ├── hooks/               ***REMOVED*** Custom hooks
│   │   └── useAuth.ts
│   ├── types/               ***REMOVED*** TypeScript type definitions
│   │   └── index.ts
│   ├── data/                ***REMOVED*** Mock data
│   │   └── mockData.ts
│   └── utils/               ***REMOVED*** Utility functions
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

***REMOVED******REMOVED*** 🧾 Tipos principales (TypeScript)

El proyecto utiliza tipado estricto para evitar errores en tiempo de desarrollo.

Ejemplo:

* `Product`
* `Order`
* `Report`
* `Campaign`
* `Review`

Los tipos están centralizados en:

```
src/types/index.ts
```

---

***REMOVED******REMOVED*** 🧩 Componentes destacados

***REMOVED******REMOVED******REMOVED*** 🔹 ProductsTable

Tabla paginada con:

* Filtro por categoría
* Búsqueda por nombre / ID
* Acciones: ver, editar y eliminar

***REMOVED******REMOVED******REMOVED*** 🔹 OrdersTable

Listado de órdenes con estados, acciones y simulación CRUD.

***REMOVED******REMOVED******REMOVED*** 🔹 Modales

* `ProductModal`
* `OrderModal`

Reutilizables para **crear y editar** según si se pasa un elemento seleccionado.

---

***REMOVED******REMOVED*** ⚙️ Instalación y uso

***REMOVED******REMOVED******REMOVED*** 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/ecommerce-admin.git
cd ecommerce-admin
```

***REMOVED******REMOVED******REMOVED*** 2️⃣ Instalar dependencias

```bash
npm install
```

***REMOVED******REMOVED******REMOVED*** 3️⃣ Ejecutar en desarrollo

```bash
npm run dev
```

La app estará disponible en:

```
http://localhost:5173
```

---

***REMOVED******REMOVED*** 🔄 Datos simulados

Actualmente el proyecto utiliza datos mockeados para simular llamadas a API:

```
src/data/mockData.ts
```

Las funciones `handleSubmitProduct` y `handleSubmitOrder` están preparadas para conectarse fácilmente a una API real (REST o GraphQL).

---

***REMOVED******REMOVED*** 🧠 Decisiones técnicas

* Uso de `Partial<T>` para formularios (create / edit)
* Estado controlado desde las páginas principales
* Componentes desacoplados y reutilizables
* Preparado para migrar a backend real sin refactor grande

---

***REMOVED******REMOVED*** 🧪 Linting y calidad de código

* Warnings de TypeScript corregidos
* Código preparado para `strict: true`
* Buenas prácticas en tipado y props

---

***REMOVED******REMOVED*** 📌 Próximas mejoras

* 🔌 Conexión a API real (JSON Server / Backend propio)
* 🔐 Autenticación y roles
* 📤 Exportación de reportes
* 🧪 Tests con Vitest
* 🌍 Internacionalización (i18n)

---

***REMOVED******REMOVED*** 👤 Autor

**Angel Gabriel Berretta**
Desarrollador Front‑End / Full Stack en formación

* 🌐 Portfolio: [https://angelcodes.netlify.app/](https://angelcodes.netlify.app/)
* 📧 Email: [angelcursodeingles2@gmail.com](mailto:angelcursodeingles2@gmail.com)
* 📍 Argentina

---

***REMOVED******REMOVED*** 📄 Licencia

Este proyecto es de uso educativo y demostrativo. Libre para modificar y reutilizar.

---

✨ Si este proyecto te sirve como base para tu propio dashboard o portfolio, ¡adelante!
