import React, { useRef } from "react";
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
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
// import AutorenewIcon from "@mui/icons-material/Autorenew";

// Styled SearchIcon
const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: green; // Sets the icon color
  // background: white; // Example background color
  // border-radius: 15px; // Makes it circular
`;

const getListArea = (props) => {
  const {
    focused,
    list,
    page,
    totalPage,
    mouseIn,
    handleMouseEnter,
    handleMouseLeave,
    handleChangePage,
  } = props;
  const pageList = [];
  const newList = list.toJS();
  if (newList.length) {
    for (let i = (page - 1) * 5; i < page * 5; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      );
    }
  }
  if (focused || mouseIn) {
    return (
      <SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
            {/* <AutorenewIcon className="spin" /> */}
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
          {/* <SearchInfoItem>教育</SearchInfoItem> */}
        </SearchInfoList>
      </SearchInfo>
    );
  }
  return null;
};

const Header = (props) => {
  // constructor(props) {
  //   super(props);
  //   // props = { focused: false };
  //   // this.handleInputFocus = this.handleInputFocus.bind(this);
  //   // this.handleInputBlur = this.handleInputBlur.bind(this);
  // }

  const navSearchRef = useRef(null);
  // handleInputFocus() {
  //   this.setState({ focused: true });
  // }

  // handleInputBlur() {
  //   this.setState({ focused: false });
  // }
  const { focused, handleInputFocus, handleInputBlur, list } = props;
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">Aa</NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={200}
            in={focused}
            classNames="slide"
            nodeRef={navSearchRef}
          >
            <NavSearch
              className={focused ? "focused" : ""}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
              ref={navSearchRef}
            ></NavSearch>
          </CSSTransition>
          <StyledSearchIcon />
          {getListArea(props)}
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
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
