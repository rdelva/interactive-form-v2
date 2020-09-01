//When the page first loads, the first text field should be in focus by default.

const name = document.getElementById('name');
name.focus();




title.addEventListener('click', (e) => {
    //not sure if i did this part right
    const title = document.getElementById('title');
    console.log(title.value);
    //if user selects other, other-title textbox will be made visible
    const otherTitle = document.getElementById('other-title');

    if (title.value == 'other'){
        otherTitle.classList.remove('is-hidden');    
    } else {
        otherTitle.classList.add('is-hidden');
    } 
});

//check and see if seelct theme is selected
// if remained as default. set color to Please select a T-shirt theme

const design = document.getElementById('design');
const color = document.getElementById('color');
const colorOptions = color.getElementsByTagName('option');
const parent  = colorOptions[0].parentNode;



if(design.value  == 'Select Theme') {
    //create option called "Please select a T-shirt theme"
    const colorOption = document.createElement('option');
    colorOption.innerHTML = 'Please select a T-shirt theme';

    // add colorOption before the first item in the drop down menu.
        //set the colorOption value to the color drop down menu
    parent.insertBefore(colorOption, colorOptions[0]);
    color.value = colorOptions[0].value;

    // select the color Options that have the value attribute and assign it to html
    const colorOptionsList = color.querySelectorAll('[value]');
  
    //Remove the colors after the first option 
    for(let i = 0; i < colorOptionsList.length ; i++ ) {
        parent.removeChild(colorOptionsList[i]);
    }  
    
}  else {
    // put colorOptionList back into the color 
        //make item selectable
}

