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
        todoCompleta : []
       
     },


      methods: {
        
        eliminaRiga(element ,index){
            if(element.toDoDone == true){
                this.todoCompleta.splice(index,1);
            }else {
                this.todoList.splice(index,1); 
                }
        },

        verifica(){
            // this.todoList[index].toDoDone = true;
            this.todoList.forEach((element,index) => {
                if( element.toDoDone = true ){
                    this.todoCompleta.push(element);
                    this.todoList.splice(index,1);
                }
            });
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