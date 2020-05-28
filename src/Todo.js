import React from 'react';
import Input from './Input';
import List from './List';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { store } from './index';


const xyz=(text)=>{
    return{
        type:"ADD_TODO",
        text:text,
    }
}
class Todo extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={a:""};
    }
    type=(event)=>{
        let k=event.target.value;
        this.setState({a:k})
        
    }
   

    update=()=>{
        alert(this.state.a);
    this.props.xyz(this.state.a);
       
  //store.dispatch({type:"ADD_TODO",text:this.state.a});
        
    }
    
    // Delete=(index)=>{
        
    // }
    render()
    {
        console.log(this.props);
        console.log(this.props.todoarr);
        return(
            <div>
               
                <Input clear={this.state.a} handleType={this.type} handleClick={this.update} handleDelete={this.Delete}></Input>
                <List item={this.props.todoarr} delete={this.Delete}></List>
            </div>
        )
    }
}


const mapDispatchToProps=(dispatch)=>{
   return bindActionCreators({xyz},dispatch);
}


const mapStateToProps=(state)=>{
    return{
        todoarr: state.arr,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);

