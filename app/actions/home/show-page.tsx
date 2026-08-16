import { css } from "remix/ui";

import { Document } from "../../ui/document.tsx";
import { routes } from "../../routes.ts";
import { Button } from "../../ui/button.tsx";
import { Card } from "../../ui/card.tsx";

export function HomePage() {
  return () => (
    <Document
      head={
        <h1
          mix={css({
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
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
        })}
      >
        <Card title="Albums">
          <div mix={css({ display: "grid", gap: "1rem" })}>
            <p mix={css({ color: "var(--text-muted)", margin: 0 })}>
              Explore the album catalog.
            </p>
            <Button href={routes.albums.index.href()} variant="primary">
              Ver Albums
            </Button>
          </div>
        </Card>
      </main>
    </Document>
  );
}
