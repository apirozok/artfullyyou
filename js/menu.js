function loadMenu(){document.getElementById("menu-container").innerHTML=`

<!-- Load an icon library to show a hamburger menu (bars) on small screens -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Top Navigation Menu -->
<div class="topnav">
  <a href="index.html" class="active">Home</i></a>
  <!-- Navigation links (hidden by default) -->
  <div id="myLinks">
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>	
  </div>
  <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->	
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
    `}function myFunction(){var a=document.getElementById("myLinks");"block"===a.style.display?a.style.display="none":a.style.display="block"}window.onload=loadMenu;