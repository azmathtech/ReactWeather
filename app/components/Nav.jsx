var React = require('react');
var {Link, IndexLink} = require('react-router');
var queryString = require('query-string');


var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();

      // var location =  this.search.value;
      // if (location.length > 0) {
      //   this.search.value = '';
      //
      //   var encodedLocation = queryString.stringify({location: location});
      //   window.location.hash = '#/?' + encodedLocation
      // }

      var location = this.refs.searchLocation.value
      var encodedLocation = encodeURIComponent(location);

      if (location.length > 0) {
        this.refs.searchLocation.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
      }
      //alert(location);
  },

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="searchLocation"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;



//<input type="search" placeholder="Search weather by city" ref="searchLocation"/>

//<input type="search" placeholder="Search weather by city" ref={(ref) => this.search = ref}/>
