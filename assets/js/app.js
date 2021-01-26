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


/* --- ASIGNACION DE VALORES POR DEFAULT EN EL GLASS BOX --- */
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

