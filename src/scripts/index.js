import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './customelements/custom-header';
import './customelements/custom-jumbotron';
import './customelements/custom-footer';
import swRegister from './utility/service_worker_register';
import App from './views/app';



const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#maincontent'),
    // main: document.querySelector('main')

});
  
window.addEventListener('hashchange', () => {
    app.renderPage()
});
  
window.addEventListener('load', () => {
    app.renderPage()
    swRegister()
});