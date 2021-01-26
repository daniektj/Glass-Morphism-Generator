const glass_box = document.querySelector(".glass-container");
const input_border_radius = document.getElementById("input_radius");

glass_box.style.setProperty('backdrop-filter', `blur(8px)`); 
glass_box.style.setProperty('background-color', `rgba(255, 255, 255, 0.025)`); 
glass_box.style.setProperty('border', `2px rgba(255,255,255,0.4) solid`); 
glass_box.style.setProperty('border-bottom', `2px rgba(0,0,0,0.35) solid`); 
glass_box.style.setProperty('border-right', `2px rgba(0,0,0,0.35) solid`); 
/* glass_box.style.setProperty('box-shadow', `inset 0 0 30px 15px rgba(0,0,0,0.15), 2px 8px 8px rgba(0,0,0,0.6)`);  */
glass_box.style.setProperty('box-shadow', `2px 8px 8px rgba(0,0,0,0.3)`); 

input_border_radius.value = "10";
document.getElementById("radius_data").textContent = `${input_border_radius.value}px`;

/* ---PRIMER INPUT RANGO--- */
input_border_radius.addEventListener('input', () => {
    glass_box.style.setProperty('border-radius', `${input_border_radius.value}px`);
    document.getElementById("radius_data").textContent = `${input_border_radius.value}px`;
});