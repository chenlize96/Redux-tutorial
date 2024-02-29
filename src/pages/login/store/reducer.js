import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  login: false,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set("login", action.value);
    case constants.LOGOUT:
      return state.set("login", action.value);
    // case "change_home_data":
    //   return state.merge({
    //     topicList: fromJS(action.topicList),
    //     articleList: fromJS(action.articleList),
    //     recommendList: fromJS(action.recommendList),
    //   });
    // case constants.ADD_ARTICLE_LIST:
    //   return state.set(
    //     "articleList",
    //     state.get("articleList").concat(action.list)
    //   );
    // case constants.MOUSE_LEAVE:
    //   return state.set("mouseIn", false);
    // case constants.CHANGE_PAGE:
    //   return state.set("page", action.page);
    default:
      return state;
  }
};

export default reducer;
