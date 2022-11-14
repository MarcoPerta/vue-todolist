var app = new Vue(
    {
      el: '#root',
      data: {
        todoList : [
            {
                toDo : 'comprare il pane',
                toDoDone : false
            },
            {
                toDo : 'comprare il latte',
                toDoDone : false
            }
        ]
     },


      methods: {
        
        eliminaRiga(index){
            this.todoList.splice( index, 1)
        },

        verifica(index){
            this.todoList[index].toDoDone = true
        }

     }
    }
 );