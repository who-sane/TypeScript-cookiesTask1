// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';

// Create a array/list of cookies named cookies
let cookies: Array<Cookie> = [];

let cookieSelector: HTMLElement = document.getElementById('cookieSelector');
const cookieColourInput: HTMLInputElement = document.getElementById(
  'cookieColour-inp'
) as HTMLInputElement;

// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies
function init() {
  const c1: Cookie = new Cookie('Cookie1', 'Brown', 0);
  cookies.push(c1);
  const c2: Cookie = new Cookie('Cookie2', 'White', 0);
  cookies.push(c2);
  console.log(cookies);

  // add them as options in the select/dropdown (cookieSelector) element

  for (let i = 0; i < cookies.length; i++) {
    let newOption: HTMLOptionElement = document.createElement('option');
    newOption.innerHTML = cookies[i].name;
    newOption.value = i.toString();
  }

  // initialise the cookieColour-inp to the colour of the first cookie created
  cookieColourInput.value = cookies[0].colour;

  let input: HTMLInputElement = document.getElementById(
    'cookieColour-inp'
  ) as HTMLInputElement;
  input.value = cookies[0].colour;

  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  let output: HTMLElement = document.getElementById('output');
  for (let i = 0; i < cookies.length; i++) {
    cookieSelector.innerHTML += `<option value=${i}>${
      cookies[i].name
    }</option>`;
  }
}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
function changeColour() {
  let changeColour: HTMLElement = document.getElementById('changeColour-btn');
  updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
function addChocolateChip() {
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}

init();
