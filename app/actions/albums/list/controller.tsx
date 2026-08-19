import { createController } from "remix/router";

import { routes } from "../../../routes.ts";
import { getAllAlbums } from "./../data.ts";
import { AlbumsListPage } from "./page.tsx";
import { Document } from "../../../ui/document.tsx";

export default createController(routes.albums, {
  actions: {
    async index(context) {
      const albums = await getAllAlbums();
      return context.render(
        <Document title="Albums">
          <AlbumsListPage albums={albums} />
        </Document>,
      );
    },
  },
});
