import { clientEntry, css, type Handle, on } from "remix/ui";
import type { Album } from "../data.ts";
import { routes } from "../../../routes.ts";
import { Button } from "../../../ui/button/button.tsx";
import { Input } from "../../../ui/input/input.tsx";

export const AlbumDeleteForm = clientEntry(
  import.meta.url,
  function AlbumDeleteForm(handle: Handle<{ album: Album }>) {
    let pending = false;
    return () => {
      let { album } = handle.props;

      return (
        <form
          action={routes.albums.destroy.action.href({ albumId: album.id })}
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
              pending = true;
              handle.update();
            }),
          ]}
        >
          <input type="hidden" name="_method" value="DELETE" />
          <Input
            id="album-title"
            name="title"
            label="Title"
            value={album.title}
          />
          <Input
            id="album-artist"
            name="artist"
            label="Artist"
            value={album.artist}
          />
          <Input
            id="album-year"
            name="year"
            type="number"
            label="Year"
            value={album.year}
          />
          <Button type="submit" variant="danger" disable={pending}>
            {pending ? "Removendo..." : "Remover"}
          </Button>

          <Button variant="secondary" href={routes.albums.index.href()}>
            Voltar
          </Button>
        </form>
      );
    };
  },
);
