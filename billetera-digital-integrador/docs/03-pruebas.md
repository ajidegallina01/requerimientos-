# Plan de pruebas (resultados esperados, aún sin ejecución formal)

| Código | Escenario | Resultado esperado |
|---|---|---|
| P01 | Acceso válido / inválido | Acceso con demo válida; mensaje de error si inválida |
| P02 | Consultar inicio | Saldo mostrado coincide con saldo almacenado en la demo |
| P03 | Destinatario propio o inexistente | Rechazo y ningún movimiento |
| P04 | Importe `0`, `-5`, `99999`, `abc` o 3 decimales | Rechazo y ningún movimiento |
| P05 | Seleccionar destinatario y monto válido | Resumen antes de modificar saldo |
| P06 | Cancelar desde resumen | Ningún movimiento registrado |
| P07 | Confirmar S/10 con fondos suficientes | Débito emisor S/10 y crédito receptor S/10 |
| P08 | Consultar constancia | ID, monto, destinatario y fecha correctos |
| P09 | 5 usuarios de poca experiencia digital | Al menos 4 completan el envío de S/10 en 90 s; pendiente reclutamiento |
| P10 | Medir transiciones con dispositivo acordado | Falta umbral RNF02 por completar; pendiente |
| P11 | Reintentar mismo ID de solicitud 10 veces | Solo un débito y una operación |
| P12 | Cerrar sesión y volver a las pantallas | No mostrar operación hasta nuevo login |

**Precaución:** `localStorage` es editable desde el navegador. Estas pruebas no validan seguridad bancaria; solo el comportamiento educativo del prototipo.
