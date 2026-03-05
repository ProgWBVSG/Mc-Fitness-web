# DIRECTIVA: MC_FITNESS_WEBSITE_SOP

> **ID:** 2026-03-03
> **Script Asociado:** N/A (Next.js app)
> **Última Actualización:** 03/03/2026
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance

- **Objetivo Principal:** Desarrollar sitio web profesional multi-página para MC Fitness Las Delicias (gym boutique en Córdoba) usando Next.js con App Router.
- **Criterio de Éxito:** Sitio funcional en `localhost:3000` con HOME completa, 5 páginas secundarias, WhatsApp flotante funcional, responsive mobile-first y animaciones al scroll.

## 2. Especificaciones de Entrada/Salida (I/O)

### Entradas (Inputs)
- **Brief:** `directivas/mc_fitness_website_SOP.md` (este archivo)
- **Logo:** Imagen provista por el usuario (azul #1B4F8A + naranja #E8541A)
- **Copy:** Todo el texto definido en el brief del usuario

### Salidas (Outputs)
- **Proyecto Next.js:** `MC fitness gym/` — app completa lista para deploy en Vercel
- **Páginas:** `/`, `/funcional`, `/pilates`, `/instalaciones`, `/nosotros`, `/contacto`
- **Retorno de Consola:** `npm run dev` funcional en puerto 3000

## 3. Flujo Lógico (Algoritmo)

1. **Inicialización:** `npx create-next-app@latest ./` en `MC fitness gym/` usando App Router, TypeScript, Tailwind deshabilitado, ESLint
2. **Design System:** Configurar colores, fuentes Google (Montserrat + Inter) en `globals.css` con variables CSS
3. **Componentes Globales:** Navbar, Footer, WhatsApp Button flotante con pulse animation
4. **HOME:** Construir cada sección como componente React independiente, importarlos a `page.tsx`
5. **Páginas Secundarias:** Crear cada ruta con su contenido específico
6. **Assets:** Generar imágenes placeholder con generate_image para cada sección hasta tener fotos reales
7. **Verificación:** Testear responsive y links de WhatsApp

## 4. Herramientas y Librerías

- **Framework:** Next.js 15 (App Router)
- **Estilos:** CSS Modules + Variables CSS (SIN Tailwind)
- **Animaciones:** CSS animations + Intersection Observer API (sin librerías externas)
- **Iconos:** SVG inline (sin dependencias externas)
- **Fuentes:** Google Fonts (Montserrat, Inter)
- **WhatsApp:** Links `https://wa.me/549XXXXXXXXXX?text=...` con `encodeURIComponent`

## 5. Restricciones y Casos Borde

### Limitaciones Conocidas
- **Fotos reales:** No disponibles aún. Usar imágenes generadas como placeholder con estilos consistentes
- **Número WhatsApp:** No provisto. Usar placeholder `549XXXXXXXXXX` que el cliente reemplazará
- **Entrenadores:** 5 placeholders con nombre/especialidad genéricos
- **Precio:** $60.000/mes (confirmar si actualizado)

### Validaciones Requeridas
- El botón flotante WA debe tener `z-index: 9999`
- Imágenes deben tener `alt` text para SEO
- Todos los CTAs deben abrir en `_blank` con `rel="noopener noreferrer"`

## 6. Protocolo de Errores y Aprendizajes (Memoria Viva)

| Fecha | Error Detectado | Causa Raíz | Solución/Parche Aplicado |
|-------|-----------------|------------|--------------------------|
| — | — | — | — |

## 7. Ejemplos de Uso

```bash
# Iniciar servidor de desarrollo
cd "MC fitness gym"
npm run dev
# → http://localhost:3000
```

## 8. Checklist de Pre-Ejecución
- [x] Brief completo analizado
- [x] Logo y colores identificados (Azul #1B4F8A, Naranja #E8541A)
- [x] Estructura de páginas definida
- [ ] Proyecto Next.js inicializado

## 9. Checklist Post-Ejecución
- [ ] Todas las secciones del HOME visibles
- [ ] Responsive en mobile (< 768px)
- [ ] Links WA abriendo con mensaje correcto
- [ ] Animaciones al scroll funcionando
- [ ] No hay errores de consola

## 10. Notas Adicionales
- Paleta: Primario Azul `#1B4F8A`, Acento Naranja `#E8541A`, Texto `#2D3748`, Fondo `#F7FAFC`
- El proyecto debe poder desplegarse en Vercel sin configuración adicional
- Logo guardado como SVG inline o PNG en `/public/`
