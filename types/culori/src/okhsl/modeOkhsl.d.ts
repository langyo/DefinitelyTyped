import convertOkhslToOklab from "./convertOkhslToOklab.js";
import convertOklabToOkhsl from "./convertOklabToOkhsl.js";

import modeHsl from "../hsl/definition.js";
import { Rgb } from "../rgb/types.js";
import { Okhsl } from "./types.js";

interface OkhslDefinitionMixin {
    mode: "okhsl";
    channels: ["h", "s", "l", "alpha"];
    parse: ["--okhsl"];
    serialize: "--okhsl";
    fromMode: {
        oklab: typeof convertOklabToOkhsl;
        rgb: (c: Omit<Rgb, "mode">) => Okhsl;
    };
    toMode: {
        oklab: typeof convertOkhslToOklab;
        rgb: (c: Omit<Okhsl, "mode">) => Rgb;
    };
}

declare const modeOkhsl: Omit<typeof modeHsl, keyof OkhslDefinitionMixin> & OkhslDefinitionMixin;

export default modeOkhsl;
