import { createController } from "remix/router";

import { routes } from "../../../routes.ts";
import { deleteAlbum, getAlbum } from "../data.ts";

import { redirect } from "remix/response/redirect";
import { AlbumDeletePage } from "./page.tsx";

export default createController(routes.albums.destroy, {
  actions: {
    async index(context) {
      let album = await getAlbum(context.params.albumId);

      if (album === undefined) {
        return new Response("Album not found", { status: 404 });
      }
      return context.render(<AlbumDeletePage album={album} />);
    },

    async action(context) {
      let album = await deleteAlbum(context.params.albumId);

      if (album === undefined) {
        return new Response("Album not found", { status: 404 });
      }
      return redirect("/albums");
    },
  },
});
