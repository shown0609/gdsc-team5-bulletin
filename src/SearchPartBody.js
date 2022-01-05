import React from 'react';


class SearchPartBody extends React.Component{
    constructor(props) {
        super(props);
        this.state= {isSearchOpen: false}
    }

    handleOpenSearch() {

        this.setState({ isSearchOpen : true} );

    }

    handleCloseSearch() {

        this.setState({ isSearchOpen : false} );

    }

    render(){
        
        let searchBox;

        if(this.state.isSearchOpen){
            searchBox=( 
                <div>
                    <input 
                        value = "文字を入力してください"
                    />
                    <button onClick= { ()=>this.handleCloseSearch() }>
                        検索ボックスを閉じる
                    </button>
                </div>
            );
        }
        return(
            <div>
                <button
                    onClick={()=>{ this.handleOpenSearch()}}
                >
                    検索
                </button>
                <div>
                    { searchBox }
                </div>
            </div>
        );
    }
}
export default SearchPartBody;