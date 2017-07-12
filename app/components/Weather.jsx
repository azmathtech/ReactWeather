var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
//var queryString = require('query-string');

var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
      // location: 'Miami',
      // temp: 88
    }
  },

  handleSearch: function (location) {
    var that = this;

    //debugger;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    //  alert(errorMessage);
    });
    //alert(location);
    // this.setState({
    //   location: location,
    //   temp: 23
    // });

  },

  //this function accesses the url query string so we can capture the location
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  // componentDidMount: function () {
  //   var locationObject = queryString.parse(this.props.location.location);  //location at the end is the string we are searching for
  //
  //   var loc = locationObject.location;
  //
  //   if (loc && loc.length > 0) {
  //     this.handleSearch(location);
  //     window.location.hash = '#/';
  //   }
  // },
  //
  // componentWillReceiveProps: function (newProps) {
  //   var location = queryString.parse(newProps.location.location);  //location at the end is the string we are searching for
  //
  //   var loc = locationObject.location;
  //
  //   if (loc && loc.length > 0) {
  //     this.handleSearch(location);
  //     window.location.hash = '#/';
  //   }
  // },
  // componentWillRecieveProps: function (newProps) {
  //   var location = queryString.parse(newProps.location.location);  //location at the end is the string we are searching for
  //
  //   if (location && location.length > 0) {
  //     this.handleSearch(location);
  //     window.location.hash = '#/';
  //   }
  // },

  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;

//<WeatherMessage temp={temp} location={location}/>

//ljh must be a city or abbreviationn as it works
