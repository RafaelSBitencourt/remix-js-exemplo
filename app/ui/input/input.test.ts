import assert from "node:assert/strict";
import test from "node:test";

import { Input } from "./input.tsx";

test("Input follows the Remix v3 component render contract", () => {
  const result = Input({
    props: {
      id: "album-title",
      type: "text",
      label: "Título",
    },
    update() {},
  } as any);

  assert.equal(typeof result, "function");
});
