 var myDataRef = new Firebase('https://intense-torch-1227.firebaseIO.com/');
       myDataRef.child("count").on('value', function(snapshot) {
        var message = snapshot.val();
        displayCount(message);
      });

      function add(){
       myDataRef.orderByChild("count").on("child_added", function(snapshot) {
          console.log(snapshot.val());
          myDataRef.child('count').set(snapshot.val()+1);
        });
      }

      function min(){
       myDataRef.orderByChild("count").on("child_added", function(snapshot) {
          console.log(snapshot.val());
          if(snapshot.val()>0){
            myDataRef.child('count').set(snapshot.val()-1);
          }
        });
      }

      function reset(){
        myDataRef.set({count: 0});
      }

      function displayCount(counterval) {
        var textcounter = document.getElementById('counttext');
        textcounter.innerHTML=counterval;
      }