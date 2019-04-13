// Your code goes here
const h2_events = document.querySelectorAll("h2");

h2_events.forEach(element => {
        element.addEventListener('mouseover', function(e) {
        e.target.style.color = 'blue';
        });
        element.addEventListener('mouseleave', function(e){
            e.target.style.color = 'red';
        });
})


const menu_doubleclick = document.querySelector('.nav-container')
const na_anchors = document.querySelectorAll('.nav-link');
console.log(menu_doubleclick)

    menu_doubleclick.addEventListener('dblclick', function(e){
        na_anchors.forEach(function(element){
            element.classList.toggle('crazy_menu');
        })    
    })
