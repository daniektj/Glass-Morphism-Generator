const glass_box = document.querySelector(".glass-container");

glass_box.style.setProperty('backdrop-filter', `blur(8px)`); 
glass_box.style.setProperty('background-color', `rgba(255, 255, 255, 0.025)`); 
glass_box.style.setProperty('border', `2px rgba(255,255,255,0.4) solid`); 
glass_box.style.setProperty('border-bottom', `2px rgba(0,0,0,0.3) solid`); 
glass_box.style.setProperty('border-right', `2px rgba(0,0,0,0.3) solid`); 
/* glass_box.style.setProperty('box-shadow', `inset 0 0 30px 15px rgba(0,0,0,0.15), 2px 8px 8px rgba(0,0,0,0.6)`);  */
glass_box.style.setProperty('box-shadow', `2px 8px 8px rgba(0,0,0,0.6)`); 
