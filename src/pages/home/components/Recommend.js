import React from "react";
import { RecommandItem, RecommandWrapper } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Recommend = (props) => {
  const { list } = props;

  return (
    <React.Fragment>
      <RecommandWrapper>
        {list.map((item) => {
          return (
            <RecommandItem key={item.get("id")} imgurl={item.get("imgUrl")} />
          );
        })}
      </RecommandWrapper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "recommendList"]),
    // list: state.getIn(["header", "list"]),
    // page: state.getIn(["header", "page"]),
    // totalPage: state.getIn(["header", "totalPage"]),
    // mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
