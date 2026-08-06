import { css } from "remix/ui";

import { Document } from "../../ui/document.tsx";
import { routes } from "../../routes.ts";

export function HomePage() {
  return () => (
    <Document
      head={
        <h1
          mix={css({
            fontFamily: "verdana",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          Remix
        </h1>
      }
    >
      <main
        mix={css({
          // Light-mode design tokens (default).
          fontFamily: "verdana",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <button
          mix={css({
            backgroundColor: "#9c4a4a",
            cursor: "pointer",
          })}
        >
          <a
            mix={css({
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "72px",
              textDecoration: "none",
              color: "white",
            })}
            href={routes.albums.index.href()}
          >
            abc
          </a>
        </button>
      </main>
    </Document>
  );
}
