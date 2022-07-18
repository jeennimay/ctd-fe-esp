import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/index";

const store = createStore(reducers, compose(
        applyMiddleware(thunk),
        composeWithDevTools(),
    ),
);

export default store;