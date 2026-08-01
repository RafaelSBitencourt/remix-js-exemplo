import { createController } from "remix/router";

import { routes } from "../../routes.ts";

export default createController(routes.albums, {
  actions: {
    show(context) {
      return new Response(`Album: ${context.params.albumId}`);
    },
  },
});
