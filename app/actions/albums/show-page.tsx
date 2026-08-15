import type { Handle } from "remix/ui";

import { type Album } from "./data.ts";
import { Document } from "../../ui/document.tsx";
import { css } from "remix/ui";
import { routes } from "../../routes.ts";
import { Button } from "../../ui/button.tsx";
import { Card } from "../../ui/card.tsx";

export function AlbumPage(handle: Handle<{ album: Album }>) {
  return () => {
    let { album } = handle.props;
    return (
      <Document title={`${album.title} - Albums`}>
        <main className="page-shell">
          <Card title={album.title}>
            <div mix={css({ display: "grid", gap: "1rem" })}>
              <p mix={css({ color: "var(--text-muted)", margin: 0 })}>
                {album.artist} — {album.year}
              </p>
              <Button
                href={routes.albums.edit.action.href({ albumId: album.id })}
                variant="secondary"
              >
                Editar
              </Button>
            </div>
          </Card>
        </main>
      </Document>
    );
  };
}
