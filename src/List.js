import React from 'react';
import Listitem from './Listitems';
class List extends React.Component{
    
    render()
    {
        return(
            <div>
                <Listitem delete={this.props.delete} abc={this.props.item}></Listitem>
        </div>
        )
    }
}
export default List;