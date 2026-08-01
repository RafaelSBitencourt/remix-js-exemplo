import type { Handle } from "remix/ui";

import { type Album } from "./data.ts";
import { Document } from "../../ui/document.tsx";
import { css } from "remix/ui";

export function AlbumPage(handle: Handle<{ album: Album }>) {
  return () => {
    let { album } = handle.props;
    return (
      <Document title={`${album.title} - Albums`}>
        <main
          mix={css({
            maxWidth: "44rem",
            margin: "0 auto",
            padding: "4rem 1.5rem",
          })}
        >
          <h1>{album.title}</h1>
          <p
            mix={css({
              color: "#666",
            })}
          >
            {album.artist} - {album.year}
          </p>
        </main>
      </Document>
    );
  };
}
