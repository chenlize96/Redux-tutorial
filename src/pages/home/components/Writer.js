import React from "react";
import { WriterItem, WriterWrapper } from "../style";
// import { connect } from "react-redux";
// import { actionCreators } from "../store";

const Writer = (props) => {
  return (
    <React.Fragment>
      <WriterWrapper>
        <WriterItem />
      </WriterWrapper>
    </React.Fragment>
  );
};

export default Writer;
