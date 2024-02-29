import React from "react";
import { TopicWrapper, TopicItem } from "../style";
import image1 from "../../../static/image1.jpg";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Topic = (props) => {
  const { list } = props;
  return (
    <React.Fragment>
      <TopicWrapper>
        {list.map((item) => (
          <TopicItem key={item.get("id")}>
            <img className="topic-pic" src={image1} alt="fake" />
            {item.get("title")}
          </TopicItem>
        ))}
      </TopicWrapper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "topicList"]),
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

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
