
///// FORM HANDLING /////

// grab form, create submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    // prevent auto page reload
    e.preventDefault();
    // create p element for comments and set value to form input
    const comment = document.createElement('p');
    comment.textContent = e.target['comment-input'].value;
    // grab comment section and append p element
    const list = document.querySelector('div .comments')
    list.appendChild(comment);
    // reset form
    form.reset();
});

///// COUNTER HANDLING /////

// grab counter element, parse string into integer for counting
let ctr = document.querySelector('#counter');
let ctrInt = parseInt(ctr.textContent)
// make ctrInt increment by 1 every second; use variable for access later
let timer = setInterval(increment, 1000);


// increase ctrInt by 1, update DOM
function increment() {
    ctrInt += 1;
    ctr.textContent = ctrInt;
}

// decrease ctrInt by 1, update DOM
function decrement() {
    ctrInt -= 1;
    ctr.textContent = ctrInt;
}

// stop or start timer, disable buttons, change pause button text to reflect change
function pauseTimer() {
    if (pauseBtn.textContent === ' pause ') {
        clearInterval(timer);
        pauseBtn.textContent = ' resume ';
        minusBtn.disabled = true;
        plusBtn.disabled = true;
        likeBtn.disabled = true;

    } else {
        timer = setInterval(increment, 1000)
        pauseBtn.textContent = ' pause '
        minusBtn.disabled = false;
        plusBtn.disabled = false;
        likeBtn.disabled = false;
    }
}


let ctrArr = [];
let numLikes;
// create list element and append beneath like button
function timerLike() {
    // grab likes ul element
    let likes = document.querySelector('.likes');
    // create li element with ID of ctrInt - ID changes for each li
    let li = document.createElement('li');
    li.id = ctrInt;
    // check whether ctrInt value is new and update DOM accordingly
    if (ctrArr.includes(ctrInt)) {
        let matchingLi = document.getElementById(ctrInt);
        matchingLi.textContent = `${ctrInt} was liked ${numLikes+=1} times`;
    } else {
        li.textContent = `${ctrInt} was liked ${numLikes=1} time`;
        ctrArr.push(ctrInt);
        likes.appendChild(li);
    }
 }


///// BUTTON HANDLING /////

const minusBtn = document.querySelector('#minus');
minusBtn.addEventListener('click', decrement);

const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', increment);

const likeBtn = document.querySelector('#heart');
likeBtn.addEventListener('click', timerLike);

const pauseBtn = document.querySelector('#pause');
pauseBtn.addEventListener('click', pauseTimer);