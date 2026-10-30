# Actividad 01 — CCB de OmniCompra 360 (caso de clase)

**Importante:** este es el **caso ficticio del docente**, distinto de la billetera digital del equipo. Las decisiones y horas siguientes son **supuestos razonados para resolver el ejercicio**, no valores calculados o aprobados por una empresa real.

## Paso A — completar atributos de LB-2.0
Línea base suministrada: **48 requisitos**; capacidad libre del release: **120 horas**; faltan seis semanas para Navidad. Atributos faltantes **propuestos**:

| Requisito (prioridad; estado; versión) | Origen | Responsable | Criterio verificable propuesto | Release |
|---|---|---|---|---|
| REQ-POS-012 (Must; Verificado; 2.0) | Operaciones / caja | Líder POS | Pago QR confirmado en POS y transacción conciliable; prueba con QR válido e inválido | R2.0 |
| REQ-INV-008 (Must; Aprobado; 1.0) | Inventario | Líder inventario | Confirmar pedido descuenta disponibilidad y crea una reserva única; fallo no reserva | R2.0 |
| REQ-ECO-021 (Should; Implementado; 1.1) | Comercial / e-commerce | Líder e-commerce | Dos cupones incompatibles nunca se acumulan en un checkout | R2.0 |
| REQ-FID-003 (Must; Aprobado; 1.0) | Fidelización | Líder fidelización | S/ 20 elegibles suman 2 puntos; S/ 9,99 suma 0 | R2.0 |
| REQ-NF-004 (Must; Aprobado; 1.0) | Tecnología | Líder performance | En prueba con 5 000 usuarios concurrentes, el checkout cumple <3 s en el percentil acordado (propuesta: p95) | R2.0 |
| REQ-CC-002 (Could; Propuesto; 1.0) | Operaciones de tienda | Líder click & collect | Notificación emitida al quedar listo; SLA actual 24 h medido desde pedido confirmado | R2.0 (propuesto) |

**Nota:** se preservan los estados originales; completar atributos no implica que un requisito haya sido aprobado adicionalmente.

## Paso B — análisis de impacto estimado

| SC | Requerimientos | Casos de uso afectados (propuestos) | Clases afectadas (propuestas) | Pruebas afectadas | Horas | Riesgo |
|---|---|---|---|---|---:|---|
| SC-030 cupón acumulable | REQ-ECO-021 y reglas de promociones | Aplicar cupón, Finalizar compra | Cupon, Promocion, Carrito | combinaciones, exclusiones, límites y regresión de totales | 52 | Alto |
| SC-031 consentimiento para marketing | REQ-FID-003 y política de uso de datos | Afiliar fidelización, Gestionar consentimiento | Cliente, Consentimiento, MercaPunto | consentimiento explícito, revocación, registro y no-consentimiento | 44 | Alto |
| SC-032 recojo en 2 horas | REQ-CC-002, REQ-INV-008 | Reservar inventario, Preparar recojo, Notificar | Pedido, ReservaStock, Tienda | disponibilidad, tiempos de preparación, mensajes, saturación | 64 | Alto |
| SC-033 botón rojo | Nuevo requisito UI (si se aprueba) | Finalizar compra | PantallaCheckout / tema visual | accesibilidad, contraste, snapshots visuales | 6 | Bajo |

Suma de todas: **166 h**, mayor que **120 h** disponibles. Se recomienda priorizar obligación normativa y evitar acumulación de promociones sin controles.

## Paso C — acta simulada del CCB

| SC | Decisión propuesta | Justificación | Versión y estado después de decidir |
|---|---|---|---|
| SC-030 | **Rechazar** | Contradice no-acumulación vigente; riesgo de descuentos imprevistos; no hay topes definidos. Se puede reingresar una SC acotada | REQ-ECO-021 permanece **1.1 / Implementado** |
| SC-031 | **Aprobar** (implementación antes de activar marketing) | Necesidad de evaluar cumplimiento de tratamiento de datos; la obligatoriedad concreta debe validarse con asesoría legal, no asumir una conclusión jurídica definitiva | REQ-FID-003 pasa a propuesta **2.0 / Aprobado**, pendiente de implementación y prueba |
| SC-032 | **Diferir** | Requiere cambios en inventario y promesa de tienda; riesgo de incumplimiento del SLA de 2 h | REQ-CC-002 **1.0 / Propuesto** y REQ-INV-008 **1.0 / Aprobado** sin cambios para R2.0 |
| SC-033 | **Aprobar** | Cambio visual acotado, 6 h, sujeto a contraste accesible y revisión QA | Nuevo REQ-UI-001 **1.0 / Aprobado**, todavía no verificado |

Carga aprobada: **44 + 6 = 50 h**, quedan **70 h** de la capacidad libre estimada. Diferir no significa implementar. Los estados **Aprobado** expresan solo esta simulación académica.

## Paso D — RTM del release tras las decisiones

| Necesidad | Requisito (versión) | Caso de uso | Clases/componente | Pruebas | Estado |
|---|---|---|---|---|---|
| Control del uso promocional de datos | REQ-FID-003 (2.0 propuesta) | Afiliar fidelización / Consentimiento | Consentimiento, Cliente, MercaPunto | aceptación, negativa, revocación, auditoría | Aprobado; por implementar |
| Claridad visual en checkout | REQ-UI-001 (1.0 propuesto) | Finalizar compra | PantallaCheckout | contraste accesible, prueba visual | Aprobado; por implementar |

**Volatilidad LB-2.0:** agregados **1** (REQ-UI-001), modificados **1** (REQ-FID-003), eliminados **0**, base **48**. **(1 + 1 + 0) / 48 × 100 = 4,17 %**. SC-032 diferida y SC-030 rechazada **no** se contabilizan. La volatilidad es **estimación de cambios aprobados propuestos**, no evidencia de implementación real.

## Argumento para sustentar
La prioridad es tramitar el cambio sobre datos personales con revisión legal, posponer un SLA logísticamente arriesgado y rechazar una promoción contradictoria; el cambio visual puede incorporarse con pruebas de accesibilidad. El comité decide cómo introducir los cambios y cómo mitigar sus riesgos, no decide ignorar obligaciones legales.
