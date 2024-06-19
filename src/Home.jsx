import React, { Component } from "react";
import Header from "./Components/Header";
import search from "./images/search.svg";
import cancel from "./images/cancel.svg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
        inputValue: "",
        searchResult: [],
        emailAdresses: ['khalifa@gmail.com', 'allofus@gmail.com', 'thisisanexample@yahoo.com']
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

    handleCancel = () => {
      this.setState({inputValue: ''})
    }
    
    handleSearch = () => {
        const { inputValue, emailAdresses } = this.state
        if (inputValue) {
            const results = emailAdresses.filter(email => email.includes(inputValue));
            this.setState({ searchResult: results });
        } else {
            this.setState({ searchResult: [] });
        }
    }

  render() {
    return (
      <div>
        <section id="home">
          <div className="home_container">
            <Header />
            <div className="header_texts">
              <h1>Design your homes by Elegant Interiors </h1>
              <p>
                Where Beauty and Comfort Seamlessly Come Together to Enhance
                Your Everyday Living Experience
              </p>
              <div className="input_box">
                <img
                  className="icon1"
                  src={search}
                  alt="search"
                  width="12px"
                  onClick={this.handleSearch}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email..."
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
                ></input>
                <img
                  className="icon2"
                  src={cancel}
                  alt="cancel"
                  width="12px"
                  onClick={this.handleCancel}
                />
              </div>
              <div className="search_results">
                {this.state.searchResult.length > 0 ? (
                  <ul>
                    {this.state.searchResult.map((email, index) => (
                      <li key={index}>{email}</li>
                    ))}
                  </ul>
                ) : (
                  this.state.inputValue && <p>No results found</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
