// function getTempCallBack (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack ('Phoenix', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Phoenix').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

//Challenge Area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & B need to be numbers');
    }
  });
}

addPromise (2, 3).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise('mike', 9).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('This should appear', err);
});
