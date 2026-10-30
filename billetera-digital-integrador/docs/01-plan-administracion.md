# Plan de administración de requerimientos — Billetera digital intuitiva

**Versión de documento:** 0.1 (propuesta) · **Línea base propuesta:** LB-BDI-1.0 · **Fecha de elaboración:** 29/10/2026.  
**Estado:** pendiente de revisión y aprobación formal; no se inventan firmas ni fechas de aprobación.

## 1. Objetivo y alcance
Mantener íntegros los requisitos del prototipo educativo de transferencia de dinero ficticio, asegurando que cualquier modificación tenga justificación, evaluación, decisión, versión y prueba. Se excluyen dinero real, integración bancaria, QR y voz en este release.

## 2. Línea base y nueve atributos
La lista completa se entrega en [`linea-base.csv`](linea-base.csv). Incluye **ID, descripción, origen, prioridad, estado, versión, release, responsable y criterio de aceptación**, los nueve atributos de la sesión. Se han recogido RF01–RF08 y RNF01–RNF04 del avance previo. RF01–RF08, RNF01, RNF03 y RNF04 son **Must**; RNF02 es **Should**. Es una fotografía **propuesta**, no una línea base formalmente aprobada.

**Por corregir antes de aprobar:** El avance menciona CU05 asociado a RF09, pero **no especifica RF09** en su catálogo RF01–RF08. Se registra como inconsistencia pendiente de resolución; no se incluye RF09 ficticiamente. El criterio de RNF02 está truncado en el archivo de avance, por lo que el equipo debe consensuar un umbral medible. Las entrevistas y las pruebas de usabilidad figuran como planificadas, no realizadas.

## 3. Control de versión y estados
- `1.0 → 1.1`: aclaración documental que no cambia el comportamiento; registrar fecha, autor y motivo.
- `1.x → 2.0`: cambio de alcance o regla de negocio; requiere aprobación del CCB antes de desarrollarse.
- Estados: **Propuesto → Aprobado → Implementado → Verificado**; salidas alternativas **Rechazado** y **Eliminado**. Nunca marcar **Verificado** sin evidencia de la prueba.
- Etiquetar en Git el baseline después de la aprobación efectiva (`LB-BDI-1.0`). Git mantiene historial de archivos y el registro SC explica el porqué.

## 4. Solicitudes y proceso de control de cambios
Toda SC debe registrar ID, fecha, solicitante, requisito/versión afectados, descripción, motivación, urgencia, análisis de impacto (alcance, módulos/clases, casos de uso, pruebas, horas, riesgos), decisión, responsable, nueva versión y cierre. Plantilla editable en [`solicitudes-cambio.csv`](solicitudes-cambio.csv).

Flujo: **(1)** registrar SC → **(2)** analizar impacto → **(3)** decidir en CCB → **(4)** implementar solo lo aprobado y actualizar documentos/UML/código → **(5)** verificar pruebas y RTM → **(6)** comunicar y cerrar.

**Vía rápida:** para corregir errores de redacción sin alterar comportamiento, el analista puede proponer versión menor, documentar y notificar; cambios que afecten saldo, destinatario, acceso o idempotencia pasan obligatoriamente por CCB. Una urgencia no autoriza modificar código sin registro y aprobación.

## 5. CCB propuesto
Los tres integrantes del equipo deben **confirmar formalmente** la asignación de roles. Propuesta inicial:

| Integrante | Rol propuesto | Función |
|---|---|---|
| Felix Ruben Landeo Castillo | Product Owner / representante del usuario | Prioridad y valor del cambio |
| Abad Junior Arquinigo Rojas | Analista de requerimientos / secretario del CCB | Registro, versiones, RTM y acta |
| Luis Enrique Lapa Garcia | Arquitectura y QA | Esfuerzo, riesgos y pruebas |

Para cambios relevantes, solicitar conformidad del docente o representante de la entidad financiera **si existe**; no atribuirles aprobaciones no obtenidas. El comité decide **aprobar, rechazar o diferir** sustentando costo, valor, riesgo y cronograma.

## 6. Trazabilidad inicial
Ver [`rtm.csv`](rtm.csv). Contiene todos los requerimientos **Must** relacionados con casos de uso CU01–CU04, componentes del modelo y pruebas P01–P09, P11–P12. El estado de prueba permanece **Pendiente** hasta ejecutar y registrar evidencia. El caso CU05 se puede documentar, pero la referencia a RF09 necesita aclaración.

## 7. Métrica de volatilidad
`Volatilidad (%) = (Agregados + Modificados + Eliminados) / número de requisitos de la línea base × 100`.

Ejemplo inicial: **0 + 0 + 0, sobre 12 requerimientos = 0 %** **solo como escenario de partida**, no medición histórica verificable. Al finalizar cada sprint, contar exclusivamente cambios aprobados y aplicados al release, guardar acta y actualizar el cálculo. Umbral **propuesto**: si supera 10 % en un sprint, revisar el alcance con el CCB.

## 8. Riesgos y comunicación
Riesgos: nuevos requerimientos sin control, documentos obsoletos, saldos inconsistentes y pruebas ausentes. Mitigación: PR con código de SC, revisión cruzada, pruebas de regresión, historial Git y lista de decisiones en cada sprint. Cada acuerdo se comunica al equipo, se registra en el repositorio y se refleja en la RTM.
