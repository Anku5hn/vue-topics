import {defineStore} from 'pinia';

export const useTodoStore = defineStore("todo",{
    state: () => ({
        todo: [],
    }), 
    actions: {
        deleteLast(){
            let j = this.todo.length - 1;
            if(j >= 0){
            this.todo.splice(j, 1);
        }
    },
    addItem(val){
        let i = this.todo.length;
        this.todo[i] = val;
    }
    },
}
);