# TiziFlow Mission Control

## Goal
Build a French, internal-only operations platform for TiziFlow. It will cover the complete operational chain from customer and reservation through live excursion tracking, incidents, finance, and reporting. No public website, booking flow, customer dashboard, or public payment page will be created.

## Brand and experience
- Reuse the official TiziFlow logo, favicon, and imagery that are technically retrievable from the current website.
- Preserve the verified brand system: Sora display type, Inter interface type, petrol, terracotta, teal, aqua, and warm sand colors.
- Create a desktop-first “Mission Control for electric adventures” interface rather than a generic SaaS dashboard.
- Add restrained environmental motion: layered Atlas silhouettes, golden-hour haze, drifting dust, slow parallax, route traces, and a distant electric-motorcycle silhouette. Respect reduced-motion settings.
- Support a warm daylight theme and a deep earthy night theme without pure-black or neon styling.

## Product structure
- Build a cinematic mock login with the supplied demo credentials, validation, password visibility, remember-me behavior, loading/error/success states, and session persistence.
- Build one responsive authenticated shell with the exact requested sidebar hierarchy and no Configuration section.
- Add the global header with breadcrumb, grouped cross-entity search, notifications and preferences, quick actions, user/role controls, theme switch, agency profile, and security controls.
- Use contextual drawers, dialogs, tabs, breadcrumbs, and deep links so related customers, reservations, motorcycles, payments, complaints, circuits, calendars, and map views remain connected.

## Operational modules
1. **Dashboard** — all requested KPIs, today timeline, operational alerts, quick actions, agency profile, and subtle animated counters.
2. **Reservations** — 30+ linked reservations; search, sorting, filters, real pagination, every requested status, multi-step creation, detail workspace, assignments, services, payments, refunds, complaints, incidents, receipt generation, and integrated reservation rules.
3. **Resource planning** — day/week/month/agenda views by circuit, guide, or motorcycle; drag-and-drop rescheduling; circuit and guide calendars; capacity visualization; deterministic motorcycle, guide, maintenance, capacity, and overlap validation.
4. **Fleet & excursions** — 12+ motorcycles with imagery and operational detail; assignments, status, GPS, histories, incidents, maintenance blocking, and contextual fleet settings.
5. **Circuits** — 8+ Midelt-inspired demonstration circuits with distinct imagery, full details, maps, calendars, reservations, services, compatibility, and integrated settings.
6. **Circuit builder** — add/edit/delete/duplicate/reorder stops, coordinates, types, duration, imagery, notes, and automatic route/distance/duration/timeline updates.
7. **Services & maintenance** — 10+ configurable services plus maintenance records, photos, costs, parts, scheduling, statuses, and automatic booking blocks.
8. **Operational map** — Leaflet/OpenStreetMap centered on Midelt with terrain-toned styling, routes, stops, recharge points, active excursions, battery-aware motorcycle markers, operational cards, and gradual simulated GPS movement.
9. **Clients & team** — 25+ international customers with linked history; 10+ complaints; 8+ guides and guide planning; internal users, roles, invitations, permissions, and role-aware actions.
10. **Finance & reports** — exactly Online, Card at agency, and Cash at agency payment channels; 30+ transactions; partial-payment arithmetic; guarded refunds; promotions; date-filtered reports; exports; and activity journal.
11. **Contextual incidents and settings** — incidents stay accessible from reservation, motorcycle, excursion, and map contexts. Numbering, notifications, agency data, security, and all settings live only inside their relevant modules or profile menus.

## Data and behavior
- Create a typed, interconnected mock dataset for every requested entity, using realistic Moroccan and international names and no placeholder identities.
- Persist authentication and all edits in browser session storage, behind a replaceable service layer.
- Centralize business rules for scheduling, capacity, maintenance, battery/autonomy, cancellations, payments, refunds, promotions, and itinerary recalculation.
- Implement role permissions for Admin, Responsable, Guide, and Fleet Manager; hide or disable unavailable actions and guard direct navigation.
- Make every visible control functional, including create/edit/delete/archive/restore, search/filter/sort/pagination, assign/unassign, confirmation, rescheduling, exports, map/calendar navigation, payment, and refund actions.
- Provide confirmations, validation, loading/skeleton, success/error messages, and purposeful empty states throughout.

## Technical approach
- Keep the app frontend-only as requested; model data access as asynchronous services with TanStack Query so a future backend can replace the mock layer cleanly.
- Use schema-versioned browser persistence and a resettable deterministic seed dataset.
- Isolate Leaflet behind a client-only boundary for server-rendering safety.
- Keep conflict checks and financial calculations as tested pure functions.
- Use the shared design tokens and reusable interface controls for all styling and actions.

## Delivery sequence
1. Establish design tokens, official assets, imagery, application shell, login, permissions, persistence, and seed data.
2. Deliver the dashboard, global search, notifications, and cross-entity navigation.
3. Deliver reservations, planning calendars, assignment workflows, and conflict rules.
4. Deliver fleet, circuits, builder, services, maintenance, map, and GPS simulation.
5. Deliver customers, complaints, team, users, payments, refunds, promotions, reports, and activity log.
6. Complete integration, responsive behavior, accessibility, automated rule tests, and visual/interaction QA.

## Verification
- Check all content at desktop, laptop, tablet, and mobile widths, including tables, drawers, forms, calendars, and map overlays.
- Test login/session persistence, all CRUD paths, role restrictions, deep links, search/filter/sort/pagination, conflict blockers, cancellation releases, payment totals, refund caps, route recalculation, and GPS movement.
- Confirm the exact sidebar, official logo/favicon, brand palette, Midelt/Atlas atmosphere, no separate Configuration item, and no public/customer-facing surface.
- Confirm the latest preview compiles cleanly and has no runtime or console errors.
