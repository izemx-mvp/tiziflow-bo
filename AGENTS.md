<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep all TiziFlow demo data behind the typed browser-persistence service boundary so a future real API can replace it without rewriting screens.
- Keep the operational experience on the single internal route with view state in the URL query, preserving fast contextual navigation without public surfaces.
- Load Leaflet only through the lazy client-facing map component because it depends on browser globals.
