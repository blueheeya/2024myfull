import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from "../../utils/axios";
import Button from '../../components/Button';
import '../../assets/css/style.scss';
import Title from '../../components/Title';
import SectionWrap from '../../components/Section';
import styled from 'styled-components';
import CommentWrite from './blogComp/CommentWrite';
import {useSelector} from 'react-redux'
import CommentList from './blogComp/CommentList';

const CommentWrap = styled.div `
    background : #eee;
    padding: 10px;
`
const ViewBody = styled.div`
    padding: 20px;
`
function BlogViewPage() {
    const {blogId} = useParams();
    const [blogCon, setBlogCon] = useState(null);
    const [comment, setComment] = useState([]);
  
    const userData = useSelector((state) => state.user?.userData);
  
    useEffect(() => {
      async function loadBlogCon() {
        try {
          const res = await axiosInstance.get(`/blog/${blogId}`);
          setBlogCon(res.data.blog);
        } catch (error) {}
      }
      loadBlogCon();
    }, []);
  
    useEffect(() => {
      async function comment() {
        try {
          const res = await axiosInstance.get(`/blog/${blogId}/comment`);
          console.log(res.data.comment);
          setComment(res.data.comment);
        } catch (error) {
          console.log(error);
        }
      }
      comment();
    }, []);
  
    async function handleInserComment(commentContent) {
      // alert(commentContent);
      const commentData = {
        content: commentContent,
        userId: userData.user.id,
      };
      console.log(commentData);
  
      try {
        const res = axiosInstance.post(`/blog/${blogId}/comment`, commentData);
        console.log(res.data);
      } catch (error) {}
    }
  
    if (!blogCon) return null;
  return (
    <>
    <SectionWrap>
        <Title titleOne={true}>블로그</Title>
        <Title titleOne={false}>{blogCon.title}</Title>
        <ViewBody>
            <li>{blogCon.content}</li>
        </ViewBody>
        <CommentWrap>
            <h3>댓글</h3>
            <h5>댓글작성</h5>
            <CommentWrite onSubmit={handleInserComment} />

                {comment.length === 0 ? (
                    <p>댓글없네요!!!!!</p>
                ) : (
                    comment.map((item, idx) => {
                    return <CommentList comment={item} key={idx} />;
                    })
                )}
        </CommentWrap>
        <Button textOnly={true} className={"home, m-auto"} data="test" >목록</Button>
    </SectionWrap>
    </>
  )
}

export default BlogViewPage