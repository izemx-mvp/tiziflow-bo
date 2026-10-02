import { createFileRoute } from "@tanstack/react-router";
import { Login } from "@/components/tiziflow/Login";
import { MissionControl } from "@/components/tiziflow/MissionControl";
import { useTiziFlowStore } from "@/features/tiziflow/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TiziFlow Mission Control — Back-Office Opérations" },
      { name: "description", content: "Plateforme interne TiziFlow pour piloter réservations, flotte électrique, excursions, paiements et opérations à Midelt." },
      { property: "og:title", content: "TiziFlow Mission Control" },
      { property: "og:description", content: "Centre opérationnel interne des excursions électriques TiziFlow dans l’Atlas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const store = useTiziFlowStore();
  if (!store.hydrated) return <div className="app-loader"><div className="loader-mark">TF</div><span>Initialisation de Mission Control…</span></div>;
  if (!store.authenticated) return <Login onLogin={store.login}/>;
  return <MissionControl store={store}/>;
}
