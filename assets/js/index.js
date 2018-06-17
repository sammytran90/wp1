var app = new Vue({
    el: '#app',
    data: {
        slide: 1,
        translateContent: 0,
        hover: false,
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
                            [
                                'Wh',
                                'y burenrechter?'
                            ]
                        ],
                        content: [
                            [
                                [
                                    'Law',
                                    ' processes'
                                ],
                                [
                                    'fai',
                                    'l to achieve'
                                ],
                                [
                                    'win',
                                    '-win solutions'
                                ]
                            ]
                        ]
                    },
                    {
                        tittle3: [
                            '+/-',
                            '100,000'
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
                                '- Focus on de-escalating.',
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
            var def = document.querySelector('.wrapper__slide-1').clientWidth;
            return (value - 1) * -1 * def;
        },
        contentAnimation: function (element) {
            // clear all other slide visual
            var allEl = document.querySelectorAll('.contents > [class*="slide-"]');
            allEl.forEach(function (v) {
                var classArr = v.className.split(" ");
                var originalClass = classArr.filter(v => v.indexOf('slide-') != -1);
                v.className = originalClass[0];
            });
            var wrapper = document.querySelector('.wrapper');
            var wrapperOldClass = wrapper.className;
            var wrapperNewClass = wrapperOldClass.split(" ");
            wrapperNewClass.push('sliding');
            wrapperNewClass = wrapperNewClass.join(" ");
            wrapper.className = wrapperNewClass;
            setTimeout(async function () {
                wrapper.className = wrapperOldClass;
            }, 700)

            // set visual for current slide
            var parent = this.$refs[`${element}`];
            var parentName = parent.nodeName + '.' + parent.className;
            var querrySeletorAl = parentName + ' .contents > [class*="slide-"]';
            var allElement = document.querySelectorAll(querrySeletorAl);
            allElement.forEach(function (a) {
                a.className += ' visual';
            })
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

    },
    ready() {
    }
    // destroyed() {
    //     window.removeEventListener('scroll', this.testScroll);
    // }
})