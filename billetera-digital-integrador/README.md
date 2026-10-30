# Billetera digital intuitiva — Proyecto integrador

**Curso:** Software IV / Administración de Requerimientos  
**Docente:** Martin Rigoberto Sullon Zapata  
**Integrantes:** Felix Ruben Landeo Castillo, Abad Junior Arquinigo Rojas y Luis Enrique Lapa Garcia.

> Proyecto educativo. Todas las cuentas, usuarios, saldos, transferencias y comprobantes son **ficticios**. No hay dinero real, conexión bancaria ni seguridad apta para producción.

## Objetivo
Desarrollar un prototipo de billetera digital intuitiva para personas con poca experiencia digital. El usuario inicia sesión con una cuenta de prueba, consulta su saldo, verifica el destinatario y el monto, confirma una transferencia simulada y obtiene un comprobante.

## Cómo ejecutar
Abrir `app/index.html` en un navegador moderno. No requiere instalar dependencias, servidor ni internet. Para reiniciar los saldos, pulsar **Restablecer demostración**.

**Cuentas de demostración** (solo para prototipo):
- `ana` / `demo123` — saldo inicial S/ 150.00
- `luis` / `demo123` — saldo inicial S/ 80.00
- `maria` / `demo123` — saldo inicial S/ 60.00

Entrar como `ana`, elegir destinatario `luis`, ingresar `10.00`, revisar el resumen y confirmar.

## Alcance y correspondencia
- RF01: acceso de prueba; RF02: saldo; RF03: destinatario activo y distinto; RF04: importe válido y fondos; RF05: revisión previa; RF06: cancelar sin debitar; RF07: débito y abono simulados; RF08: comprobante.
- RNF03: identificación única de solicitud, sin débito duplicado; RNF04: las vistas requieren sesión dentro del prototipo.
- RNF01 (usabilidad) y RNF02 (rendimiento) **requieren medición real** y no se declaran verificados.
- Prototipo local con `localStorage`: **no** ofrece autenticación segura, privacidad bancaria ni persistencia multiusuario real.

## Entrega Semana 9 / Administración de Requerimientos
- [`docs/01-plan-administracion.md`](docs/01-plan-administracion.md): línea base, nueve atributos, versiones, CCB, cambios, RTM y volatilidad.
- [`docs/02-actividad-omnicompra.md`](docs/02-actividad-omnicompra.md): resolución argumentada de los pasos A, B, C, D de la actividad de clase (caso separado del proyecto propio).
- [`docs/03-pruebas.md`](docs/03-pruebas.md): pruebas propuestas y estado de verificación.
- [`docs/04-guion-sustentacion.md`](docs/04-guion-sustentacion.md): guion breve para exponer.
- [`docs/linea-base.csv`](docs/linea-base.csv), [`docs/rtm.csv`](docs/rtm.csv), [`docs/solicitudes-cambio.csv`](docs/solicitudes-cambio.csv): evidencias editables y versionables.

## Estado real
Esta es una **propuesta académica de línea base (pendiente de aprobación formal por el equipo/docente)**. Los casos de prueba documentados representan resultados esperados, no una campaña de QA certificada. Las decisiones del CCB del caso de clase son **simulaciones para evaluación**.

## Publicar en GitHub
1. Crear repositorio público o privado en GitHub, p. ej. `billetera-digital-integrador`.
2. Subir el **contenido de esta carpeta** (README.md, app/, docs/, tests/) al repositorio.
3. Activar `Settings → Pages → Deploy from a branch → main /root` para publicar, o simplemente abrir `app/index.html` tras clonar. GitHub Pages requiere publicar `app/` como carpeta de origen no disponible en ese selector: para Pages, copiar los archivos de `app/` a la raíz o configurar GitHub Actions. La entrega de código por GitHub no requiere Pages.
4. En la sustentación enseñar los archivos de `docs/`, demostrar el flujo y explicar qué se encuentra pendiente.

**Fuentes del trabajo:** presentaciones proporcionadas por el equipo: `avance del proyecto2.pptx` y `proyecto integrador S90.pptx`.
