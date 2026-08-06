import { getAllAlbums } from "./data.ts";

export function AlbumsListPage() {
  let albumsList = getAllAlbums();

  return () => (
    <li>
      {albumsList.map((album) => (
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
}
