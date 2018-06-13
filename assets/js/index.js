var app = new Vue({
    el: '#app',
    data: {
        slide: 1,
        date: null,
        content: {
            smalltittle: 'Legal Design Thinking',
            tittle: 'Meetup #2',
            topic: 'BURENRECHTER',
        }
    },
    methods: {
        returnToday: function () {
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var today = new Date();
            return today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
        }
    },
    created(){
        this.date = this.returnToday();
    }
})