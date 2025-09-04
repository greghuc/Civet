// unplugin-civet:/Users/greghuc/workspace/Civet/source/unplugin/astro.civet.jsx
import civetUnplugin, {} from "./unplugin.mjs";
var astro_civet_default = function(opts = {}) {
  return {
    name: "@danielx/civet",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        return updateConfig({
          vite: {
            plugins: [civetUnplugin.vite(opts)]
          }
        });
      }
    }
  };
};
export {
  astro_civet_default as default
};
