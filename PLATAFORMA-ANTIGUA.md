# Datos y funciones recuperados de la plataforma antigua

Fuente: https://emprendecopilotv2.netlify.app/ · Revisada el 14 de octubre de 2026.

La plataforma pública es una aplicación estática. Sus registros privados viven en el navegador donde fueron creados, bajo `localStorage.ec2`. No se pueden recuperar desde el servidor público ni trasladar automáticamente entre dominios.

| Módulo | Información recuperada |
| --- | --- |
| Inicio | Nombre del negocio, rubro, dos recomendaciones por rubro, botón de primer pedido, pedidos por entregar, recordatorios pendientes hasta hoy y balance de ingresos menos gastos. |
| Pedidos | Cliente, celular opcional, detalle y monto. Estados Pendiente, En proceso y Entregado; filtro, cambio cíclico de estado, eliminación. Clientes agrupados por nombre con celular, número de pedidos e importe total. |
| Costos | Insumos, otros costos, porcentaje y unidades. Precio = (insumos + otros) / unidades × (1 + porcentaje / 100). El “margen” original es en realidad un recargo sobre costo. |
| Finanzas | Ingreso/Gasto, monto, concepto, categorías sugeridas. Ingresos = pedidos entregados + ingresos manuales; gastos = movimientos de gasto; balance = ingresos − gastos. El ingreso automático se deriva de los pedidos, no se duplica al cambiar de pestaña. |
| Recordatorios | Texto, Pago/Entrega/Cita y fecha; orden por fecha, completar/reabrir, eliminar y señalar vencidos. WhatsApp es una función futura sin integración. |

Rubros conservados: Estética, Decoración, Repostería, Ropa nueva, Second hand y Otro. Sus ejemplos, categorías y consejos exactos están incluidos en `dist/core.mjs`.

Formato original:

```json
{"rubro":"Repostería","neg":"Mi negocio","p":[{"c":"Cliente","d":"Pedido","t":"Celular","m":35,"e":0}],"r":[{"t":"Cobrar seña","k":"💰","f":"2026-10-14","ok":false}],"m":[{"t":"Gasto","v":20,"c":"Insumos"}]}
```

La nueva plataforma acepta este formato desde Mi negocio y respaldo → Importar. Mantiene las fechas originales; los registros que no tenían fecha siguen identificados como Sin fecha. Se puede combinar o reemplazar después de descargar un respaldo previo.

Para exportar desde la versión antigua, las instrucciones y el script de descarga local se encuentran en Mi negocio y respaldo. No se ha extraído información privada del navegador del usuario.
