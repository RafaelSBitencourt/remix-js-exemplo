import { css, type Handle } from "remix/ui";

import type { Album } from "../data.ts";
import { Card } from "../../../ui/card/card.tsx";
import { Button } from "../../../ui/button/button.tsx";
import { routes } from "../../../routes.ts";
import { AlbumDeleteModal } from "./components/delete-modal/delete-modal.tsx";

export function AlbumsListPage(handle: Handle<{ albums: Album[] }>) {
  return () => {
    const { albums } = handle.props;

    return (
      <main className="page-shell">
        <div mix={css({ display: "grid", gap: "1rem" })}>
          <Button href={routes.albums.create.index.href()} variant="primary">
            + Adicionar Album
          </Button>
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
                <p mix={css({ margin: 0, color: "var(--text-muted)" })}>
                  {album.artist} • {album.year}
                </p>
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
                  <AlbumDeleteModal album={album} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    );
  };
}
