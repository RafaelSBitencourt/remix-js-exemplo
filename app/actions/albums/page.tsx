import { css, type Handle } from "remix/ui";

import type { Album } from "./data.ts";
import { Card } from "../../ui/card.tsx";
import { Button } from "../../ui/button.tsx";
import { routes } from "../../routes.ts";
import { Document } from "../../ui/document.tsx";

export function AlbumsListPage(handle: Handle<{ albums: Album[] }>) {
  return () => {
    const { albums } = handle.props;

    return (
      <Document title="Albums">
        <main className="page-shell">
          <div mix={css({ display: "grid", gap: "1rem" })}>
            {albums.map((album) => (
              <Card key={album.id} title={album.title}>
                <div
                  mix={css({
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    alignItems: "center",
                    flexWrap: "wrap",
                  })}
                >
                  <div>
                    <p mix={css({ margin: 0, color: "var(--text-muted)" })}>
                      {album.artist} • {album.year}
                    </p>
                  </div>
                  <div
                    mix={css({
                      display: "flex",
                      gap: "0.75rem",
                      flexWrap: "wrap",
                    })}
                  >
                    <Button
                      href={routes.albums.edit.action.href({
                        albumId: album.id,
                      })}
                      variant="secondary"
                    >
                      Editar
                    </Button>
                    <Button
                      href={routes.albums.destroy.index.href({
                        albumId: album.id,
                      })}
                      variant="danger"
                    >
                      Excluir
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </Document>
    );
  };
}
