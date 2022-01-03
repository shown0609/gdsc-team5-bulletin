import React from 'react';
import HomeModeBody from './HomeModeBody';
import SearchModeBody from './SearchModeBody';
import InputModeBody from './InputModeBody';


class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            screenMode:"input"
        }
    }

    
        
    render() {
        let screen;
        switch (this.state.screenMode){
            case "home":
                screen=(
                    <HomeModeBody />
                );
            break;
            case "search":
                screen=(
                    <SearchModeBody />
                );
            break;
            case "input":
                screen=(
                <div>
                    <InputModeBody />
                </div>
                );
            break;
        }


        return (
            <div>
                こんにちは
                { screen }
            </div>
        );
    }
}
export default Body;