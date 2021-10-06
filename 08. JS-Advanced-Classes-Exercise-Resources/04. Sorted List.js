class List {
  nums = [];
    size = 0;

    add(element) {
        this.nums.push(element)
        this.nums.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index < this.nums.length && index >= 0) {
            this.nums.splice(index, 1);
            this.size--;

        } else {
            throw new ArgumentError("Index out of bounds")
        }
    }

    get(index) {
        if (index < this.nums.length && index >= 0) {
            return this.nums[index];
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

