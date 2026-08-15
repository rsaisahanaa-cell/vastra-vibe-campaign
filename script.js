function details(type){
 const data={
 image:["Your Tradition. Your Style.","Brand Awareness","Single Image","Shop Now","A visual introduction to Vastra Vibe's modern ethnic-fashion identity, combining traditional Indian roots with contemporary styling."],
 video:["One Saree. A Hundred Ways.","Engagement","Video / Reel","Learn More","A short-form fashion Reel showing styling moments, fabric details and different occasions."],
 carousel:["Which One Is Your Vibe?","Website Traffic","Carousel","Shop Now","Three featured collections guide visitors through Everyday Elegance, Festive Glow and Modern Classics."]
 }[type];
 const w=window.open("","_blank");
 w.document.write(`<html><head><title>Vastra Vibe | ${data[0]}</title><style>body{margin:0;background:#f8eee8;color:#2d1722;font-family:Arial,sans-serif;padding:8vw}main{max-width:760px;margin:auto;background:#fffaf6;padding:50px;border-radius:28px;box-shadow:0 25px 70px #51283a22}small{letter-spacing:3px;color:#ad5675}h1{font:700 52px Georgia,serif;margin:18px 0}p{font-size:18px;line-height:1.8;color:#66535b}.meta{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:30px}.box{padding:20px;background:#f6e8df;border-radius:16px}.box b{display:block;margin-top:8px}</style></head><body><main><small>VASTRA VIBE · ${data[1]}</small><h1>${data[0]}</h1><p>${data[4]}</p><div class="meta"><div class="box"><small>FORMAT</small><b>${data[2]}</b></div><div class="box"><small>CALL TO ACTION</small><b>${data[3]}</b></div></div></main></body></html>`);
 w.document.close();
}