import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import {
  Responsive,
  Menu,
  Icon
} from 'semantic-ui-react'

const Ul = styled.ul`
  box-sizing: border-box;
  list-style: none;
  width: 80%;
  margin: 0 auto;
  padding: 0;
`
const Li = styled.li`
  display: inline-block;
  height: 4rem;
  line-height: 2rem;
  width: 33.3%;
  text-align: right;
  vertical-align: middle;
`

const A = styled.a`
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 2px solid transparent;
`

class BaseMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      selectedItem: 'home'
    }
    this.handleClick = this.handleClick.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleClick (e) {
    this.setState({
      selectedItem: e.target.getAttribute('name')
    })
  }

  toggleMenu () {
    this.setState({
      show: !this.state.show
    })
  }

  render () {
    const { selectedItem } = this.state

    return (
      <Ul>
        <Li style={{width: '30%'}}>
          <A style={{fontSize: '1.5rem', color: 'rgb(255,255,255)'}}>
            泰链Tic&nbsp;&nbsp;
            <Responsive as='span' minWidth={1120} style={{fontSize: '1rem', color: 'rgba(255,255,255,0.651)', borderTop: 0}}>
            |&nbsp;&nbsp; 区块链技术落地服务商</Responsive>
          </A>
        </Li>
        <Li style={{width: '70%'}}>
          <Responsive maxWidth={640} style={{position: 'relative', textAlign: 'right'}}>
            <Icon name='sidebar' size='big' color='blue' onClick={this.toggleMenu} style={{paddingTop: '.9rem'}} />
            { this.state.show
              ? <Menu
                pointing
                vertical
                style={{position: 'absolute', top: '2rem', right: '-2rem', width: '7rem', zIndex: 9999}}
                onClick={this.toggleMenu}>
                <Menu.Item
                  as='a'
                  name='home'
                  active={selectedItem === 'home'}
                  content='首页'
                  href='index.html'
                  onClick={this.handleClick}
                />
                <Menu.Item
                  as='a'
                  name='serve'
                  active={selectedItem === 'serve'}
                  content='服务我们'
                  href='index.html#serve'
                  onClick={this.handleClick}
                />
                <Menu.Item
                  as='a'
                  name='about'
                  active={selectedItem === 'about'}
                  content='关于我们'
                  href='about.html'
                  onClick={this.handleClick}
                />
              </Menu> : null }
          </Responsive>
          <Responsive minWidth={640}>
            <ul id='header-ui' style={{listStyle: 'none'}} onClick={this.handleClick}>
              <Li>
                <A
                  name='home'
                  className={classNames({'active': selectedItem === 'home'})}
                  href='index.html'
                >首页</A>
              </Li>
              <Li>
                <A
                  name='serve'
                  className={classNames({'active': selectedItem === 'serve'})}
                  href='index.html#serve'
                >服务说明</A>
              </Li>

              <Li>
                <A
                  name='about'
                  className={classNames({'active': selectedItem === 'about'})}
                  href='about.html'
                >关于我们</A>
              </Li>
            </ul>
          </Responsive>
        </Li>
      </Ul>
    )
  }
}

export default BaseMenu
