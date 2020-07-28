import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: '#app',
        data: {
            exchangeRates: null,
            selectedCurrency: null,
            euros: 1,
            exchangedRate: 0
        },
        mounted() {
            this.fetchData();
        },
        computed: {
            // setExchangedRate: function() {
            //     this.exchangedRate === this.selectedCurrency
            // }
        },
        methods: {
            fetchData() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(data => this.exchangeRates = data);
            },
            exchangeToForeign() {
                console.log(this.selectedCurrency);
                this.exchangedRate = (this.euros * this.selectedCurrency);
                return this.exchangedRate
            },
        }
    })
})