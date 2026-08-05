import { get, route } from "remix/routes";
import { albumRoutes } from "./actions/albums/routes.ts";

export const routes = route({
  assets: get("/assets/*path"),
  home: "/",
  albums: route("/albums", albumRoutes),
});
