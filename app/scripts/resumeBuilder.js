/* eslint no-undef: [2, { typeof: true }] */
/* global ko */
var ViewModel = {
    bio: {
        name: 'David Castillo-Sanchez',
        role: 'Web developer',
        contacts: {
            mobile: '+5219211064060',
            email: '<a href="mailto:davcs86@gmail.com" target="_blank">davcs86@gmail.com</a>',
            github: '<a href="http://mx.linkedin.com/in/davcs86" target="_blank">@davcs86</a>',
            twitter: '@davcs86',
            location: 'Villahermosa, MX'
        },
        welcomeMessage: 'Welcome to my resume!',
        skills: [ 'html5', 'css3', 'sass', 'bootstrap-3', 'jquery', 'knockoutjs' ],
        biopic: 'images/me.jpg'
    },
    education: {
        schools: [
            {
                name: 'Centro de Investigación en Química Aplicada',
                location: 'Saltillo, MX',
                degree: 'Master degree',
                majors: [
                    'Polymer science and technology',
                    'Polymer synthesis'
                ],
                dates: 2012,
                url: 'http://ciqa.mx/english'
            },
            {
                name: 'Universidad Veracruzana',
                location: 'Coatzacoalcos, MX',
                degree: 'Bachelor degree',
                majors: [
                    'Chemical engineering',
                    'Oil process design'
                ],
                dates: 2010,
                url: 'http://uv.mx/en/'
            }
        ],
        onlineCourses: [
            {
                title: 'JavaScript Design Patterns',
                school: 'Udacity',
                date: 2014,
                url: 'https://www.udacity.com/course/javascript-design-patterns--ud989'
            },
            {
                title: 'Responsive Web Design Fundamentals',
                school: 'Udacity',
                date: 2014,
                url: 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
            }
        ]
    },
    work: {
        jobs: [
            {
                employer: 'Pemwork SAPI de CV',
                title: '.Net Web developer',
                location: 'Villahermosa, MX',
                dates: '04/2014 - Current',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque, quam tincidunt condimentum ornare, odio nibh efficitur urna, eget mattis justo nibh a tortor. Integer et nisi sapien. Cras nibh eros, rutrum vel sollicitudin dapibus, cursus ac massa. Nam cursus molestie faucibus.'
            },
            {
                employer: 'Freelancer.com',
                title: 'Web developer',
                location: 'Remote work',
                dates: '08/2008 - Current',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque, quam tincidunt condimentum ornare, odio nibh efficitur urna, eget mattis justo nibh a tortor. Integer et nisi sapien. Cras nibh eros, rutrum vel sollicitudin dapibus, cursus ac massa. Nam cursus molestie faucibus.'
            },
            {
                employer: 'Compañía Mexicana de Exploraciones SA de CV',
                title: '.Net Web developer',
                location: 'Villahermosa, MX',
                dates: '07/2014 - 03/2015',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque, quam tincidunt condimentum ornare, odio nibh efficitur urna, eget mattis justo nibh a tortor. Integer et nisi sapien. Cras nibh eros, rutrum vel sollicitudin dapibus, cursus ac massa. Nam cursus molestie faucibus.'
            },
            {
                employer: 'Grupo Empresarial Syfors SA de CV',
                title: 'PHP & Android developer',
                location: 'Saltillo, MX',
                dates: '09/2013 - 05/2014',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque, quam tincidunt condimentum ornare, odio nibh efficitur urna, eget mattis justo nibh a tortor. Integer et nisi sapien. Cras nibh eros, rutrum vel sollicitudin dapibus, cursus ac massa. Nam cursus molestie faucibus.'
            }
        ]
    },
    projects: {
        projects: [
            {
                title: 'Fake project #1',
                dates: '2010-2015',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque, quam tincidunt condimentum ornare, odio nibh efficitur urna, eget mattis justo nibh a tortor. Integer et nisi sapien. Cras nibh eros, rutrum vel sollicitudin dapibus, cursus ac massa. Nam cursus molestie faucibus.',
                images: [
                    'http://placehold.it/200x150',
                    'http://placehold.it/200x150',
                    'http://placehold.it/200x150'
                ]
            }
        ]
    }
}

if (typeof ko === 'object') {
    ko.applyBindings(ViewModel);
}

jQuery(function($){
    var locationsMap = $('#locationsMap')[0];
    function getLocations(){
        var locations = [];
        locations.push(ViewModel.bio.contacts.location);
        // iterates through school locations and appends each location to
        // the locations array
        for (var school in ViewModel.education.schools) {
            locations.push(ViewModel.education.schools[school].location);
        }
        // iterates through work locations and appends each location to
        // the locations array
        for (var job in ViewModel.work.jobs) {
            locations.push(ViewModel.work.jobs[job].location);
        }
        return locations;
    }
    // push the locations in the google-map element
    locationsMap.set('places',getLocations());
    $('body').on('google-map-search-results','.google-map-search',function() {
        // reads Google Places search (this.results) results to create map pins
        var currentResults = locationsMap.get('results');
        if (typeof currentResults === 'undefined') {
            currentResults = [];
        }
        if (typeof this.results !== 'undefined') {
            // append the found results
            currentResults = currentResults.concat(this.results);
        }
        // update the pins
        locationsMap.set('results', currentResults);
    });
    $('body').on('google-map-click','*', function(ev){
        //save offset of the click
        var mapContainer = $(locationsMap).offset();
        var eventCoords = ev.originalEvent.detail.pixel;
        logClicks(
            eventCoords.x + mapContainer.left,
            eventCoords.y + mapContainer.top
        );
    });

    var clickLocations = [];

    function logClicks(x,y) {
        clickLocations.push(
            {
                x: x,
                y: y
            }
        );
        // commented out to pass esLint no-console rule
        // console.log('x location: ' + x + '; y location: ' + y);
    }

    $(document).click(function(ev) {
        // your code goes here!
        logClicks(ev.pageX, ev.pageY);
    });
});
