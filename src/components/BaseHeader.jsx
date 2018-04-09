import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import {
  Grid,
  Responsive,
  Image
} from 'semantic-ui-react'

// 头部
import aboutBg from '../assert/img/aboutBg.png'

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

class BaseHeader extends React.Component {
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
                        name='about'
                      >关于我们</A>
                    </Li>
                  </ul>
                </Li>
              </Ul>
            </div>
            <div style={{backgroundColor: 'rgb( 237, 237, 237 )', overflow: 'hidden'}}>
              <Image src={aboutBg} style={{maxWidth: '100%', float: 'right'}} />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default BaseHeader
