import React from 'react'
import {
  Container,
  Segment,
  Grid,
  Header,
  Image,
  Button,
  Divider
} from 'semantic-ui-react'

const BaseContent = () => (
  <React.Fragment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible. Let us delight
              your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src='https://react.semantic-ui.com/assets/images/wireframe/white-image.png'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Header as='h1' textAlign='center' style={{ paddingBottom: '3em' }}>快速上链</Header>
      <Grid doubling columns={3}>
        <Grid.Column textAlign='center'>
          <Image size='medium' spaced='left' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          <Header as='h3' textAlign='center'>根据场景，选择区块链类型</Header>
        </Grid.Column>
        <Grid.Column>
          <Image size='medium' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          <Header as='h3' textAlign='center'>通用模块，按需选择</Header>
        </Grid.Column>
        <Grid.Column>
          <Image size='medium' spaced='left' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          <Header as='h3' textAlign='center'>主流底层，快速搭建</Header>
        </Grid.Column>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0' }} vertical>
      <Header as='h1' textAlign='center' style={{ paddingBottom: '3em' }}>应用落地</Header>
      <Grid doubling columns={4}>
        <Grid.Row>
          <Grid.Column style={{ padding: '1em', boxSizing: 'border-box' }}>
            <div style={{ border: '1px solid black', padding: '1em'}}>
              <Image size='small' spaced='left' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
              <Header as='h3' textAlign='center'>资产数字化</Header>
              <p>将实现资产数字化、实现确权，保障数字资产有效流通</p>
            </div>
          </Grid.Column>
          <Grid.Column style={{ padding: '1em', boxSizing: 'border-box' }}>
            <div style={{ border: '1px solid black', padding: '1em'}}>
              <Image size='small' spaced='left' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
              <Header as='h3' textAlign='center'>商品溯源</Header>
              <p>通过区块链技术，对商品全生命周期上链，信息可追踪</p>
            </div>
          </Grid.Column>
          <Grid.Column style={{ padding: '1em', boxSizing: 'border-box' }}>
            <div style={{ border: '1px solid black', padding: '1em'}}>
              <Image size='small' spaced='left' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
              <Header as='h3' textAlign='center'>征信体系</Header>
              <p>通过区块链技术，保证个人征信信息不可篡改，通过授权查看</p>
            </div>
          </Grid.Column>
          <Grid.Column style={{ padding: '1em', boxSizing: 'border-box' }}>
            <div style={{ border: '1px solid black', padding: '1em'}}>
              <Image size='small' spaced='left' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
              <Header as='h3' textAlign='center'>信息存证</Header>
              <p>通过智能合约，保障电子合同的不可篡改与有效性</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0'}}>
      <Header as='h1' textAlign='center' style={{ paddingBottom: '5em'}}>定制开发</Header>
      <Grid columns={2}>
        <Grid.Row >
          <Grid.Column>
            <Image size='medium' spaced='left' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Header as='h2' textAlign='left'>需求分析</Header>
            <p>我们的团队有着多年的金融、社交、电商、游戏等工作经验，能够快速找到行业定位与痛点，
            利用区块链特性，快速打造区块链项目。</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column>
            <Image size='medium' spaced='left' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Header as='h2' textAlign='left'>产品技术框架设计</Header>
            <p>我们的团队配置全面，包含算法程序员、架构师、JAVA、C++、Android、IOS开发人员，
            从产品、运营、市场等多方面考虑产品框架以及技术框架的设计。</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column>
            <Image size='medium' spaced='left' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Header as='h2' textAlign='left'>快速上线</Header>
            <p>通过多个区块链项目的经验，对已确定的需求可进行快速开发，
            部署自动化测试系统，快速上线应用。</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>快速上链，实现弯道超车</Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the art of doing
          nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
          and worth your attention.
        </p>
        <Button as='a' size='large'>立即咨询</Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
          true.
          It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as='a' size='large'>I'm Still Quite Interested</Button>
      </Container>
    </Segment>
  </React.Fragment>
)

export default BaseContent
