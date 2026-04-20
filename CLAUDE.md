@AGENTS.md

## CSS Development Notes

After editing `app/globals.css`, always **hard-refresh** your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows/Linux). Tailwind v4's Lightning CSS pipeline does not always hot-swap global CSS changes — relying on hot-reload may leave stale styles in memory, making changes appear to have no effect. Hard refresh ensures the new CSS is loaded.
