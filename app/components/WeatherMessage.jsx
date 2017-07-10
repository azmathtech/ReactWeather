var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//       <h3>it is {temp} in {location}</h3>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//     var {temp, location} = props;
//
//     return (
//       <h3>it is {temp} in {location}</h3>
//     );
// };

// destructuring props and just passing in the variables
var WeatherMessage = ({temp, location}) => {
    return (
      <h3>it is {temp} in {location}</h3>
    );
};



module.exports = WeatherMessage;
