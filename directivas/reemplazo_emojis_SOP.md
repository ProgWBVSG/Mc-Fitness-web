# DIRECTIVA: REEMPLAZO_EMOJIS_SOP

> **ID:** 2026-03-05-EMOJIS
> **Script Asociado:** `scripts/reemplazar_emojis.py`
> **Última Actualización:** 05/03/2026
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance

- **Objetivo Principal:** Eliminar todos los emojis de la página web y reemplazarlos por íconos SVG profesionales (de la librería `lucide-react`, que ya se está usando en el proyecto) para darle un aspecto más serio y corporativo.
- **Criterio de Éxito:** Ningún archivo `.tsx` o `.ts` dentro de `web/app/` debe contener caracteres Emoji. Todos deben ser reemplazados por componentes como `<IconName className="w-5 h-5" />`.

## 2. Especificaciones de Entrada/Salida (I/O)

### Entradas (Inputs)
- **Filtro:** Archivos `.tsx` en el directorio `web/app/`.
- **Librería de Iconos:** `lucide-react`.

### Salidas (Outputs)
- **Archivos Modificados:** Código `.tsx` actualizado, incorporando importaciones de `lucide-react` y reemplazando texto con componentes de React.

## 3. Flujo Lógico (Algoritmo)

1. **Escaneo:** Ejecutar `scripts/reemplazar_emojis.py` o un comando de búsqueda para encontrar todos los caracteres Unicode pertenecientes al bloque de Emojis dentro de `web/app/**/*.tsx`.
2. **Mapeo:** Identificar el contexto de cada emoji para elegir el ícono apropiado de `lucide-react` (ej. 📍 -> `MapPin`, 👥 -> `Users`, 🏋️ -> `Dumbbell`, etc.).
3. **Reemplazo:**
   - Importar el ícono en la parte superior del archivo: `import { IconName } from 'lucide-react';`
   - Reemplazar el emoji en el JSX: `<span><IconName className="w-5 h-5 inline-block mr-2" /></span>` o similar, adaptándose a las clases Tailwind (o CSS Modules) existentes.
4. **Verificación:** Correr `npm run build` o verificar en `localhost:3000` que la UI no se haya roto y los íconos se vean profesionales.

## 4. Herramientas y Librerías

- **Scripting:** Python puro para la detección de Emojis (`re.compile` con rangos Unicode de emojis).
- **Iconos:** `lucide-react` v0.x

## 5. Restricciones y Casos Borde

### Limitaciones Conocidas
- **Reemplazo Automático Complejo:** Reemplazar emojis en el JSX automáticamente usando código Python puede generar JSX malformado si no se considera el contexto (texto suelto vs atributos).
- **Acción:** El script Python *encontrará* las ubicaciones, y el Agente realizará el reemplazo manual o mediante scripts secundarios cuidadosamente estructurados para asegurar que el AST de React/Next.js no se rompa.

### Validaciones Requeridas
- Verificar que el ícono usado importe correctamente.
- Asegurarse de mantener el tamaño y color relativo al texto donde estaba el emoji (usar clases como `w-5 h-5 inline-block`).

## 6. Protocolo de Errores y Aprendizajes (Memoria Viva)

| Fecha | Error Detectado | Causa Raíz | Solución/Parche Aplicado |
|-------|-----------------|------------|--------------------------|
| — | — | — | — |

## 8. Checklist de Pre-Ejecución
- [x] Directiva creada.
- [ ] Script de búsqueda de emojis creado y ejecutado.
- [ ] Resultados analizados para planificar reemplazos.

## 9. Checklist Post-Ejecución
- [ ] Cero emojis en los archivos objetivo.
- [ ] UI verificada y luciendo profesional.
