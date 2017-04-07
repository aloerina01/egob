import Vue from 'vue';
import router from './router';
import App from './App';

new Vue({
    router,
    App,
    render: (h) => {
        return h(App);
    }
}).$mount('#app');







// import request from 'superagent';
// import { Promise } from 'es6-promise'
// import dialogPolyfill from 'dialog-polyfill';
// import Chart from 'chart.js';

// let fetchTotal = (urls) => {
//     return new Promise((resolve, reject) => {
//         request
//         .get('http://api.b.st-hatena.com/entry.counts')
//         .query({ url: urls[0] })
//         .query({ url: urls[1] })
//         .withCredentials()
//         .end((err, res) => {
//             resolve(75);
//         });
//     });
    
// };

// let urls = [
//     'https://aloerina01.github.io/',
//     'http://www.aocomme.com/'
// ];

// let dialog = document.querySelector('#add-website-dialog');

// let onClickAddSiteButton = (event) => {
//     event.preventDefault();
//     dialog.showModal();
// }

// let addWebsite = (url) => {
//     // valid

//     // add
// }

// let renderGraph = (percentage) => {
//     let ctx = document.getElementById("bookmark-chart").getContext("2d");
//     let data = {
//         datasets: [
//             {
//                 data: [percentage, 100 - percentage],
//                 backgroundColor: [
//                     "#FF6384",
//                     "#dddddd"
//                 ],
//                 hoverBackgroundColor: [
//                     "#FF6384",
//                     "#dddddd"
//                 ]
//             }
//         ]
//     }
//     let bookmarkChart = new Chart(ctx, {
//         type: 'pie',
//         data: data,
//         options: { cutoutPercentage: 97, padding: 10 }
//     });
// }

// let renderCurrentCount = (count) => {
//     document.querySelector('#current-count').innerHTML = count;
// }

// (function() {
//     fetchTotal(urls).then((count) => {
//         renderCurrentCount(count);
//         // TODO: calculate percentage
//         renderGraph(count);
//     });
    

//     if (!dialog.showModal) {
//         dialogPolyfill.registerDialog(dialog);
//     }
//     let addWebSiteButton = document.querySelector('#add-website-button');
//     addWebSiteButton.addEventListener('click', onClickAddSiteButton, { passive: true });
    
//     let dialogSubmitButton = dialog.querySelector('#dialog-submit-button')
//     dialogSubmitButton.addEventListener('click', () => {
//       dialog.close();
//     });
//     let dialogCancelButton = dialog.querySelector('#dialog-cancel-button')
//     dialogCancelButton.addEventListener('click', () => {
//       dialog.close();
//     });
// })();