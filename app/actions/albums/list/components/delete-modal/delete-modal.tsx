import { clientEntry, css, on, type Handle } from "remix/ui";

import type { Album } from "../../../data.ts";
import { routes } from "../../../../../routes.ts";
import { Button } from "../../../../../ui/button/button.tsx";
import { Modal } from "../../../../../ui/modal/modal.tsx";

export const AlbumDeleteModal = clientEntry(
  import.meta.url,
  function AlbumDeleteModal(handle: Handle<{ album: Album }>) {
    let modalOpen = false;

    return () => {
      const { album } = handle.props;

      return (
        <>
          <Button
            type="button"
            mix={[
              dangerButtonStyles,
              on("click", () => {
                modalOpen = true;
                handle.update();
              }),
            ]}
          >
            Excluir
          </Button>
          {modalOpen ? (
            <Modal
              title="Excluir álbum"
              actions={
                <>
                  <button
                    type="button"
                    mix={[
                      secondaryButtonStyles,
                      on("click", () => {
                        modalOpen = false;
                        handle.update();
                      }),
                    ]}
                  >
                    Cancelar
                  </button>
                  <form
                    action={routes.albums.destroy.action.href({
                      albumId: album.id,
                    })}
                    method="post"
                  >
                    <input type="hidden" name="_method" value="DELETE" />
                    <Button type="submit" variant="danger">
                      Excluir
                    </Button>
                  </form>
                </>
              }
            >
              Deseja realmente excluir o álbum "{album.title}"?
            </Modal>
          ) : null}
        </>
      );
    };
  },
);

const dangerButtonStyles = css({
  border: "none",
  borderRadius: "var(--radius-sm)",
  cursor: "pointer",
  minHeight: "42px",
  padding: "0.7rem 1.1rem",
  fontWeight: 700,
  background: "var(--color-danger)",
  color: "#ffffff",
});

const secondaryButtonStyles = css({
  border: "1px solid var(--border-color)",
  borderRadius: "var(--radius-sm)",
  cursor: "pointer",
  minHeight: "42px",
  padding: "0.7rem 1.1rem",
  fontWeight: 700,
  background: "var(--bg-surface-strong)",
  color: "var(--text-main)",
});
