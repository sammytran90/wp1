var app = new Vue({
    el: '#app',
    data: {
        slide: 1,
        date: null,
        contents: {
            smalltittle: 'Legal Design Thinking',
            tittle: 'Meetup #2',
            topic: 'BURENRECHTER',
            slides: [
                [
                    {
                        tittle: 'Participants',
                        content: [
                            'Lawyer,',
                            'university researcher,',
                            'angel investor,',
                            'tutor in ethics,',
                            'designer,',
                            'innovator,',
                            'social entrepreneur'
                        ]
                    },
                    {
                        content: [
                            'Noise, dirt,',
                            'property borders,',
                            'trees',
                            'relationships,',
                            'construction,',
                            'different use of property'
                        ]
                    },
                    {
                        tittle: 'Why burenrechter',
                        content:[
                            'Law processes',
                            'fail to achieve',
                            'win-win solutions'
                        ]
                    }
                ]
            ]

        }
    },
    methods: {
        returnToday: function () {
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var today = new Date();
            return today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
        }
    },
    created() {
        this.date = this.returnToday();
    }
})