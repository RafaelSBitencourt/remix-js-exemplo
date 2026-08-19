import { createRouter, type RouterContext } from "remix/router";
import { staticFiles } from "remix/middleware/static";
import { formData } from "remix/middleware/form-data";
import { methodOverride } from "remix/middleware/method-override";

import HomeController from "./actions/controller.tsx";
// controlers of Albums
import AlbumsController from "./actions/albums/list/controller.tsx";
import AlbumsAddController from "./actions/albums/create/controller.tsx";
import AlbumsEditController from "./actions/albums/edit/controller.tsx";
import AlbumsDeleteController from "./actions/albums/destroy/controller.tsx";
import { render } from "./middleware/render.tsx";
import { routes } from "./routes.ts";

export const router = createRouter({
  middleware: [
    staticFiles("./public", { index: false }),
    formData(),
    methodOverride(),
    render(),
  ],
});

type AppContext = RouterContext<typeof router>;

declare module "remix/router" {
  interface RouterTypes {
    context: AppContext;
  }
}

router.map(routes, HomeController);
//map for Albums
router.map(routes.albums, AlbumsController);
router.map(routes.albums.create, AlbumsAddController);
router.map(routes.albums.edit, AlbumsEditController);
router.map(routes.albums.destroy, AlbumsDeleteController);
