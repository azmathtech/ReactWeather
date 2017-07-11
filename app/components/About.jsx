var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });
//
// var About = function (props) {
//   return (
//     <h3>About Component</h3>
//   )
// };

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="text-center">
        This is a weather application built with React.
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is the
          JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This is used
          to search for weather data by city name using the open weather map API.
        </li>
      </ul>
    </div>
  )
};

// var Examples = (props) => {
//   return (
//     <div>
//       <h1 className="text-center">Examples</h1>
//       <p>Here are a few example locations to try out:</p>
//       <ol>
//         <li>
//           <Link to='/?location=Phoenix'>Phoenix, AZ</Link>
//         </li>
//         <li>
//           <Link to='/?location=Rio'>Rio, Brazil</Link>
//         </li>
//       </ol>
//     </div>
//   );
// };

module.exports = About;
