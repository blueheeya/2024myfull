import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button`
padding : 5px 16px;
display: block;
background: #333;
border-radius : 5px;
color: #fff;
&.text-button{
    border: solid 1px #333;
    background: #fff;
    color: #333;
}
&.smaill {
    font-size: 12px;
}
`;

function Button({children,textOnly,className, ...props}) {
    let cssClasses = textOnly ? "text-button" : "button";
    cssClasses += ' ' +className

  return (
    <ButtonWrap className={cssClasses} {...props} >{children}</ButtonWrap>
  )
}

export default Button