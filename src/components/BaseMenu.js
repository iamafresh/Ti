import React from 'react'
import {
  Menu,
  Container,
  Button,
  Icon
} from 'semantic-ui-react'

const BaseMenu = props => {
  const fixed = props.fixed

  return (
    <Menu
      fixed={fixed ? 'top' : null}
      inverted={!fixed}
      pointing={!fixed}
      secondary={!fixed}
      size='large'
    >
      <Container>
        <Menu.Item as='a' active>首页</Menu.Item>
        <Menu.Item as='a'>服务说明</Menu.Item>
        <Menu.Item as='a'>区块链百科</Menu.Item>
        <Menu.Item as='a'>关于我们</Menu.Item>
        <Menu.Item position='right'>
          <Button as='a' inverted={!fixed}>Log in</Button>
          <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
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
