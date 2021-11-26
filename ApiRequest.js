var object = new XMLHttpRequest();

object.open('GET', 'https://jsonplaceholder.typicode.com/posts');

object.send();

object.onload = function(){
    var data = JSON.parse(this.response);
   
for(i=0;i<data.length;i++) {
        console.log(data[i].id) 
        
    }
}