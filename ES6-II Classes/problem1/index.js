class arrayBuilder{
    constructor(...arrayElement){

        this.size = arrayElement.length;

        for(let i=0; i<this.size; i++){
            this[i] = arrayElement[i];
        }
        
    }

    print(){
        let arr = [];
        for(let i = 0; i<this.size; i++){
            arr.push(this[i]);
        }
        console.log(arr);
    }

    push(element){
        let length = this.size;
        this[length] = element;
        this.size++;
    }

    pop(){
        if(this.size == 0){
            return "Empty Array";
        }else{
            let popElement = this[this.size - 1];
            delete this[this.size - 1];
            this.size--;
            return popElement;
        }
    }

    top(){
        if(this.size == 0){
            return "Empty Array";
        }else{
            return this[this.size - 1];
        }
    }

    printReverse(){
        let arr = [];
        for(let i = this.size - 1; i>=0; i--){
            arr.push(this[i]);
        }
        console.log(arr);
    }

}

let arr1 = new arrayBuilder(1,4,6,1,6,2);
console.log(arr1.size);
arr1.print();
arr1.push(5);
arr1.print();
console.log(arr1.pop());
arr1.print();
console.log(arr1.top());
arr1.printReverse();