const textElement = document.querySelector('#text p')
const optionButtonsElement = document.getElementById('option-buttons')
const imgElement = document.getElementById("img")
const container = document.querySelector("#cont")
let button = `
<button type="button" id="play" onclick="beforeGame()" class="btn btn-outline-primary w-25 h-25">Oyna</button>
`;
let state = {}

function startGame() {
  state = {}
  showTextNode(1,1)
}

function showTextNode(textNodeIndex, imgNodeIndex) {
    // Seçenekler 
    function inf(){
      while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
      }
      textNode.options.forEach(option => {
        if (showOption(option)) {
          const button = document.createElement('button')
          button.innerText = option.text;
          button.classList.add("dsb");
          button.setAttribute("data-aos", "fade-up");
          button.addEventListener('click', () => {
            selectOption(option);
          })
          optionButtonsElement.appendChild(button)
         var f = 0;
         setInterval(g, 1000);
         function g(){
          f++;
          if (f === 5) {
            button.classList.remove("dsb");
           }
         }
        }
      })
      
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}
    }
  
  let saniye = false;
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    var i = 0;
		var tag = document.getElementById("p");
		var html = document.getElementById("p").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = textNode.text;
		var speed = 60;

		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("p").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
      }}
      typeWriter();    
      inf();  
  textElement.innerHTML = textNode.text;  
  const imgNode = textNodes.find(imgNode => textNode.img === imgNodeIndex)
  imgElement.innerHTML = `<img src="${textNode.img}" class="img-fluid image">`;


}


const textNodes = [
  {
    id: 1,
    text: "Gözünü aciyorsun, etrafın nemli ve bir o kadar <br> karanlik sadece neler olduğunu hatirlamaya calisiyorsun…",
    options: [
      {
        text: 'Magaradan cik',
        nextText: 2
      },
      {
        text: 'Magarayi kesfet',
        nextText: 3
      }
    ],
    img:"images/cave-1.jpg"
  },
  {
    id: 2,
    img: "images/jungle-1.jpg",
    text: 'Disaride Kocaman bir orman var. Karsindeki agacta tropikal meyveler goruyorsun. ',
    options: [
      {
        text: 'Meyveleri toplamayayi dene.',
        nextText: 4
      },
      {
        text: 'Yurumeye devam et.',
        nextText: 5
      },
      
    ]
  },
  {
    id: 3,
    img: "images/cave-2.jpg",
    text: 'Magrada ilerliyorsun... ileride kocaman bir gölge var!',
    options: [
      {
        text: 'Yakindan bak',
        
        nextText: 6,
      },
      {
        text: 'Uzaklaş',
        
        nextText: 2,
      },
    ]
  },
  {
    id:4,
    img: "images/mango.jpg",
    text: 'Meyveleri toplamak için ağaca yumruk attın ardından eline aldığın taşla bir kaç mango düşürdün! Mangolar sayesinde artık toksun.',
    options: [
      {        
        text: "Devam",
        nextText: 5,
      },
    ]
  },
  {
    id:5,
    img: "images/baraka.jpg",
    text: 'Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!Güneş ufuğun içinde kaybolana kadar yürüdün 50m ileride bir baraka gözüküyor!',
    options: [
      {        
        text: "Devam",
        nextText: 7,
      },
    ]
  },
  {
    id:6,
    img: "images/died.jpg",
    text: 'Golgenin ne olduğunu göremeden öldürüldün...',
    options: [
      {        
        text: "Tekrar oyna",
        nextText: -1,
      },
    ]
  },

]
document.addEventListener("DOMContentLoaded", () => {
  container.style.display = "none";
  container.style.visibility = "none";
  document.querySelector("#button-container").innerHTML = button;
  
})

function beforeGame(){
  document.querySelector("#button-container").remove()
  startGame();
  container.style.display = "block";
  container.style.visibility = "visible";
}






