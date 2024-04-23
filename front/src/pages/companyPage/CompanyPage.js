import React from 'react'
import Button from '../../components/Button'
import '../../assets/css/style.scss'
import Title from '../../components/Title'
import SectionWrap from '../../components/Section'

function CompanyPage() {
  return (
    <>
        <SectionWrap>
            <Title titleOne={true}>Company</Title>
            <Title titleOne={false}>서브타이틀영역</Title>
            <Button textOnly={true} className={"home"} data="test" >클릭하세요</Button>
        </SectionWrap>
        </>
  )
}

export default CompanyPage