const darkMood = document.querySelector(".Dark-icon");
const lightIcon=document.querySelector(".light-icon");
const iconContainer = document.querySelector(".icon-container");

iconContainer.addEventListener("click",(e)=>{
  if(e.target.closest(".dark-icon")){ 
    document.body.classList.add("light-icon");
    iconContainer.classList.remove('dark-icon')
    iconContainer.innerHTML = `
    light mood<span class="sun"
    ><i class="fa fa-toggle-on" aria-hidden="true"></i
  ></span> 
        `
  } 
  else{
    document.body.classList.remove("light-icon");
    iconContainer.classList.add('dark-icon')
    iconContainer.innerHTML=`
    Dark mood<span class="sun"
            ><i class="fa fa-toggle-off" aria-hidden="true"></i
          ></span> 
    `
  }
})