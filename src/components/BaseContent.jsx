import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import {
  Responsive,
  Grid,
  Header,
  Image,
  Button
} from 'semantic-ui-react'
import config from '../assert/img/config.jpg'
import module from '../assert/img/module.jpg'
import bottomArch from '../assert/img/bottomArch.png'
// 应用落地
import money from '../assert/img/money.png'
import shop from '../assert/img/shop.png'
import credit from '../assert/img/credit.gif'
import info from '../assert/img/info.png'
import identify from '../assert/img/identify.png'
import safe from '../assert/img/safe.png'
import social from '../assert/img/social.png'
import game from '../assert/img/game.png'
// 定制开发
import developBg from '../assert/img/developBg.png'
import needs from '../assert/img/needs.png'
import tech from '../assert/img/tech.png'
import quick from '../assert/img/quick.png'
// 案例
import platform from '../assert/img/platform.jpg'
import unionChain from '../assert/img/unionChain.jpg'
import global from '../assert/img/global.jpg'
// 咨询
import consulteBg from '../assert/img/consulteBg.png'
import './baseContent.css'
// 头部
import headerBg from '../assert/img/headerBg.jpg'

const HeaderTitle = styled.h1`
  display: inline-block;
  font-size: 2.2rem;
  margin-bottom: 3em;
  color: rgb( 14, 14, 14 );
  border-bottom: 2px solid rgb( 47, 84, 235 );
  padding-bottom: .4em;
`

const SubTitle = styled.h2`
  font-size: 1.3rem;
  color: rgb(0,0,0);
  text-align: ${props => props.textAlign};
`

const SubContent = styled.p`
  font-size: 1rem;
  color: rgba(0,0,0,.851);
  text-align: ${props => props.textAlign};
`
const P = styled.p`
  text-align: center;
  color: rgb( 148, 155, 168 );
`
const CusTomP = styled.p`
  display: -webkit-box;
  color: rgb(255, 255, 255);
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

const ImgWrapper = styled.div`
  padding: 1em 1em;
  text-align: center;
`
const Ul = styled.ul`
  list-style: none;
  width: 80%;
  margin: 0 auto;
`
const Li = styled.li`
  display: inline-block;
  width: 33.3%;
  text-align: left;
  vertical-align: middle;
`

const A = styled.a`
  display: inline-block;
  padding-top: 10px;
  border-top: 2px solid transparent;
`

class BaseContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 'home'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({
      selected: e.target.getAttribute('data-selectedtab')
    })
  }
  render () {
    return (
      <React.Fragment>
        <Grid columns={1} style={{marginTop: 0}}>
          <Grid.Row style={{paddingTop: 0}}>
            <Grid.Column style={{position: 'relative', padding: 0}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: '100%', zIndex: 1000}}>
                <Ul>
                  <Li style={{width: '30%'}}>
                    <A style={{fontSize: '1.5rem', color: 'rgb(255,255,255)'}}>
                        趣块&nbsp;&nbsp;<Responsive as='span' minWidth={1120} style={{fontSize: '1rem', color: 'rgba(255,255,255,0.651)', borderTop: 0}}>
                          |&nbsp;&nbsp; 全国首家区块链全栈技术服务上</Responsive>
                    </A>
                  </Li>
                  <Li style={{width: '70%'}}>
                    <ul id='header-ui' style={{listStyle: 'none'}} onClick={this.handleClick}>
                      <Li>
                        <A
                          data-selectedtab='home'
                          className={classNames({'active': this.state.selected === 'home'})}
                          href='index.html'
                        >首页</A>
                      </Li>
                      <Li>
                        <A
                          data-selectedtab='serve'
                          className={classNames({'active': this.state.selected === 'serve'})}
                          href='index.html#serve'
                          name='serve'
                        >服务说明</A>
                      </Li>

                      <Li>
                        <A
                          data-selectedtab='about'
                          className={classNames({'active': this.state.selected === 'about'})}
                          href='about.html'
                        >关于我们</A>
                      </Li>
                    </ul>
                  </Li>
                </Ul>
              </div>
              <Image src={headerBg} style={{maxWidth: '100%'}} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <a id='serve' name='serve'>''</a>
        <div style={{ padding: '4em 1em' }}>
          <div style={{textAlign: 'center'}}>
            <HeaderTitle>快速上链</HeaderTitle>
          </div>
          <Grid doubling columns={3} style={{maxWidth: '900px', margin: 'auto', marginTop: '2rem'}}>
            <Grid.Column
              textAlign='center'
              style={{padding: '10px'}}
            >
              <div className='imgWrap' style={{boxShadow: '0 0 10px 0.2rem rgba(0,123,255,.25)', padding: '1rem 0', textAlign: 'center'}} >
                <div style={{textAlign: 'center'}}>
                  <Image size='tiny' style={{display: 'inline-block'}} src={config} />
                </div>
                <SubTitle textAlign='center'>场景配置</SubTitle>
                <SubContent textAlign='center'>根据场景，选择区块链类型</SubContent>
              </div>
            </Grid.Column>
            <Grid.Column
              style={{padding: '10px'}}
            >
              <div className='imgWrap' style={{boxShadow: '0 0 10px 0.2rem rgba(0,123,255,.25)', padding: '1rem 0'}}>
                <div style={{textAlign: 'center'}}>
                  <Image size='tiny' src={module} style={{display: 'inline-block'}} />
                </div>

                <SubTitle textAlign='center'>通用模块</SubTitle>
                <SubContent textAlign='center'>通用模块，按需选择</SubContent>
              </div>
            </Grid.Column>
            <Grid.Column
              style={{padding: '10px'}}
            >
              <div className='imgWrap' style={{boxShadow: '0 0 10px 0.2rem rgba(0,123,255,.25)', padding: '1rem 0'}}>
                <div style={{textAlign: 'center'}}>
                  <Image size='tiny' spaced='left' src={bottomArch} style={{display: 'inline-block'}} />
                </div>
                <SubTitle textAlign='center'>底层架构</SubTitle>
                <SubContent textAlign='center'>主流底层，快速搭建</SubContent>
              </div>
            </Grid.Column>
          </Grid>
        </div>

        <div style={{ padding: '4em 1em' }}>
          <div style={{textAlign: 'center'}}>
            <HeaderTitle>应用落地</HeaderTitle>
          </div>
          <Grid doubling columns={4} style={{maxWidth: '900px', margin: 'auto'}}>
            <Grid.Row>
              <Grid.Column style={{ padding: '1em 2em', boxSizing: 'border-box' }}>
                <ImgWrapper>
                  <Image size='tiny' src={money} style={{display: 'inline-block'}} />
                  <Header as='h3' textAlign='center'>资产数字化</Header>
                  <P>将实现资产数字化、实现确权，保障数字资产有效流通</P>
                </ImgWrapper>
              </Grid.Column>
              <Grid.Column style={{ padding: '1em', boxSizing: 'border-box' }}>
                <ImgWrapper>
                  <Image size='tiny' src={shop} style={{display: 'inline-block'}} />
                  <Header as='h3' textAlign='center'>商品溯源</Header>
                  <P>通过区块链技术，对商品全生命周期上链，信息可追踪</P>
                </ImgWrapper>
              </Grid.Column>
              <Grid.Column style={{ padding: '1em 2em', boxSizing: 'border-box' }}>
                <ImgWrapper>
                  <Image size='tiny' src={credit} style={{display: 'inline-block'}} />
                  <Header as='h3' textAlign='center'>征信体系</Header>
                  <P>通过区块链技术，保证个人征信信息不可篡改，通过授权查看</P>
                </ImgWrapper>
              </Grid.Column>
              <Grid.Column style={{ padding: '1em 2em', boxSizing: 'border-box' }}>
                <ImgWrapper>
                  <Image size='tiny' src={info} style={{display: 'inline-block'}} />
                  <Header as='h3' textAlign='center'>信息存证</Header>
                  <P>通过智能合约，保障电子合同的不可篡改与有效性</P>
                </ImgWrapper>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column style={{ padding: '1em 2em', boxSizing: 'border-box' }}>
                <ImgWrapper>
                  <Image size='tiny' src={identify} style={{display: 'inline-block'}} />
                  <Header as='h3' textAlign='center'>数字身份</Header>
                  <P>通过区块链技术打造用户数字身份作为数字通信证</P>
                </ImgWrapper>
              </Grid.Column>
              <Grid.Column style={{ padding: '1em 2em', boxSizing: 'border-box' }}>
                <ImgWrapper>
                  <Image size='tiny' src={safe} style={{display: 'inline-block'}} />
                  <Header as='h3' textAlign='center'>信息安全</Header>
                  <P>文件上链,信息安全无法篡改,可信背书</P>
                </ImgWrapper>
              </Grid.Column>
              <Grid.Column style={{ padding: '1em 2em', boxSizing: 'border-box' }}>
                <ImgWrapper>
                  <Image size='tiny' src={social} style={{display: 'inline-block'}} />
                  <Header as='h3' textAlign='center'>匿名社交</Header>
                  <P>通过区块链技术，对用户信息进行加密从而实现匿名社交</P>
                </ImgWrapper>
              </Grid.Column>
              <Grid.Column style={{ padding: '1em 2em', boxSizing: 'border-box' }}>
                <ImgWrapper>
                  <Image size='tiny' src={game} style={{display: 'inline-block'}} />
                  <Header as='h3' textAlign='center'>游戏</Header>
                  <P>通过区块链技术,实现虚拟游戏中的养成、交易、繁殖于竞技已经加密</P>
                </ImgWrapper>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div style={{ padding: '4em 1em' }}>
          <div style={{textAlign: 'center'}}>
            <HeaderTitle>定制开发</HeaderTitle>
          </div>
          <Grid
            columns={3}
            style={{background: `url(${developBg})`, marginTop: '2rem'}}
          >
            <Grid.Row
              style={{maxWidth: '900px', margin: 'auto', padding: 0}}
            >
              <Grid.Column className='exam-item'>
                <ImgWrapper>
                  <Image size='tiny' src={needs} style={{display: 'inline-block'}} />
                  <Header as='h2' textAlign='center'>需求分析</Header>
                  <CusTomP>我们的团队有着多年的金融、社交、电商、游戏等工作经验，能够快速找到行业定位与痛点，
                  利用区块链特性，快速打造区块链项目。</CusTomP>
                </ImgWrapper>
              </Grid.Column>
              <Grid.Column className='exam-item'>
                <ImgWrapper>
                  <Image size='tiny' src={tech} style={{display: 'inline-block'}} />
                  <Header as='h2' textAlign='center'>产品技术框架设计</Header>
                  <CusTomP>我们的团队配置全面，包含算法程序员、架构师、JAVA、C++、Android、IOS开发人员，
                  从产品、运营、市场等多方面考虑产品框架以及技术框架的设计。</CusTomP>
                </ImgWrapper>
              </Grid.Column>
              <Grid.Column className='exam-item' >
                <ImgWrapper>
                  <Image size='tiny' src={quick} style={{display: 'inline-block'}} />
                  <Header as='h2' textAlign='center'>快速上线</Header>
                  <CusTomP>通过多个区块链项目的经验，对已确定的需求可进行快速开发，
                  部署自动化测试系统，快速上线应用。</CusTomP>
                </ImgWrapper>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </div>

        <div style={{ padding: '4em 1em 0 1em' }}>
          <div style={{textAlign: 'center'}}>
            <HeaderTitle>案例</HeaderTitle>
          </div>
          <Grid stackable columns={3} style={{maxWidth: '960px', margin: 'auto', marginTop: '2rem', paddingBottom: '3rem'}}>
            <Grid.Column
              textAlign='center'
              style={{padding: '10px'}}
            >
              <div className='imgWrap' style={{boxShadow: '0 0 10px 0.2rem rgba(0,123,255,.25)', padding: '2rem', textAlign: 'center'}} >
                <Image size='small' src={platform} style={{display: 'inline-block'}} />
                <SubTitle textAlign='center'>全球数字化资产交易平台</SubTitle>
                <SubContent textAlign='left'>链的类型：公链</SubContent>
                <SubContent textAlign='left'>功能包括：账号管理、身份认证、宝贝上传、发行TOKEN、交易TOKEN、
                  用户管理、渠道管理、区块管理、合约管理、数据分析、系统设置</SubContent>
              </div>
            </Grid.Column>
            <Grid.Column style={{padding: '10px'}}>
              <div className='imgWrap' style={{boxShadow: '0 0 10px 0.2rem rgba(0,123,255,.25)', padding: '2rem', textAlign: 'center'}}>
                <Image size='small' src={unionChain} style={{display: 'inline-block'}} />
                <SubTitle textAlign='center'>全球中医联盟链</SubTitle>
                <SubContent textAlign='left'>链的类型：联盟链</SubContent>
                <SubContent textAlign='left'>功能包括：账号管理、身份认证、医生管理、发行TOKEN、交易TOKEN、
                  区块管理、合约管理、据分析、系统设置</SubContent>
              </div>
            </Grid.Column>
            <Grid.Column
              style={{padding: '10px'}}
            >
              <div className='imgWrap' style={{boxShadow: '0 0 10px 0.2rem rgba(0,123,255,.25)', padding: '2rem', textAlign: 'center'}}>
                <Image size='small' src={global} style={{display: 'inline-block'}} />
                <SubTitle textAlign='center'>全球XXXXXX</SubTitle>
                <SubContent textAlign='left'>链的类型： 私链</SubContent>
                <SubContent textAlign='left'>功能包括：账号管理、身份认证、医生管理、发行TOKEN、
                  交易TOKEN、区块管理、合约管理、数据分析、系统设置</SubContent>
              </div>
            </Grid.Column>
          </Grid>

          <Grid columns={1}>
            <Grid.Column style={{ background: `url(${consulteBg})`, padding: '4rem 0' }}>
              <Header as='h2' textAlign='center' style={{color: 'rgb(255,255,255)'}}>快速上链，实现弯道超车</Header>
              <div style={{textAlign: 'center'}}>
                <Button as='a' inverted>立即咨询</Button>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default BaseContent
