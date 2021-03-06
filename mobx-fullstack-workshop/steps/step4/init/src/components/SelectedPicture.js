import React from 'react';
import {Card, CardMedia} from 'material-ui/Card';
import { observer, inject } from 'mobx-react';

const style = {
    width: '50%',
    margin: 0,
    float: 'left',
    overflow: 'hidden'
}

@inject('store')
@observer
export default class SelectedPicture extends React.Component{
    render(){
       const url = this.props.store.selectedPictureURL;
        return (
            <Card style={style}>
                <CardMedia>
                    {
                      url ? <img src={url} /> : ""
                    }
                </CardMedia>
            </Card>
        )
    } 
}