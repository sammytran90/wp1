var app = new Vue({
    el: '#app',
    data: {
        slide: 1,
        translateContent: 0,
        date: null,
        contents: {
            smalltittle: 'Legal Design Thinking',
            tittle: 'Meetup #2',
            topic: 'BURENRECHTER',
            slides: [
                [
                    {
                        tittle4: [
                            'Participants'
                        ],
                        content: [
                            [
                                'Lawyer,',
                                'university researcher,',
                                'angel investor,',
                                'tutor in ethics,',
                                'designer,',
                                'innovator,',
                                'social entrepreneur'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                'Noise, dirt,',
                                'property borders,',
                                'trees',
                                'relationships,',
                                'construction,',
                                'different use of',
                                'property'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Why burenrechter'
                        ],
                        content: [
                            [
                                'Law processes',
                                'fail to achieve',
                                'win-win solutions'
                            ]
                        ]
                    },
                    {
                        tittle3: [
                            '+ / -',
                            100000
                        ],
                        content: [
                            [
                                'disputes/year',
                                'worldwide'
                            ]
                        ]
                    }
                ],
                [
                    {
                        tittle4: [
                            'Current situation'
                        ],
                        content: [
                            [
                                'Burenrechter has yet',
                                'to be piloted, only',
                                'software developed.'
                            ],
                            [
                                'More focus on helping',
                                'to get solutions on',
                                'street level'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Opportunities'
                        ],
                        content: [
                            [
                                'Pilot with',
                                'municipality and',
                                'not with judges'
                            ],
                            [
                                'Support',
                                'illiterate in',
                                'using the system'
                            ],
                            [
                                'Not only words',
                                'but work also',
                                'with visuals'
                            ],
                            [
                                'Housing',
                                'cooperation',
                                'can play',
                                'important role'
                            ]
                        ]
                    },
                ],
                [
                    {
                        tittle4: [
                            'Challenge #1'
                        ],
                        content: [
                            [
                                'Burenrechter - who could',
                                'support the use and how?'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Solution #1'
                        ],
                        content: [
                            [
                                '- Let municipality offer',
                                'it to their citizens.',
                                '- Support illiterate',
                                'people via (local) NGOs',
                                '- Use startup mentality',
                                'for piloting.'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Challenge #2'
                        ],
                        content: [
                            [
                                'Burenrechter - how to get solutions in',
                                'conflict situations?'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Solution #2'
                        ],
                        content: [
                            [
                                '- Includes forgiveness',
                                'and self-reliance',
                                '- Allow changing minds ',
                                'during the process. ',
                                '- Be a communication ',
                                'tool, not just a process.'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Challenge #3'
                        ],
                        content: [
                            [
                                'Burenrechter - how to ',
                                'improve accessibility ',
                                'to legal process? '
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Solution #3'
                        ],
                        content: [
                            [
                                '- Be a go-to point for ',
                                'questions and support.',
                                '- Focus on',
                                'de-escalating. ',
                                '- Create empathy.',
                                '- Get rewards on ',
                                'social point system'
                            ]
                        ]
                    }
                ],
                [
                    {
                        tittle4: [
                            'Remarks by',
                            'expert'
                        ],
                        content: [
                            [
                                'New insights in',
                                'how to create',
                                'more empathy'
                            ],
                            [
                                'Be forgiving',
                                'during the process'
                            ],
                            [
                                'Do no start',
                                'within the',
                                'legal system'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Participants',
                            'feedback'
                        ],
                        content: [
                            [
                                'Gained xperience',
                                'with design',
                                'thinking'
                            ],
                            [
                                'Did a lot in a',
                                'short period'
                            ],
                            [
                                'Worked with',
                                'people from',
                                'different',
                                'backgrounds'
                            ],
                            [
                                'Enthusiastic',
                                'about the',
                                'potential of',
                                'Burenrechter'
                            ]
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
        },
        nextSlideDemo: function (value) {
            var def = document.querySelector('body').clientWidth;
            return (value - 1) * -1 * def;
        },
        testScroll: function () {
            console.log('scroll');
        }
    },
    created() {
        this.date = this.returnToday();
        window.addEventListener('scroll', this.testScroll);
    },
    mounted() {
        
    }
    // destroyed() {
    //     window.removeEventListener('scroll', this.testScroll);
    // }
})