const { createMiddleware } = require("signalbox");
const uuid = require("uuid/v1");

const actions = require("../actions").default;

export const middleware = createMiddleware((cancel, before, after) => ({
  [before(actions.CREATE_CELL)](store, action) {
    // hi
  }
}));

export default middleware;


