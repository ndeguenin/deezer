import React from 'react';
import './App.css';
import Titles from './Titles.js';
import Navbar from 'react-bootstrap/Navbar'
import './SearchBar.css';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            results : [],
            query: '',
            loading: false,
            total: 0,
            next: '',
            message: ''
        };
    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        if ( ! query ) {
            this.setState({ query, results: [], message: '' } );
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchDeezerApi('', query);
            });
        }
    };

    /**
     * Fetch the search results and update the state with the result.
     *
     * @param {int} currentIndex Updated Page No.
     * @param {String} query Search Query.
     *
     */
    fetchDeezerApi = (currentIndex = '', query ) => {
        const index = currentIndex ? `&index=${currentIndex}` : '';
        const searchUrl = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track?q=${query}${index}`;

        fetch(searchUrl)
            .then(response => response.json())
            .then(
                response => {
                    const resultNotFoundMsg = !response.data.length
                        ? 'There are no more search results. Please try a new search.'
                        : '';
                    this.setState({
                        results: response.data,
                        total: response.total,
                        next: response.next,
                        message: resultNotFoundMsg,
                        loading: false,
                    });
                }
            )
            .catch(error => {
                this.setState({
                    loading: false,
                    message: 'Failed to fetch results.Please check network',
                });
            });
    };


    render(){
        const { query } = this.state;
        return (
              <div className="App">

                <header className="App-header">
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                      <img
                          alt=""
                          src="/deezer.png"
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                      />&nbsp;
                        <span className="deskt">Nicolas de Guenin's test for </span>Deezer webapp
                    </Navbar.Brand>
                  </Navbar>
                </header>

                <div className="content">
                    <div className="searchbox">
                        <h2>Search any Song</h2>
                        <label className="search-label" htmlFor="search-input">
                            <input
                                type="text"
                                value={query}
                                id="search-input"
                                placeholder="Search..."
                                onChange={this.handleOnInputChange}
                            />
                            <i className="fa fa-search search-icon"/>
                        </label>
                    </div>
                    {!this.state.results.length? '' : <Titles results={this.state.results}/>}

                </div>
              </div>
        );
    }
}

export default App;
