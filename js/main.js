// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */

//Declaro el evento que se realizará en wl boton
document.querySelector(".btn-toggle-menu").addEventListener('click',function(){
  /*Declaro condicional, ya que hay dos momentos que se tienen que evaluar
  y la declaro desde el padre porque si la evaluara en hijo, desaparece y no vuelve
  a aparecer*/
  if(document.querySelector(".answer-box nav").className === "nav-menu"){
  	// Si eso sucede, cambia la clase del hijo por hidden, pues es la que aparece en estilos con cero opacidad
  	 document.querySelector(".answer-box nav").className = "nav-menu-hidden";
  	 //cambio el texto del botòn tambièn
  	 document.querySelector(".btn-toggle-menu").innerHTML ="Show Me";
  } else {
  	/*de lo contrario, es decir, si no es identico a nav menu, regresa a nav menu, 
  	en este punto ya tenìa asignada otra clase*/
  	document.querySelector(".answer-box nav").className = "nav-menu";
  	document.querySelector(".btn-toggle-menu").innerHTML ="Hide nav";
  }

})


/* TASK 2 -- Select/Deslect an Icon */

//Hago una iteraciòn para que recorra todos los elementos
document.querySelectorAll(".option").forEach(function (div){
	//Hago un evento click 
  div.addEventListener("click", function(e){
    //ocupo target para asociar a un mismo controlador a varios elementos. Si es identico option
		if (e.currentTarget.className === "option"){
      //entonces se le agregarà la clase selected, para que acepte  los estilos
		   e.currentTarget.classList.add("selected")	
		}else {
      //de lo contrario, se le quita la clase 
		   e.currentTarget.classList.remove("selected")
		}
	})

})


/* TASK 3 -- Increase total number*/

//Hago una iteraciòn para que recorra todos los elementos
document.querySelectorAll(".point").forEach(function (btn){
  //agrego al boton un evento click
	btn.addEventListener("click", function(){
    //asigno la variable de total que se asignarà a la clase
		var total = document.querySelector(".total-points")
    //a la variable le digo que agregue texto que serà igual a la suma del string convertido en numero del total mas el string convertido en numero del boton que se le de click
		total.textContent = parseInt(total.textContent) + parseInt(btn.textContent)
	})
})



/* TASK 4 (Adventure Mode)-- Move Item List to List */


//Hago una iteraciòn para que recorra todos los elementos de answer-box
document.querySelectorAll('.answer-box li').forEach(function(item){
  //Agrego el evento click a los index
  item.addEventListener('click', function(e){
    //Declaramos dos variables
    //ocupo target para asociar a un mismo controlador a varios elementos
    //la otra variable asocia al nodo principal y su clase
    var itemLista = e.currentTarget;
    var classOfItemLista = e.currentTarget.parentNode.className;
    itemLista.remove();
    //si alguno de los elementos es identico a la clase padre
    if (classOfItemLista === "good-standing-list") {
      //se agregarà a clase probation y removerà
      document.querySelector('.probation-list').appendChild(itemLista);
      //de lo contrario, agregarà a dtanding y removerá
    } else {
      document.querySelector('.good-standing-list').appendChild(itemLista);      
    }
  });
});


/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */


//itero sobre cada elemento que integra el span
document.querySelectorAll('.palette span').forEach(function(fondo){
  //Agrego el evento click sobre los index que lo integran
  fondo.addEventListener('click', function(e){
    //Declaro la variable del color de fondo, que tenga el atribute de la clase nombrado en el text content de cada span
    var fondoColor = e.target.attributes.class.textContent;
    //La clase del p es igual a esa clase de cada color de fondo que se le dio click
    document.querySelector('.msg').attributes.class.textContent = "msg " + fondoColor;
  });
});