import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: '#app',
        data: {
            exchangeRates: null
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(data => this.exchangeRates = data);
            }
        }
    })
})