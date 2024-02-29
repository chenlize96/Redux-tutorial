import React from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import image1 from "../../../static/image1.jpg";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const List = (props) => {
  const { list, getMoreList } = props;
  return (
    <React.Fragment>
      {list.map((item, index) => {
        return (
          <Link key={index} to={`/detail/${index}`}>
          <ListItem key={index}>
            <img className="pic" src={image1} alt="fake" />
            <ListInfo>
              <h3 className="title">{item.get("title")}</h3>
              <p className="desc">{item.get("desc")}</p>
            </ListInfo>
          </ListItem></Link>
        );
      })}
      <LoadMore onClick={getMoreList}>更多文字</LoadMore>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
    // list: state.getIn(["header", "list"]),
    // page: state.getIn(["header", "page"]),
    // totalPage: state.getIn(["header", "totalPage"]),
    // mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList() {
      dispatch(actionCreators.getMoreList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
