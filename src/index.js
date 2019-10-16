import { router, route, unroute } from 'silkrouter';
import { bro } from './bro'; // here for reference

route('/', function(e) {
  document.querySelector('#main').textContent = 'Home';  
});

route('/about', function(e) {  
  document.querySelector('#main').textContent = 'About'
});

var homeButton = document.getElementById('home-anchor');
homeButton.addEventListener('click', function () {
  router.set({
    route: '/'
  });
});

var aboutButton = document.getElementById('about-anchor');
aboutButton.addEventListener('click', function () {
  router.set({
    route: '/about'
  });
})

router.set({
  route: '/'
});
