import { css, on, type Handle } from "remix/ui";

import { routes } from "../../../routes.ts";
import { Button } from "../../../ui/button/button.tsx";
import { Document } from "../../../ui/document.tsx";
import { Input } from "../../../ui/input/input.tsx";
import type { Album } from "../data.ts";

export function AlbumNewPage(handle: Handle) {
  return () => {
    let album: Album = {
      id: "",
      artist: "",
      title: "",
      year: 0,
    };

    return (
      <Document title="New Album">
        <main mix={css({ padding: "1rem" })}>
          <h1>Create</h1>
          <form
            action={routes.albums.create.action.href(album)}
            method="post"
            mix={[
              css({
                display: "grid",
                gap: "0.75rem",
                maxWidth: "fit-content",
                "& input": {
                  marginLeft: "05.rem",
                },
              }),
              on("submit", () => {
                handle.update();
              }),
            ]}
          >
            <Input
              id="album-new-title"
              name="title"
              label="Title"
              value={album.title}
            />
            <Input
              id="album-new-artist"
              name="artist"
              label="Artist"
              value={album.artist}
            />
            <Input
              id="album-new-year"
              name="year"
              type="number"
              label="Year"
              value={album.year}
            />
            <Button variant="primary" type="submit">
              Adicionar
            </Button>
          </form>
        </main>
      </Document>
    );
  };
}
