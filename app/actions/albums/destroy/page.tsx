import { css, type Handle } from "remix/ui";

import { AlbumDeleteForm } from "./album-delete-form.browser.tsx";
import type { Album } from "../data.ts";
import { Document } from "../../../ui/document.tsx";

export function AlbumDeletePage(handle: Handle<{ album: Album }>) {
  return () => {
    let { album } = handle.props;

    return (
      <Document title={`Edit ${album.title} - Albums`}>
        <main mix={css({ padding: "1rem" })}>
          <h1>Del {album.title}</h1>
          <AlbumDeleteForm album={album} />
        </main>
      </Document>
    );
  };
}
