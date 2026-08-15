import { createRouter, type RouterContext } from "remix/router";
import { staticFiles } from "remix/middleware/static";
import { formData } from "remix/middleware/form-data";
import { methodOverride } from "remix/middleware/method-override";

import HomeController from "./actions/home/controller.tsx";
import AlbumsController from "./actions/albums/controller.tsx";
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
router.map(routes.albums, AlbumsController);
router.map(routes.albums.edit, AlbumsEditController);
router.map(routes.albums.destroy, AlbumsDeleteController);
