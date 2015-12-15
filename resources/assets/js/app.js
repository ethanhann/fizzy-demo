'use strict';

(function (axios, Vue) {
    axios.get('/api/PersonListRequest')
    .then(function (response) {
        console.log(response);
        new Vue({
            el: '#app',
            data: {
                people: response.data
            }
        });
    })
    .catch(function (response) {
        console.log(response);
    });
})(axios, Vue);
