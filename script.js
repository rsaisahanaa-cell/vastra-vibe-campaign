function openDetails(type){
  const details={
    image:{
      title:"Your Tradition. Your Style.",
      body:"Vastra Vibe's brand-awareness creative introduces a modern ethnic-fashion identity. The message combines traditional Indian roots with contemporary styling.",
      points:["Objective: Brand awareness","Format: Single image","CTA: Shop Now","Audience: Women aged 18–30 in India"]
    },
    video:{
      title:"One Saree. A Hundred Ways.",
      body:"This short-form Reel is designed to build engagement by showing styling moments, fabric details and different occasions.",
      points:["Objective: Engagement","Format: Video / Reel","CTA: Learn More","Suggested length: 15–20 seconds"]
    },
    carousel:{
      title:"Which one is your style?",
      body:"The carousel guides visitors through three featured collections: Everyday Elegance, Festive Glow and Modern Classics.",
      points:["Objective: Website traffic","Format: Carousel","CTA: Shop Now","Collections: Everyday, Festive, Modern Classics"]
    }
  };
  const d=details[type];
  const html=`<!doctype html><html><head><meta charset="utf-8"><title>Vastra Vibe | ${d.title}</title><style>body{font-family:Arial,sans-serif;background:#fbf7f1;color:#2a2027;padding:50px;line-height:1.6}main{max-width:800px;margin:auto;background:#fff;padding:45px;border-radius:22px;box-shadow:0 12px 40px #0001}h1{font-family:Georgia,serif;font-size:46px}.tag{color:#a24f70;font-size:12px;letter-spacing:.15em;font-weight:bold}li{margin:10px 0}.back{display:inline-block;margin-top:20px;padding:12px 20px;background:#2d222b;color:#fff;border-radius:30px;text-decoration:none}</style></head><body><main><div class="tag">VASTRA VIBE · CAMPAIGN DETAILS</div><h1>${d.title}</h1><p>${d.body}</p><ul>${d.points.map(x=>`<li>${x}</li>`).join("")}</ul><a class="back" href="#" onclick="window.close()">Close</a></main></body></html>`;
  const w=window.open("","_blank");
  w.document.write(html);w.document.close();
}