import type { Handle } from "remix/ui";

import type { Album } from "./data.ts";

export function AlbumsListPage(handle: Handle<{ albums: Album[] }>) {
  return () => {
    const { albums } = handle.props;

    return (
      <li>
        {albums.map((album) => (
          <ul>
            {album.title} - {album.year}
            <a href={`albums/${album.id}/edit`}>
              {" "}
              <p> Editar</p>
            </a>
            <a href={`albums/${album.id}/destroy`}>
              {" "}
              <p> Excluir</p>
            </a>
            {"--------------------"}
          </ul>
        ))}
      </li>
    );
  };
}
