import React from 'react'
import classNames from 'classnames'
import {
  Menu,
  Container,
  Button,
  Icon
} from 'semantic-ui-react'

class BaseMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'home'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    let eleServe = document.getElementById('serve')
    let eleWiki = document.getElementById('wiki')
    let eleAbout = document.getElementById('about')
    let el = document.getElementById('test')
    console.log(el.offsetTop)

    window.addEventListener('scroll', function () {
      if (window.scrollY - el.offsetTop > 0) {
      }
    })
  }

  componentWillUnmount () {

  }

  handleClick (e) {
    // 这种方式不可取
    // const name = e.target.classList.add('active')
    const name = e.target.getAttribute('data-name')
    this.setState({ name })
  }

  render () {
    const fixed = this.props.fixed

    return (
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
        <Container onClick={this.handleClick}>
          <Menu.Item
            as='a'
            data-name='home'
            className={classNames({active: this.state.name === 'home'})}
          >首页</Menu.Item>
          <Menu.Item
            as='a'
            data-name='serve'
            className={classNames({active: this.state.name === 'serve'})}
            href='#serve'
            name='serve'
          >服务说明</Menu.Item>
          <Menu.Item
            as='a'
            data-name='wiki'
            href='#wiki'
            name='wiki'
            className={classNames({active: this.state.name === 'wiki'})}
          >区块链百科</Menu.Item>
          <Menu.Item
            as='a'
            data-name='about'
            href='#about'
            name='about'
            className={classNames({active: this.state.name === 'about'})}
          >关于我们</Menu.Item>
          <Menu.Item position='right'>
            <Button as='a' inverted={!fixed}>Log in</Button>
            <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

const MobileMenu = props => {
  return (
    <Container>
      <Menu inverted pointing secondary size='large'>
        <Menu.Item onClick={props.handleToggle}>
          <Icon name='sidebar' />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button as='a' inverted>Log in</Button>
          <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export { BaseMenu, MobileMenu }
