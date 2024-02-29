import React, { useEffect } from "react";
// import image1 from "../../../static/image1.jpg";
import { connect } from "react-redux";
// import { actionCreators } from "./store";
import { useNavigate } from "react-router-dom";
// import { LoginWrapper, Input, LoginBox, Button } from "./style";

const Write = (props) => {
  const { loginStatus } = props;
  //   const accountRef = useRef(null);
  //   const passwordRef = useRef(null);
  const navigate = useNavigate();

  // if (loginStatus) {
  //     console.log(loginStatus);
  //   return (<div>写文章页面</div>)
  // } else {
  //     console.log(123);
  //     navigate("/login");
  // }

  useEffect(() => {
    if (!loginStatus) {
      navigate("/login");
    }
  }, [navigate, loginStatus]);

  if (!loginStatus) {
    // If not logged in, the component will navigate away,
    // so you don't necessarily need to return anything here.
    return null;
  }

  // Normal rendering when logged in
  return <div>写文章页面</div>;
};

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(["login", "login"]),
    // list: state.getIn(["header", "list"]),
    // page: state.getIn(["header", "page"]),
    // totalPage: state.getIn(["header", "totalPage"]),
    // mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login(accountElem, passwordElem) {
      // console.log(accountElem+ passwordElem);
      //   dispatch(actionCreators.login(accountElem, passwordElem));
      //   dispatch(actionCreators.getMoreList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Write);
