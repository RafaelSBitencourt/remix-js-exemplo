import { createController } from "remix/router";

import { routes } from "../../routes.ts";
import { getAlbum, getAllAlbums } from "./data.ts";
import { AlbumPage } from "./show-page.tsx";
import { AlbumsListPage } from "./page.tsx";

export default createController(routes.albums, {
  actions: {
    async index(context) {
      const albums = await getAllAlbums();
      return context.render(<AlbumsListPage albums={albums} />);
    },
    async show(context) {
      let album = await getAlbum(context.params.albumId);

      if (album === undefined) {
        return new Response("Album not found", { status: 404 });
      }

      return context.render(<AlbumPage album={album} />);
    },
  },
});
