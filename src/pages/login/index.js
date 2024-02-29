import React, { useRef, useEffect } from "react";
// import image1 from "../../../static/image1.jpg";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { useNavigate } from "react-router-dom";
import { LoginWrapper, Input, LoginBox, Button } from "./style";

const Login = (props) => {
  const { loginStatus, login } = props;
  const accountRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  if (loginStatus) {
    navigate("/"); // Replace with your desired path
  }

  useEffect(() => {
    if (loginStatus) {
      navigate("/"); // Replace with your desired path
    }
  }, [navigate, loginStatus]);

  return (
    <React.Fragment>
      <LoginWrapper>
        <LoginBox>
          <Input ref={accountRef} placeholder="账号" />
          <Input ref={passwordRef} placeholder="密码" type="password" />
          <Button
            onClick={() =>
              login(accountRef.current.value, passwordRef.current.value)
            }
          >
            登录
          </Button>
        </LoginBox>
      </LoginWrapper>
    </React.Fragment>
  );
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
      dispatch(actionCreators.login(accountElem, passwordElem));
      //   dispatch(actionCreators.getMoreList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
