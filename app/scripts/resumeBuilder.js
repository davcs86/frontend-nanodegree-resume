/* eslint no-undef: [2, { typeof: true }] */
/*global ko*/
var ViewModel = {
    bio: {
        name: 'David Castillo-Sanchez',
        role: 'Web developer',
        contacts: [
            { title: 'location', contact: 'Villahermosa, MX' },
            { title: 'email', contact: '<a href="mailto:davcs86@gmail.com" target="_blank">davcs86@gmail.com</a>' },
            { title: 'linkedin', contact: '<a href="http://mx.linkedin.com/in/davcs86" target="_blank">@davcs86</a>' },
            { title: 'github', contact: '<a href="https://github.com/davcs86/" target="_blank">davcs86/</a>' }
        ]
    }
}
console.log(typeof ko);
if (typeof ko === 'object')
{
    ko.applyBindings(ViewModel);
}
