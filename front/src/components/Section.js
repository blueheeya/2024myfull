import React from 'react'
import styled from 'styled-components';

const SectionBox = styled.section`
padding: 50px;
`
function SectionWrap({children}) {
  return (
    <SectionBox className=' container m-auto'>{children}</SectionBox>
  )
}

export default SectionWrap