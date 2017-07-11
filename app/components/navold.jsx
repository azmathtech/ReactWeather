var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>Navigation Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Examples</Link>
//
//
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return (
    <div>
      <h2>Navigation Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Examples</Link>


    </div>
  );
};

module.exports = Nav;





//<a href="#/about">Go To About</a>
//using link rather than a href because of the options availble to use
