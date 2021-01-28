/* --- DECLARACION DE VARIABLES --- */
const hero = document.getElementById("hero");
const hex = document.getElementById("input_hexColor");
const rgb = document.getElementById("input_rgbColor");
const glass_box = document.querySelector(".glass-container");
const input_border_radius = document.getElementById("input_radius");
const input_blur = document.getElementById("input_blur");
const input_border = document.getElementById("input_border");
const input_opacity = document.getElementById("input_opacity");
const input_background = document.getElementById("bgInput");
const controls_container = document.querySelector(".controls__inputs");
const btnSwitch_image = document.querySelector("#switch_image");
const btnSwitch_text = document.querySelector("#switch_text");
const profile = document.querySelector("#profile");
const text = document.querySelector("#text");


/* --- ASIGNACION DE VALORES POR DEFAULT EN EL GLASS BOX --- */
hero.style.setProperty('background-image', `url("assets/images/bg-default-0${getRandomNum(1, 5) }.png")`);
glass_box.style.setProperty('backdrop-filter', `blur(8px)`); 
glass_box.style.setProperty('background-color', `rgba(0, 191, 255, 0.025)`); 
glass_box.style.setProperty('box-shadow', `2px 8px 8px rgba(0,0,0,0.3)`); 
glass_box.style.setProperty('border', `2px rgba(255,255,255,0.4) solid`); 
glass_box.style.setProperty('border-bottom', `2px rgba(40,40,40,0.35) solid`); 
glass_box.style.setProperty('border-right', `2px rgba(40,40,40,0.35) solid`); 


/* --- SINCRONIZACION DE DATOS ENTRE DOM Y JS --- */
// con esto sincronizamos los valores de los Range Inputs
// junto con los valores previamente establecidos al glass box.
input_opacity.value = "75";
document.getElementById("opacity_data").textContent = `${parseInt(input_opacity.value)/1000}`;

input_border_radius.value = "10";
document.getElementById("radius_data").textContent = `${input_border_radius.value}px`;

input_blur.value = "5";
document.getElementById("blur_data").textContent = `${input_blur.value}px`;

input_border.value = "2";
document.getElementById("border_data").textContent = `${input_border.value}px`;


/* --- EVENTO CONTROLADOR DE INPUTS --- */
controls_container.addEventListener('input', () => {

    /* --- OPACITY INPUT RANGO --- */
    glass_box.style.setProperty('background-color', `rgba(${hex2rgb()} ${parseInt(input_opacity.value)/1000})`);
    document.getElementById("opacity_data").textContent = `${(input_opacity.value)/1000}`;

    /* --- BLUR INPUT RANGO --- */
    glass_box.style.setProperty('backdrop-filter', `blur(${input_blur.value}px)`);
    document.getElementById("blur_data").textContent = `${input_blur.value}px`;

    /* --- BORDER INPUT RANGO --- */
    glass_box.style.setProperty('border', `${input_border.value}px rgba(255,255,255,0.4) solid`);
    glass_box.style.setProperty('border-bottom', `${input_border.value}px rgba(40,40,40,0.35) solid`);
    glass_box.style.setProperty('border-right', `${input_border.value}px rgba(40,40,40,0.35) solid`);
    document.getElementById("border_data").textContent = `${input_border.value}px`;

    /* --- BORDER RADIUS INPUT RANGO --- */
    glass_box.style.setProperty('border-radius', `${input_border_radius.value}px`);
    document.getElementById("radius_data").textContent = `${input_border_radius.value}px`;
});


/* --- EVENTO BACKGROUND INPUT --- */
input_background.addEventListener('input', () => {
    hero.style.setProperty('background-image', `url("${input_background.value}")`);
});

/* --- EVENTO SELECTOR DE TEXTO EN BACKGROUND INPUT --- */
input_background.addEventListener('click', () => {
    document.getElementById("bgInput").select(); 
});

/* --- EVENTO HEX INPUT --- */
hex.addEventListener('input', () => {
    /* console.log(hex2rgb()); */
    glass_box.style.setProperty('background-color', `rgba(${hex2rgb()} ${(input_opacity.value)/1000}`); 
    rgb.value = `${hex.value}`;
    input_opacity
});

/* --- EVENTO RGB INPUT --- */
rgb.addEventListener('input', () => {
    /* console.log(hex2rgb()); */
    /* glass_box.style.setProperty('background-color', `rgba(${hex2rgb()} ${(input_opacity.value)/1000}`);  */
    hex.value = `${rgb.value}`;
    glass_box.style.setProperty('background-color', `rgba(${hex2rgb()} ${parseInt(input_opacity.value)/1000})`);
});




/* --- FUNCION QUE CONVIERTE EL COLOR HEX A RGB --- */
function hex2rgb() {
    var hex_color = document.getElementById('input_hexColor').value;
    var rgb_color;
    var pattern_color = "^#([A-Fa-f0-9]{6})$";
    
    if (hex_color.match(pattern_color)) {
        var hex_color = hex_color.replace("#", "")
            , r = parseInt(hex_color.substring(0, 2), 16)
            , g = parseInt(hex_color.substring(2, 4), 16)
            , b = parseInt(hex_color.substring(4, 6), 16);
        return rgb_color = r + ',' + g + ',' + b + ',';
    }
    else {
        console.log('Error Color Format');
    }
}


/* ---INTERACCION DE BOTONES SWITCH--- */
btnSwitch_image.addEventListener("click", () => {
    btnSwitch_image.classList.toggle("active__image");
    profile.classList.toggle("visibility__profile");
    console.log("me opimiste - opresor >:v");
  })
  
  btnSwitch_text.addEventListener("click", () => {
    btnSwitch_text.classList.toggle("active__text");
    text.classList.toggle("visibility__text");
    console.log("me opimiste de nuevo- opresor >:v");
  })



/* --- CODE GENERATOR --- */
document.querySelector('.generator_button').addEventListener('click', ()=> {
    document.querySelector('.code_text').textContent = `<!-- This was made with GlassGenerator.netlify.app -->
<div class="glass-container" id="glass"></div>`;
    document.querySelector('#code_text2').textContent = `/* This was made with GlassGenerator.netlify.app */
.glass-container{
    width: 700px;
    height: 375px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: ${input_border_radius.value}px;
    backdrop-filter: blur(${input_blur.value}px);
    background-color: rgba(${hex2rgb()} ${parseInt(input_opacity.value)/1000});
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: ${input_border.value}px rgba(255,255,255,0.4) solid;
    border-bottom: ${input_border.value}px rgba(40,40,40,0.35) solid;
    border-right: ${input_border.value}px rgba(40,40,40,0.35) solid;
}`;
});


/* --- CARGADOR DE BACKGROUNDS --- */
var bgNumber = 1;

arrow_right.onclick = handler;
arrow_left.onclick = handler;

function handler() { 
  // Ejecutamos un operador ternario sin importar cual flecha es clikeada
  // y si cumple la condicion le sumamos 1 a la variable
  // de lo contrario lo retornamos a su valor original.
  bgNumber < 4  ? bgNumber++ + console.log(bgNumber) : (bgNumber = 1) + console.log(bgNumber);
  hero.style.setProperty('background-image', `url("assets/images/bg-default-0${bgNumber}.png")`);
};

/* --- Funcion generadora de Numero Entero Aleatorio --- */
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }