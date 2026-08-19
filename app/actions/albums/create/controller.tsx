import { createController } from "remix/router";

import * as s from "remix/data-schema";
import * as f from "remix/data-schema/form-data";
import * as coerce from "remix/data-schema/coerce";
import { redirect } from "remix/response/redirect";

import { routes } from "../../../routes.ts";
import { createAlbum } from "../data.ts";
import { AlbumNewPage } from "./page.tsx";

const albumFormSchema = f.object({
  artist: f.field(s.string()),
  title: f.field(s.string()),
  year: f.field(coerce.number()),
});

export default createController(routes.albums.create, {
  actions: {
    async index(context) {
      return context.render(<AlbumNewPage />);
    },
    async action({ formData }) {
      let result = s.parseSafe(albumFormSchema, formData);

      if (!result.success) {
        return new Response("Invalid album data", { status: 400 });
      }

      let album = await createAlbum({
        ...result.value,
        id: result.value.title,
      });

      return redirect(routes.albums.edit.index.href({ albumId: album.id }));
    },
  },
});
