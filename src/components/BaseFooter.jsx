import React from 'react'
import {
  Segment,
  Container,
  Grid,
  List,
  Header,
  Image
} from 'semantic-ui-react'
import code from '../../src/assert/img/code.jpeg'

const BaseFooter = () => (
  <div style={{overflow: 'hidden'}}>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='泰链Tic' />
              <List link inverted>
                <List.Item>区块链技术落地服务商</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='联系我们' />
              <List link inverted>
                <List.Item>邮箱：S@banketime.com</List.Item>
                <List.Item>地址：厦门市湖里区高新技术园恒辉大夏2楼</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as='h4' inverted>关注我们</Header>
              <Image size='tiny' src={code} />
              <p style={{color: 'rgba(255,255,255,.5)', paddingTop: '.7rem'}}>最新的消息都在这里</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '4rem',
      background: '#1b1c1d',
      borderTop: '1px solid #333'
    }}>
      <p style={{ width: '80%', textAlign: 'center', color: 'rgba(255,255,255,.5)'}}>Copyright&nbsp;@&nbsp;2018&nbsp;厦门泰链科技有限公司&nbsp;闽ICP备16016214号-1</p>
    </div>
  </div>
)

export default BaseFooter
