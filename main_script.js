// @ts-nocheck


let color_picked = "red"



initialize()




function initialize(){
    randomColorForTitle()
    addButtonFunctionality()
}


function createPixel(number){
    let canvas = document.getElementById("canva_container");
    let pixels = canvas.querySelectorAll(".pixel")

    pixels.forEach((div) => div.remove());


    canvas.style.gridTemplateColumns = `repeat(${number} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${number} , 1fr)`;

    for (let i = 0; i < number * number; i++){

        

        let pixel = document.createElement("div");
            

            pixel.addEventListener('click', (event) => {
                event.target.style.backgroundColor = color_picked;
            });

            pixel.addEventListener('mouseover', (event) => {
                event.target.style.boxShadow = `0px 0px 2px 2px ${color_picked}`;
            });
            
            pixel.addEventListener('mouseout', (event) => {
                event.target.style.boxShadow = '';
            });

            pixel.classList.add("pixel");
            

            canvas.appendChild(pixel);
    }
}


function addButtonFunctionality(){
    const buttons = document.querySelectorAll('.colorB');

    buttons.forEach((button) => {
        const button_color = button.textContent;
        button.style.backgroundColor = button_color;

        button.addEventListener('click', () => {
            color_picked = button_color;
            change_pixels_color()
            const all_pixel = document.querySelectorAll('.pixel');

        });
    });
    
    document.getElementById('size_picker_button').addEventListener('click', create_pixels);

}

function randomColorForTitle() {
    const titles = document.querySelectorAll(".title");
    titles.forEach(title => {
        title.style.color = makeRandomColor();
    });
}

function makeRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function create_pixels(){
    const input_for_size = document.getElementById('size_picker_input');

    let input_val = input_for_size.value;

    if (Number.isInteger(parseInt(input_val))){
        if (input_val < 100){
            createPixel(input_val)
        }
    }

}


















