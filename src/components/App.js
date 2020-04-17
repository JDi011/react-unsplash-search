import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends React.Component {

    state = { images : [] };

     onSearchSubmit = async term => {
        // console.log(term);
        const response = await unsplash.get('/search/photos', {
            params:{ query: term }
        });
        // console.log(response.data.results);
        this.setState({ images: response.data.results });
        // .then((response) => {
        //     console.log(response.data.results);
        // });
    }
    
    render(){
        return (
            <div className="ui container" style={{ marginTop: '5em'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images} />
            </div>
        )
    }
};

export default App;