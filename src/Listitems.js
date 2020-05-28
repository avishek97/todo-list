import React from 'react';
class Listitems extends React.Component{
    
    render()
    {
    let newarr=this.props.abc ? this.props.abc.map((item,index)=><li>{item}</li>) : <li></li>;
        return(
            <div>
                <ol>
              {newarr}
              </ol>
            </div>
        )
    }
}
export default Listitems;