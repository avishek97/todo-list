import React from 'react';
class Input extends React.Component{
    
    render()
    {
        return(
            <div>
                <input type="text" value={this.props.clear} onChange={this.props.handleType}></input>
                <button onClick={this.props.handleClick}>Add</button>
                <button onClick={this.props.handleDelete}>Add</button>
            </div>
        )
    }
}
export default Input;