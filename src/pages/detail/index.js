import React from "react";
import { DetailWrapper, Header, Content } from "./style";
import image1 from "../../static/image1.jpg";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  // console.log(props.match.params.id);
  const { id } = useParams();
  return (
    <React.Fragment>
      <DetailWrapper>
        <Header>衡水中学 {id}</Header>
        <Content>
          <img src={image1} alt="fake" />
          <p>
            <b>
              河北衡水中学,简称衡水中学,是一所位于中国河北省衡水市桃城区河东街道的寄宿制高级中学,为省级示范性高中。
            </b>{" "}
          </p>
          <p>
            <b>
              河北衡水中学,简称衡水中学,是一所位于中国河北省衡水市桃城区河东街道的寄宿制高级中学,为省级示范性高中。
            </b>
          </p>
          <p>
            河北衡水中学,<b>简称衡水中学</b>
            ,是一所位于中国河北省衡水市桃城区河东街道的寄宿制高级中学,为省级示范性高中。
          </p>
          <p>
            河北衡水中学,简称衡水中学,是一所位于中国河北省衡水市桃城区河东街道的寄宿制高级中学,为省级示范性高中。
          </p>
          <p>
            河北衡水中学,简称衡水中学,是一所位于中国河北省衡水市桃城区河东街道的寄宿制高级中学,为省级示范性高中。
          </p>
          <p>
            河北衡水中学,简称衡水中学,是一所位于中国河北省衡水市桃城区河东街道的寄宿制高级中学,为省级示范性高中。
          </p>
        </Content>
      </DetailWrapper>
    </React.Fragment>
  );
};

export default Detail;
