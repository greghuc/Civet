// unplugin-civet:/Users/greghuc/workspace/Civet/source/node-worker.civet.jsx
import { parentPort } from "node:worker_threads";
import module from "node:module";
try {
  module.enableCompileCache();
} catch (e) {
}
(async () => {
  {
    const { compile } = await import("./main.mjs");
    return parentPort.on("message", async ({ id, op, args }) => {
      try {
        let result;
        switch (op) {
          case "compile": {
            result = await compile(...args);
            break;
          }
          default: {
            throw `Unknown operation: ${op}`;
          }
        }
        return parentPort.postMessage({ id, result, errors: args[1]?.errors });
      } catch (error) {
        console.log(`Civet worker failed to compile:`, error);
        return parentPort.postMessage({ id, error: {
          type: error.constructor.name,
          name: error.name,
          message: error.message
        } });
      }
    });
  }
})();
