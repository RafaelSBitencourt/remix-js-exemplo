import { css, type Handle } from "remix/ui";

import type { Album } from "../data.ts";
import { Document } from "../../../ui/document.tsx";
import { routes } from "../../../routes.ts";

export function AlbumEditPage(handle: Handle<{ album: Album }>) {
  return () => {
    let { album } = handle.props;

    return (
      <Document title={`Edit ${album.title} - Albums`}>
        <main mix={css({ padding: "1rem" })}>
          <h1>Edit {album.title}</h1>
          <form
            action={routes.albums.edit.action.href({ albumId: album.id })}
            method="post"
            mix={css({
              display: "grid",
              gap: "0.75rem",
              maxWidth: "fit-content",
              "& inpt": {
                marginLeft: "0.5rem",
              },
            })}
          >
            <label>
              Title
              <input name="title" defaultValue={album.title} />
            </label>
            <label>
              Artist
              <input name="artist" defaultValue={album.artist} />
            </label>
            <label>
              Year
              <input name="year" defaultValue={album.year} />
            </label>
            <button type="submit">Save Album</button>
          </form>
        </main>
      </Document>
    );
  };
}
