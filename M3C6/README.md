# Sabor & Café - Sitio Web de Café de Especialidad

## 📋 Descripción

**Sabor & Café** es un sitio web elegante y moderno para una cafetería de especialidad con tres sucursales en Santiago, Chile. La página ofrece una experiencia completa que incluye visualización de menú, información de servicios, opiniones de clientes, reservas y contacto con las sucursales.

## 🎨 Características Principales

### 1. **Header Navegación**
- Logo y nombre de la cafetería (Sabor & Café)
- Navegación clara con enlaces a: Carta, Servicios, Opiniones y Reservar
- Botón "Reservar" destacado en color marrón oscuro

### 2. **Sección Hero**
- Imagen de fondo inspiradora con overlay oscuro
- Título: "Elegancia que se disfruta"
- Subtítulo: "Una experiencia para tus sentidos"
- Botón de llamada a la acción para reservar

### 3. **Nuestra Carta**
- 6 productos principales con imágenes
- Descripción y precios de cada producto
- Botón "Descargar menú" (link a Google Drive)

### 4. **Nuestros Servicios**
- Sección con video de fondo
- 3 servicios principales con iconos:
  - ☕ Café de Especialidad
  - 🏢 Ambiente Premium
  - 🚚 Delivery
- Tarjetas pequeñas y elegantes

### 5. **Nuestros Favoritos**
- 3 productos favoritos destacados
- Con iconos representativos
- Título en formato de botón

### 6. **Opiniones de Clientes**
- Slider interactivo con testimonios
- Controles de navegación (botones ◀ ▶)
- Puntos indicadores (dots) para cambiar entre opiniones
- Auto-play cada 5 segundos
- Sección "Agregar opinión" con formulario

### 7. **Nuestras Sucursales**
- 3 tarjetas con información de sucursales:
  - Portal Lyon - Av. Nueva Providencia 2214
  - Las Condes - Av. Apoquindo 3000
  - La Dehesa - Av. La Dehesa 1445
- Mapas embebidos de Google Maps para cada sucursal

### 8. **Sistema de Reservas**
- Formulario completo con campos:
  - Día de la semana
  - Sucursal preferida
  - Horario
  - Selección múltiple de productos
  - Nombre completo
  - Correo o teléfono
- Resumen de reservas en tiempo real
- Almacenamiento en localStorage
- Envío automático por email o WhatsApp

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive y elegante
- **JavaScript (Vanilla)**: Interactividad (slider, reservas, almacenamiento)
- **Google Fonts**: Tipografía (Lato, Playfair Display)
- **Google Maps**: Ubicaciones de sucursales
- **Cloudinary**: Almacenamiento de imágenes
- **localStorage**: Persistencia de datos

## 📁 Estructura de Archivos

```
M3C6/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interactividad
├── README.md           # Este archivo
└── assets/
    ├── images/         # Carpeta de imágenes
    │   └── Sin título (1080 x 1080 px)/
    └── video/          # Carpeta de videos
        └── Diseño sin título/
```

## 🎯 Secciones de la Página

### Header
- Logo responsivo
- Nombre de la marca
- Navegación principal
- Botón de reserva destacado

### Hero Section
- Imagen de fondo (café)
- Gradiente oscuro para legibilidad
- Título y subtítulo elegantes
- CTA (Call To Action) principal

### Cartas/Productos
- Grid responsivo (3 columnas)
- Imágenes de productos
- Precios y descripciones
- Botón para descargar menú completo

### Servicios
- Video de fondo sin filtros
- Tarjetas más compactas
- Iconos grandes representativos
- Botón de título en formato elegante

### Slider de Opiniones
- Transiciones suaves
- Navegación manual (botones)
- Navegación por puntos (dots)
- Auto-play automático
- Formulario para agregar opiniones

### Reservas
- Validación de formulario
- Almacenamiento local de datos
- Envío inteligente (email o WhatsApp)
- Resumen visual de reservas

## 🎨 Paleta de Colores

- **Marrón Oscuro**: #3e2723 (primario)
- **Marrón Claro**: #5d4037 (hover)
- **Blanco**: #ffffff
- **Gris Claro**: #fefefe (fondo)
- **Gris Oscuro**: #2c2c2c (servicios)
- **Rojo Destacado**: #d32f2f (enlaces activos)

## 📱 Responsividad

- Diseño mobile-first
- Breakpoints para tablets y escritorio
- Grid adaptable
- Imágenes escalables
- Formularios optimizados para táctil

## 🚀 Funcionalidades JavaScript

### 1. Slider de Opiniones
- Cambio automático cada 5 segundos
- Controles manuales (botones anterior/siguiente)
- Navegación por puntos
- Reinicio de auto-play al interactuar

### 2. Sistema de Reservas
- Agregar múltiples reservas
- Almacenamiento en localStorage
- Eliminación individual de reservas
- Limpieza completa de datos
- Envío por email o WhatsApp

### 3. Validación
- Campos obligatorios
- Alertas de usuario
- Confirmación antes de eliminar

## 📞 Información de Contacto

**Sabor & Café**

**Sucursales:**
- Portal Lyon: Av. Nueva Providencia 2214
- Las Condes: Av. Apoquindo 3000
- La Dehesa: Av. La Dehesa 1445

## 💾 Almacenamiento Local

Las reservas se guardan automáticamente en `localStorage` bajo la clave `'reservations'` como un array JSON. Los datos persisten entre sesiones.

## 🔧 Cómo Usar

1. **Navegar por la página**: Usa el menú principal para ir a diferentes secciones
2. **Ver menú**: Descarga el menú completo desde Google Drive
3. **Ver opiniones**: Navega el slider de opiniones con botones o puntos
4. **Hacer reserva**: 
   - Completa el formulario con tus datos
   - Agrega productos a la reserva
   - Revisa el resumen
   - Envía por email o WhatsApp
5. **Ver sucursales**: Consulta los mapas para ubicar la sucursal más cercana

## 📝 Notas de Desarrollo

- El sitio está completamente optimizado para SEO
- Todas las imágenes están en Cloudinary para mejor rendimiento
- El código JavaScript está bien estructurado y comentado
- CSS está organizado por secciones
- Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge)

## 🎯 Futuras Mejoras Posibles

- Sistema de carrito de compras integrado
- Pasarela de pagos
- Panel de administración para gestionar reservas
- Integraciones con sistemas de calendario
- Notificaciones push
- Chat en vivo
- Programa de fidelización

---

**Creado**: 22 de enero de 2026  
**Sitio**: Sabor & Café - Café de Especialidad  
**Ubicación**: Santiago, Chile
