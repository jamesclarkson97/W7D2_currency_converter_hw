import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: '#app',
        data: {
            exchangeRates: null,
            selectedCurrency: null,
            euros: 0,
            exchangedRate: 0
        },
        mounted() {
            this.fetchData();
        },
        computed: {
            
        },
        methods: {
            fetchData() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(data => this.exchangeRates = data);
            },
            exchangeToForeign() {
                this.exchangedRate = (this.euros * this.selectedCurrency);
            },
            exchangeToEuros() {
                this.euros = (this.exchangedRate / this.selectedCurrency);
            }
        }
    })
})