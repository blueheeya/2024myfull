import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button`
padding : 5px 16px;
display: block;
background: #20477C;
border-radius : 20px;
color: #fff;
&.text-button{
    border: solid 1px #8BA6C9;
    background: #fff;
    color: #8BA6C9;
}
&.text-button:hover {
    border: solid 1px #20477C;
    color: #20477C;
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