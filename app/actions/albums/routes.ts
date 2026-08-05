import { route, get, form, del } from "remix/routes";

export const albumRoutes = route({
  index: get("/"),
  show: get("/:albumId"),
  edit: form("/:albumId/edit"),
  destroy: {
    index: get("/:albumId/destroy"),
    action: del("/:albumId/destroy"),
  },
});
