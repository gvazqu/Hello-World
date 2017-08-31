(function($){
  $('.slider').slider();
	
  $(function(){
        //initialize all modals          
       	 $('.modal').modal({
      	dismissible: true, // Modal can be dismissed by clicking outside of the modal
      	opacity: .5, // Opacity of modal background
      	inDuration: 400, // Transition in duration
      	outDuration: 400, // Transition out duration
      	startingTop: '4%', // Starting top style attribute
     	endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available. 
        console.log(modal, trigger);
      },      
    }
  );	
	

     
 

  }); // end of document ready
})(jQuery); // end of jQuery name space
