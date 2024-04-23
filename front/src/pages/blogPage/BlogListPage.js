import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import '../../assets/css/style.scss';
import Title from '../../components/Title';
import SectionWrap from '../../components/Section';
import axiosInstance from '../../utils/axios';
import ListItem from './blogComp/ListItem';
import styled from 'styled-components';

const PageNumber = styled.span`
    padding : 5px 15px;
    background: #20477C;
    border-radius : 30px;
    color: #fff;
    background-color: ${(props) => (props.active ? "#20477C" : "transparent")};
    color: ${(props) => (props.active ? "white" : "black")};
`;

function BlogListPage() {
    const [blogs,setBlogs] = useState([]);
    const [totalCnt, setTotalCnt] = useState(0);
    const [page, setPage] = useState(0);
    // const [btnMore, setMore] = useState();
    useEffect(()=>{
        const fatchData = async (page)=>{
            try{
                const res = await axiosInstance.get('/blog',{params:{page}}) //params는 [링그값]뒤에 붙는 값 
                console.log(res.data.blogs);
                console.log(res.data.totalCnt);
                setBlogs(res.data.blogs);
                setTotalCnt(res.data.totalCnt);
            } catch (error) {
                console.log(error);
            }
        }
        fatchData(page);
    },[page])
    const handlePageClick = (pageNumber) => {
        setPage(pageNumber); // 페이지 번호 클릭 시 해당 페이지로 setPage
      };
  return (
    <>
        <SectionWrap>
            <Title titleOne={true}>블로그</Title>
            <Title titleOne={false}>서브타이틀영역</Title>
                {
                    blogs.map((item,i)=>{
                        return (
                            <ListItem item={item} i={i} no={totalCnt - (page * 5 + i)} />
                        )
                    })
                }
            <Button textOnly={true} className={"home, m-auto"} data="test" >더보기</Button>
            <div>
          {Array.from({length: Math.ceil(totalCnt / 5)}, (_, index) => (
            <PageNumber
              className="mb-suto"
              key={index}
              active={index === page}
              onClick={() => handlePageClick(index)}
            >
              {index + 1}
            </PageNumber>
          ))}
        </div>
        </SectionWrap>
        </>
  )
}

export default BlogListPage