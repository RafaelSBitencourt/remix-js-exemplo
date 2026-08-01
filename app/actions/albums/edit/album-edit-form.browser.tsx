import { clientEntry, css, type Handle, on } from "remix/ui";
import type { Album } from "../data.ts";
import { routes } from "../../../routes.ts";

export const AlbumEditForm = clientEntry(
  import.meta.url,
  function AlbumEditForm(handle: Handle<{ album: Album }>) {
    let pending = false;
    return () => {
      let { album } = handle.props;

      return (
        <form
          action={routes.albums.edit.action.href({ albumId: album.id })}
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
          <button disabled={pending} type="submit">
            {pending ? "Saving..." : "Save Album"}
          </button>
        </form>
      );
    };
  },
);
