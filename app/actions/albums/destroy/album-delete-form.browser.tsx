import { clientEntry, css, type Handle, on } from "remix/ui";
import type { Album } from "../data.ts";
import { routes } from "../../../routes.ts";
import { Button } from "../../../ui/button/button.tsx";

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
          <label>
            Title
            <input name="title" defaultValue={album.title} disabled />
          </label>
          <label>
            Artist
            <input name="artist" defaultValue={album.artist} disabled />
          </label>
          <label>
            Year
            <input name="year" defaultValue={album.year} disabled />
          </label>
          <button disabled={pending} type="submit">
            {pending ? "Deleting..." : "Deleted Album"}
          </button>
          <Button
            type="submit"
            variant="secondary"
            href={routes.albums.index.href()}
          >
            Voltar
          </Button>
        </form>
      );
    };
  },
);
