import React from 'react'
import {
  Segment,
  Container,
  Grid,
  List,
  Header
} from 'semantic-ui-react'

const BaseFooter = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Header inverted as='h4' content='快链' />
            <List link inverted>
              <List.Item as='a'>区块链技术落地服务商</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as='h4' content='联系我们' />
            <List link inverted>
              <List.Item as='a'>手机：1555916726</List.Item>
              <List.Item as='a'>邮箱：469003865@qq.com</List.Item>
              <List.Item as='a'>地址：厦门市湖里区高新技术园恒辉大夏2楼</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h4' inverted>最新信息都在这里</Header>
            <p>二维码扫描图</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default BaseFooter
