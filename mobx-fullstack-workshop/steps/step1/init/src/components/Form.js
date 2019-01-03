import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { observer, inject } from 'mobx-react';
// we have to divide the behaviour of our app from the views


const style = {
    margin: 12,
};

@inject("store") // decorator accepts target and auguments it; store exposed thorugh Provider in App
@observer // auguments react comp, wrapping the comp, on producer change, it triggers reaction
export default class Form extends React.Component{

    search() {
      const termToSearch = this.input.getValue();
      this.props.store.search.requestPics();
    }

    getButton(){
        return (
            <RaisedButton label="SEARCH" primary={true} style={style} onClick={this.search.bind(this)}/>
        )
    }

    getSpinner(){
        return (
            <CircularProgress size={35} thickness={5}/>
        )
    }

    render(){
        return (
            <div>
                <TextField ref={(c) => this.input = c} hintText="e.g. Batman" />
                {
                    this.props.store.search.isSearching ? this.getSpinner() : this.getButton()
                } 
            </div>
        )
    } 
}