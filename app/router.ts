import { createRouter, type RouterContext } from "remix/router";
import { staticFiles } from "remix/middleware/static";
import { formData } from "remix/form-data-middleware";

import controller from "./actions/controller.tsx";
import AlbumsController from "./actions/albums/controller.tsx";
import AlbumsEditController from "./actions/albums/edit/controller.tsx";
import { render } from "./middleware/render.tsx";
import { routes } from "./routes.ts";

export const router = createRouter({
  middleware: [staticFiles("./public", { index: false }), formData(), render()],
});

type AppContext = RouterContext<typeof router>;

declare module "remix/router" {
  interface RouterTypes {
    context: AppContext;
  }
}

router.map(routes, controller);
router.map(routes.albums, AlbumsController);
router.map(routes.albums.edit, AlbumsEditController);
