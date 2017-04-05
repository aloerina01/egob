import request from 'superagent';
import dialogPolyfill from 'dialog-polyfill';
import Chart from 'chart.js';

let fetchTotal = (urls) => {
    request
    .get('http://api.b.st-hatena.com/entry.counts')
    .query({ url: urls[0] })
    .query({ url: urls[1] })
    .withCredentials()
    .end((err, res) => {
        console.log(res);
    });
};

let urls = [
    'https://aloerina01.github.io/',
    'http://www.aocomme.com/'
];

let dialog = document.querySelector('#add-website-dialog');

let onClickAddSiteButton = (event) => {
    event.preventDefault();
    dialog.showModal();
}

let addWebsite = (url) => {
    // valid

    // add
}

(function() {
    let ctx = document.getElementById("bookmark-chart").getContext("2d");
    let data = {
        datasets: [
            {
                data: [70, 30],
                backgroundColor: [
                    "#FF6384",
                    "#dddddd"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#dddddd"
                ]
            }
        ]
    }
    let bookmarkChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: { cutoutPercentage: 97, padding: 10 }
    });

    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    let addWebSiteButton = document.querySelector('#add-website-button');
    addWebSiteButton.addEventListener('click', onClickAddSiteButton, { passive: true });
    
    let dialogSubmitButton = dialog.querySelector('#dialog-submit-button')
    dialogSubmitButton.addEventListener('click', () => {
      dialog.close();
    });
    let dialogCancelButton = dialog.querySelector('#dialog-cancel-button')
    dialogCancelButton.addEventListener('click', () => {
      dialog.close();
    });
})();