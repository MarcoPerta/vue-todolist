var app = new Vue(
    {
      el: '#root',
      data: {
        todoList : [
            {
                toDo : 'comprare il pane'
            },
            {
                toDo : 'comprare il latte'
            }
        ]
     },

     
      method: {
        
        eliminaRiga(index){
            todoList.splice( index, 1)
        }

     }
    }
 );