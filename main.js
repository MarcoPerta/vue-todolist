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
        ],
        message : ''
     },


      methods: {
        
        eliminaRiga(index){
            this.todoList.splice( index, 1);
        },

        verifica(index){
            this.todoList[index].toDoDone = true;
        },

        inserisci(){
            this.todoList.push( 
                {
                    toDo : this.message,
                    toDoDone : false
                }
                );

            this.message = '';
        }

     }
    }
 );