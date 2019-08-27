// Created by Email Not Activated

$(function(){
    //Opens sub-menu when clicked
   $('.toggle').on('click', function(){
       $('.submenu').slideToggle(300);
       
       //changes the icon from down to up
       //I'll add an animation soon where the icon will rotate when clicked
       $('.toggle').css('transform', 'rotate(-180deg)');
   });
   
   //Auto close menu after clicking sub-menu
   $('.sub').on('click', function(){
       $('.submenu').slideToggle(300);
       $('.toggle').css('transform', 'rotate(180deg)');
   });
});