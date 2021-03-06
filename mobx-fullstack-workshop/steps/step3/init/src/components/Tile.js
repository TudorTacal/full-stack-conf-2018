import React from 'react';
import {GridTile} from 'material-ui/GridList';
import { observer, inject } from 'mobx-react';

const styles = {
    gridTile: {
        cursor: 'pointer'
    }
}
@inject('store')
@observer
export default class Tile extends React.Component{
    selectedPic(e) {
      this.props.store.photoGallery.selectedPicture(this.props.data.id);
    }
    render(){
        return (
            <GridTile style={styles.gridTile}
              onClick={this.selectedPic.bind(this)}
              title={this.props.data.title}
              >
            <img src={this.props.data.iamge} />
            </GridTile>
        )
    }
}