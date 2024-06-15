const countryApiUrl = 'https://restcountries.com/v2/all';
let startButton = document.getElementById("start");
let anyButton = document.getElementById("any");
const sort = document.getElementById("sort");
const input = document.getElementById("filter");
const form = document.getElementById("form")
const list = document.getElementById("list")

let countries = [];
let filteredCountries = [];
startButton = false
anyButton = true


addEventListener();

function addEventListener() {
  
  form.addEventListener("click",choseButton)
}



// fetchging data

fetch(countryApiUrl)
.then((response) => response.json())
.then(async (data) => {
  await data.forEach((element) => {
    countries.push(element.name);
    
  });
  //  display(filteredCountries);
});



// display arr metod in the HTML

function display(arr) {
  
  arr.map((ar) => {
    const li = `<li>${ar}</li>`;
    list.innerHTML += li;
  });
}

//chose buttton whick filter aray

function choseButton(e){

  input.addEventListener("keyup", filterAny);
  
  switch(e.target.id){
    
    
    case "start":
      e.preventDefault()

      filterStart()
      break;
      
      case "any":
        e.preventDefault()
        filterAny()
        console.log("you click any button")
        break;
        
        case "sort":
          e.preventDefault()
          filteredCountries.reverse()
          filterAny()
          break;
        }
      }
      
      
      
      function filterAny(){
        let inputValue = input.value.toLowerCase().trim()
        
        list.innerHTML = '';
        filteredCountries = []
        
      if(inputValue.length !==0){

      countries.forEach((country)=>{

         if(country.toLowerCase().trim().includes(inputValue,0)){
          filteredCountries.push(country)

      }else{

        console.log("Aradığınız ülke bulunamadı")
      }
    })
  }else{
    // alert("Lütfen geçerli bir değer girin")
  }
  display(filteredCountries)
}
 
function filterStart(){
  let inputValue = input.value.toLowerCase().trim()
  
  list.innerHTML = '';
  filteredCountries = []
  
if(inputValue.length !==0){

countries.forEach((country)=>{

   if(country.toLowerCase().trim().startsWith(inputValue,0)){
    filteredCountries.push(country)

}else{

  console.log("Aradığınız ülke bulunamadı")
}
})
}else{
// alert("Lütfen geçerli bir değer girin")
}
display(filteredCountries)
}


