import React from 'react'
import BaseMenu from './BaseMenu.jsx'
import {
  Grid,
  Image
} from 'semantic-ui-react'
import aboutBg from '../assert/img/aboutBg.png'

class BaseHeader extends React.Component {
  render () {
    return (
      <Grid columns={1} style={{marginTop: 0}}>
        <Grid.Row style={{padding: 0}}>
          <Grid.Column style={{position: 'relative', padding: 0}}>
            <BaseMenu />
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
