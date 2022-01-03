import React from 'react';
import SearchPartBody from './SearchPartBody';
import InputPartBody from './InputPartBody';
import PostedPartBody from './PostedPartBody';


class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            screenPart:"input"
        }
    }

    
        
    render() {
       
            
       
          


        return (
            <div>
                <SearchPartBody />
                <InputPartBody />
                <PostedPartBody />
            </div>
        );
    }
}
export default Body;