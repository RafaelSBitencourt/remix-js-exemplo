import { css, type Handle } from "remix/ui";

import { AlbumEditForm } from "./album-edit-form.browser.tsx";
import type { Album } from "../data.ts";
import { Document } from "../../../ui/document.tsx";
import { Button } from "../../../ui/button.tsx";

export function AlbumEditPage(handle: Handle<{ album: Album }>) {
  return () => {
    let { album } = handle.props;

    return (
      <Document title={`Edit ${album.title} - Albums`}>
        <main mix={css({ padding: "1rem" })}>
          <h1>Edit {album.title}</h1>
          <AlbumEditForm album={album} />
          <Button variant="secondary" href="/albums">
            Voltar
          </Button>
        </main>
      </Document>
    );
  };
}
