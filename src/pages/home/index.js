import React, { useEffect } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import image1 from "../../static/image1.jpg";
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import axios from "axios";
import { connect } from "react-redux";

const Home = (props) => {
  const { changeHomeData } = props;

  useEffect(() => {
    changeHomeData();
  }, [changeHomeData]);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={image1} alt="car" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        <BackTop onClick={handleScrollTop}>顶部</BackTop>
      </HomeWrapper>
    </React.Fragment>
  );
};

const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      axios
        .get("/api/home.json")
        .then((res) => {
          const result = res.data.data;
          const action = {
            type: "change_home_data",
            topicList: result.topicList,
            articleList: result.articleList,
            recommendList: result.recommendList,
          };
          dispatch(action);
        })
        .catch(() => {
          console.log("error");
        });
    },
  };
};

export default connect(null, mapDispatch)(Home);
