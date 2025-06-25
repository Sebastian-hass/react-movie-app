# 🎬 React Movie App

Una aplicación web construida con **React** que permite a los usuarios explorar una lista de películas y marcarlas como favoritas. Usa React Context para manejar el estado global y estilos personalizados con CSS.

---

## 🧩 Funcionalidades

- ✅ Ver pósters, títulos y fechas de estreno de películas
- ❤️ Marcar y desmarcar películas como favoritas
- 🧠 Uso de Context API para manejar favoritos globalmente
- 🎨 Estilos propios definidos en `MovieCard.css`

---

## 🔧 Tecnologías utilizadas

- React
- React Context API
- CSS
- Vite

---

## 🚀 Instalación y ejecución local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Sebastian-hass/react-movie-app.git
   cd react-movie-app
2. Instala las dependencias:
    npm install
3. Inicia el entorno de desarrollo:
    npm run dev
4. Abre tu navegador en:
    http://localhost:5173
## 📁 Estructura del proyecto
    react-movie-app/
    ├── components/
    │   └── MovieCard.jsx
    ├── contexts/
    │   └── MovieContext.jsx
    ├── css/
    │   └── MovieCard.css
    ├── App.jsx
    ├── main.jsx
    └── ...
## 🧠 Lógica de favoritos
Los favoritos se manejan en MovieContext.jsx mediante un context provider personalizado.

Se pueden agregar o quitar películas usando addToFavorites y removeFromFavorites.

El estado isFavorite(id) determina si una película ya está en la lista.

## 📄 Licencia
MIT

## Desarrollado por @Sebastian-hass 🚀