import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  // showScroll: false,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // case constants.SEARCH_FOCUS:
    //   return state.set("focused", true);
    // case constants.SEARCH_BLUR:
    //   return state.set("focused", false);
    case "change_home_data":
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    case constants.ADD_ARTICLE_LIST:
      return state.set(
        "articleList",
        state.get("articleList").concat(action.list)
      );
    // case constants.MOUSE_LEAVE:
    //   return state.set("mouseIn", false);
    // case constants.CHANGE_PAGE:
    //   return state.set("page", action.page);
    default:
      return state;
  }
};

export default reducer;
