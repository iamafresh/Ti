import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import BaseFooter from './components/BaseFooter.jsx'
import BaseHeader from './components/BaseHeader.jsx'

const Title = styled.h2`
  text-align: center;
  padding: 2rem 0;
  color: rgb( 38, 38, 38 );
`
const SubContent = styled.p`
  font-size: 1rem;
  color: rgb( 38, 38, 38 );
  text-align: center;
  padding-bottom: 3rem;
`
class AboutApp extends React.Component {
  render () {
    return (
      <div>
        <BaseHeader />
        <div style={{width: '80%', margin: '0 auto', padding: '1rem'}}>
          <p>您的位置&nbsp;&nbsp;首页>关于我们</p>
          <Title>公司简介</Title>
          <SubContent>泰链科技是一家专业提供区块链技术落地服务的开发型机构。
          旨在为有志于区块链领域的企业提供区块链+业务的技术解决方案。
          包括基于现有平台的私链、联盟链应用落地；自主公链开发，
          区块链上下游衍生功能配置；定制化需求实现等业务专注研发，
            不断创新，用心服务专注区块链领域研究，十几年扎实的技术开发经验，
            以用户为中心，简约而极致。“简约”追求的是产品外观简洁化，
            流程简单化，而“极致”是让产品的用户体验和产品服务超越用户的预期</SubContent>
        </div>
        <div style={{backgroundColor: 'rgb( 237, 237, 237 )'}}>
          <div style={{width: '80%', margin: '0 auto', padding: '1rem'}}>
            <Title>企业文化</Title>
            <SubContent>专注研发、不断创新、用心服务</SubContent>
            <SubContent>以用户为中心，简约而极致。“简约”追求的是产品外观简洁化，
            流程简单化，而“极致”是让产品的用户体验和产品服务超越用户的预期。</SubContent>
          </div>
        </div>
        <BaseFooter />
      </div>
    )
  }
}

export default AboutApp
