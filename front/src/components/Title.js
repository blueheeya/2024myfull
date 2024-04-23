import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.h3`
margin-bottom : 20px;
padding: 10px 16px;
font-size : 2em;
font-weight :bold;
color: #fff;
background :#20477C;
border-radius : 10px;
&.subTitle {
    
    font-size : 1.2em;
    color: #333;
    border : none;
    background:none;
    border-bottom : solid 2px #BCC8D8;
    border-radius : 0;
}
`
function Title({children,titleOne}) {
let titleClass = titleOne ? "title" :"subTitle"
  return (
    <div>
        <TitleWrap className={titleClass}>{children}</TitleWrap>
    </div>
  )
}

export default Title