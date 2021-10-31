const navSlide = () => {
   //Declaration
   const sideBar = document.querySelector('.sidebar');
   const Nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  sideBar.addEventListener('click',()=>{
      //Toggling to Nav Active
         Nav.classList.toggle('nav-active');

      //SideBar Link Animation
      navLinks.forEach((link,index)=>{
         if(link.style.animation){
            link.style.animation = ``;
         }
         else{
            link.style.animation =`navLinkFade 0.5s ease forwards ${index/ 7 + 0.5}s`;
         }
         });
         //SideBar Animation
         sideBar.classList.toggle(`move`);
   });


}

navSlide();
 