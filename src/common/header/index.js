import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";

// Styled SearchIcon
const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: green; // Sets the icon color
  // background: white; // Example background color
  // border-radius: 15px; // Makes it circular
`;

const Header = (props) => {
  // constructor(props) {
  //   super(props);
  //   // props = { focused: false };
  //   // this.handleInputFocus = this.handleInputFocus.bind(this);
  //   // this.handleInputBlur = this.handleInputBlur.bind(this);
  // }

  // handleInputFocus() {
  //   this.setState({ focused: true });
  // }

  // handleInputBlur() {
  //   this.setState({ focused: false });
  // }
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">Aa</NavItem>
        <SearchWrapper>
          <CSSTransition timeout={200} in={props.focused} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <StyledSearchIcon />
          <SearchInfo></SearchInfo>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writing">写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    // focused: state.get('header').get("focused"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
