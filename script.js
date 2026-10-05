const products = {
cakes:[
 {name:"Blueberry Cloud Cake",price:1299,img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",desc:"Light vanilla sponge layered with blueberry cream.",ingredients:"Wheat flour, eggs, sugar, butter, cream, blueberries, vanilla."},
 {name:"Chocolate Fudge Cake",price:1499,img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476b?auto=format&fit=crop&w=900&q=85",desc:"Rich chocolate sponge with silky fudge frosting.",ingredients:"Wheat flour, cocoa, eggs, sugar, butter, cream, chocolate."},
 {name:"Strawberry Dream",price:1399,img:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85",desc:"Soft vanilla cake with strawberry cream.",ingredients:"Wheat flour, eggs, sugar, butter, cream, strawberries."},
 {name:"Classic Red Velvet",price:1599,img:"https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=900&q=85",desc:"Velvety cocoa cake with cream cheese frosting.",ingredients:"Wheat flour, cocoa, eggs, sugar, butter, cream cheese."}
],
pastries:[
 {name:"Butter Croissant",price:299,img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",desc:"Flaky, golden and buttery.",ingredients:"Wheat flour, butter, milk, yeast, sugar, salt."},
 {name:"Almond Danish",price:399,img:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",desc:"Laminated pastry with almond filling.",ingredients:"Wheat flour, butter, almonds, sugar, eggs, milk."},
 {name:"Cinnamon Swirl",price:349,img:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85",desc:"Soft swirl with cinnamon sugar.",ingredients:"Wheat flour, butter, cinnamon, brown sugar, yeast."},
 {name:"Pain au Chocolate",price:449,img:"https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=900&q=85",desc:"Crisp pastry with chocolate batons.",ingredients:"Wheat flour, butter, chocolate, milk, sugar, yeast."}
],
cookies:[
 {name:"Classic Choc Chip",price:499,img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85",desc:"Crisp edges, soft centre and chocolate chips.",ingredients:"Wheat flour, butter, brown sugar, chocolate chips, eggs."},
 {name:"Double Chocolate",price:549,img:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",desc:"Deep cocoa cookie with chocolate chunks.",ingredients:"Wheat flour, cocoa, butter, sugar, eggs, dark chocolate."},
 {name:"Oatmeal Raisin",price:449,img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85",desc:"Chewy oats with juicy raisins.",ingredients:"Oats, wheat flour, butter, brown sugar, raisins, cinnamon."},
 {name:"Pistachio Crunch",price:599,img:"https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=900&q=85",desc:"Buttery cookie with roasted pistachios.",ingredients:"Wheat flour, butter, sugar, eggs, pistachios, vanilla."}
],
pies:[
 {name:"Apple Crumble Pie",price:999,img:"https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=900&q=85",desc:"Spiced apples beneath a buttery crumble.",ingredients:"Apples, wheat flour, butter, sugar, cinnamon."},
 {name:"Chocolate Silk Pie",price:1099,img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",desc:"Smooth chocolate filling in a crisp crust.",ingredients:"Chocolate, cream, wheat flour, butter, sugar, eggs."},
 {name:"Lemon Meringue",price:899,img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=85",desc:"Bright lemon curd with toasted meringue.",ingredients:"Lemon, eggs, sugar, wheat flour, butter."},
 {name:"Berry Lattice",price:1099,img:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=85",desc:"Mixed berry filling under a golden lattice.",ingredients:"Mixed berries, wheat flour, butter, sugar, lemon."}
],
beverages:[
 {name:"Iced Mocha",price:499,img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",desc:"Cold espresso with chocolate and milk.",ingredients:"Espresso, milk, chocolate, ice."},
 {name:"Caramel Cold Coffee",price:549,img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",desc:"Creamy cold coffee with caramel.",ingredients:"Coffee, milk, caramel, ice, cream."},
 {name:"Vanilla Frappe",price:499,img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",desc:"Smooth vanilla blended drink.",ingredients:"Milk, vanilla, ice, cream."},
 {name:"Strawberry Cooler",price:449,img:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",desc:"Fruity chilled strawberry refresher.",ingredients:"Strawberry, lemon, sugar, ice, water."}
],
desserts:[
 {name:"Chocolate Truffle",price:699,img:"https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=900&q=85",desc:"Silky chocolate truffle dessert.",ingredients:"Chocolate, cream, butter, cocoa, sugar."},
 {name:"Berry Cheesecake",price:749,img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",desc:"Creamy cheesecake with berry topping.",ingredients:"Cream cheese, biscuit, butter, sugar, berries."},
 {name:"Mini Éclair Box",price:799,img:"https://images.unsplash.com/photo-1614707267537-2b0d0f7b6e11?auto=format&fit=crop&w=900&q=85",desc:"Assorted mini éclairs with chocolate glaze.",ingredients:"Wheat flour, eggs, butter, cream, chocolate."},
 {name:"Tiramisu Cup",price:649,img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",desc:"Coffee-soaked layers with mascarpone cream.",ingredients:"Mascarpone, coffee, cocoa, eggs, sugar, sponge."}
],
merchandise:[
 {name:"Bakerz Bite Mug",price:899,img:"https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=85",desc:"Branded ceramic mug for your daily brew.",ingredients:"Ceramic, food-safe glaze."},
 {name:"Canvas Tote Bag",price:799,img:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",desc:"Reusable Bakerz Bite canvas tote.",ingredients:"Cotton canvas, printed design."},
 {name:"Bakerz Bite Glass",price:699,img:"https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=900&q=85",desc:"Minimal branded café glass.",ingredients:"Food-grade glass."},
 {name:"Serving Tray",price:1199,img:"https://images.unsplash.com/photo-1583845112203-454c2e9c8a9d?auto=format&fit=crop&w=900&q=85",desc:"Printed serving tray for home cafés.",ingredients:"Food-safe coated board."}
]};

const catMeta={
cakes:{title:"Cakes",desc:"Celebration-ready cakes, made for every sweet occasion.",img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1500&q=85"},
pastries:{title:"Pastries",desc:"Flaky, buttery bakes fresh from the oven.",img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1500&q=85"},
cookies:{title:"Cookies",desc:"Golden, gooey and made for sharing.",img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1500&q=85"},
pies:{title:"Pies",desc:"Classic comfort bakes with a Bakerz Bite twist.",img:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1500&q=85"},
beverages:{title:"Beverages",desc:"Cold coffees and refreshing drinks for every mood.",img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1500&q=85"},
desserts:{title:"Desserts & Truffles",desc:"Small indulgences, big happiness.",img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=1500&q=85"},
merchandise:{title:"Merchandise",desc:"Take the Bakerz Bite feeling home with you.",img:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1500&q=85"}
};

function money(n){return "Rs. "+n.toLocaleString("en-PK")}
function renderCatalogue(){
 const holder=document.getElementById("catalogue");
 Object.keys(catMeta).forEach(key=>{
  const m=catMeta[key], items=products[key];
  const section=document.createElement("section"); section.className="category-section"; section.id=key;
  section.innerHTML=`<div class="category-shell">
    <div class="category-title"><div><span class="eyebrow">${key==="merchandise"?"TAKE US HOME":"FRESH TODAY"}</span><h2>${m.title}</h2></div><p>${m.desc}</p></div>
    <div class="category-banner" style="background-image:url('${m.img}')"><div class="category-banner-content"><div class="mini-logo">BB</div><h3>${m.title}</h3><p>Bakerz Bite • Where smiles are served daily</p></div></div>
    <div class="product-grid">${items.map((p,i)=>`<article class="product-card" onclick="showProduct('${key}',${i})">
      <div class="product-image" style="background-image:url('${p.img}')"></div>
      <div class="product-info"><h4>${p.name}</h4><p>${p.desc}</p><div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-btn" onclick="event.stopPropagation();addToCart('${key}',${i})">+ Add</button></div></div>
    </article>`).join("")}</div>
  </div>`;
  holder.appendChild(section);
 });
}
let selectedRating=0, cart=[];
function showProduct(cat,i){
 const p=products[cat][i];
 document.getElementById("modalImg").src=p.img;document.getElementById("modalTitle").textContent=p.name;
 document.getElementById("modalPrice").textContent=money(p.price);document.getElementById("modalDescription").textContent=p.desc;
 document.getElementById("modalIngredients").textContent=p.ingredients;document.getElementById("modalCategory").textContent=catMeta[cat].title.toUpperCase();
 document.getElementById("modalAdd").onclick=()=>{addToCart(cat,i);bootstrap.Modal.getInstance(document.getElementById("productModal")).hide()};
 new bootstrap.Modal("#productModal").show();
}
function addToCart(cat,i){cart.push(products[cat][i]);document.getElementById("cartCount").textContent=cart.length;renderCart();alert(products[cat][i].name+" added to your basket.");}
function renderCart(){const el=document.getElementById("cartItems");let total=0;el.innerHTML=cart.map((p,i)=>{total+=p.price;return `<div class="cart-item"><span>${p.name}<br><small>${money(p.price)}</small></span><button class="btn btn-sm btn-outline-secondary" onclick="removeCart(${i})">×</button></div>`}).join("")||"<p style='padding:20px;color:#68758a'>Your basket is empty.</p>";document.getElementById("cartTotal").textContent=money(total)}
function removeCart(i){cart.splice(i,1);document.getElementById("cartCount").textContent=cart.length;renderCart()}
function openCart(){document.getElementById("cartDrawer").classList.add("open")}function closeCart(){document.getElementById("cartDrawer").classList.remove("open")}
function openGallery(src){document.getElementById("galleryImg").src=src;new bootstrap.Modal("#galleryModal").show()}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth"})}

document.addEventListener("DOMContentLoaded",()=>{
 renderCatalogue(); renderCart();
 let count=Number(localStorage.getItem("bbVisitors")||0)+1;localStorage.setItem("bbVisitors",count);document.getElementById("visitorCount").textContent=String(count).padStart(5,"0");
 document.querySelectorAll(".category-nav a").forEach(a=>a.addEventListener("click",()=>{document.querySelectorAll(".category-nav a").forEach(x=>x.classList.remove("active"));a.classList.add("active");document.getElementById("categoryNav").classList.remove("show")}));
 document.getElementById("mobileMenuBtn").addEventListener("click",()=>document.getElementById("categoryNav").classList.toggle("show"));
 document.querySelectorAll(".faq-item").forEach(item=>item.addEventListener("click",()=>item.classList.toggle("open")));
 document.querySelectorAll("#stars button").forEach(btn=>btn.addEventListener("click",()=>{selectedRating=Number(btn.dataset.rate);document.querySelectorAll("#stars button").forEach(x=>x.classList.toggle("selected",Number(x.dataset.rate)<=selectedRating))}));
 document.getElementById("feedbackForm").addEventListener("submit",e=>{e.preventDefault();if(!selectedRating){alert("Please choose a star rating.");return}alert("Thank you for your feedback! Rating: "+selectedRating+"/5");e.target.reset();selectedRating=0;document.querySelectorAll("#stars button").forEach(x=>x.classList.remove("selected"))});
 function tick(){
   const now=new Date();const time=now.toLocaleTimeString();const date=now.toLocaleDateString();
   document.getElementById("tickerText").textContent=`  📅 ${date}   •   🕒 ${time}   •   📍 `;
 }
 tick();setInterval(tick,1000);
 if(navigator.geolocation){navigator.geolocation.getCurrentPosition(pos=>{document.getElementById("tickerText").textContent+=`Location detected (${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)})`;document.getElementById("deliveryLocation").textContent="Location detected for delivery";},()=>{document.getElementById("tickerText").textContent+="Karachi, Pakistan";});}else document.getElementById("tickerText").textContent+="Karachi, Pakistan";
});
