const testArr = ['testimonial-1.jpeg', 'testimonial-2.jpeg', 'testimonial-3.jpeg', 'steve-gardiner.jpeg', 'testimonial-5.jpeg', 'testimonial-6.jpeg']

testEl = document.querySelector('#testimonials')

for (i = 0; i < testArr.length; i++) {
    console.log('testArr')
    let myElm = document.createElement("div");
    myElm.setAttribute("class", "col-md-6");
    myElm.innerHTML = `<img src=img/${testArr[i]} /> `

    testEl.appendChild(myElm)
}