# EmprendeCopilot

Landing responsive en español, realizada con HTML, CSS y JavaScript sin dependencias. Abre `dist/index.html` o sirve `dist` con un servidor estático.

Incluye la landing con las nueve secciones solicitadas y una plataforma funcional de prueba en `dist/platform.html`, conectadas con “Ingresar a la plataforma”. La plataforma conserva Inicio, Pedidos, Costos, Finanzas y Recordatorios de la versión antigua. Agrega edición, búsqueda, fechas de entrega, catálogo de costos, importación/exportación y un copilot de prueba basado en reglas y datos locales. No incorpora autenticación, cobros, integración con WhatsApp ni un modelo de IA externo.

Para la plataforma utiliza un servidor estático (por ejemplo Live Server en VS Code): usa módulos JavaScript, que los navegadores no cargan directamente desde `file://`. La landing puede abrirse directamente. Los datos se guardan en localStorage del navegador; un cambio de dominio, puerto o navegador necesita importar el respaldo. Nunca elimines los datos del navegador sin exportarlos.

Los rubros, campos y reglas recuperados están documentados en `PLATAFORMA-ANTIGUA.md`. La importación admite el formato `ec2` y la nueva versión 3. Los registros antiguos sin fecha se mantienen sin fecha y se incluyen en los totales; no se inventa una fecha. La fórmula original de precios es un recargo sobre costo; ahora se diferencia del margen sobre venta.

La aplicación inicia sin ventas ficticias. “Cargar ejemplos de prueba” añade registros etiquetados como ejemplo sin borrar los actuales. El testimonio de la landing es ficticio. Las fotografías ilustrativas se cargan desde Unsplash y requieren conexión.

Para modificar el diseño edita `dist/styles.css`, el contenido en `dist/index.html` y las interacciones en `dist/app.js`.
