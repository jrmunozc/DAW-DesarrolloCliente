function twoSum(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // No se encontró solución
}

function maxProfit(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;
}

// lista
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Método para imprimir la lista enlazada
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Método para verificar si la lista está vacía
    isEmpty() {
        return this.head === null;
    }
}

function mergeSortedLists(list1, list2) {
    let mergedList = new LinkedList();

    // Caso donde ambas listas están vacías
    if (list1.isEmpty() && list2.isEmpty()) {
        return mergedList;
    }

    // Caso donde una de las listas está vacía
    if (list1.isEmpty()) {
        return list2;
    }
    if (list2.isEmpty()) {
        return list1;
    }

    // Si ambas listas tienen elementos, procedemos a fusionarlas
    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 !== null && current2 !== null) {
        if (current1.data <= current2.data) {
            mergedList.add(current1.data);
            current1 = current1.next;
        } else {
            mergedList.add(current2.data);
            current2 = current2.next;
        }
    }

    // Añadir los elementos restantes de la lista1, si quedan
    while (current1 !== null) {
        mergedList.add(current1.data);
        current1 = current1.next;
    }

    // Añadir los elementos restantes de la lista2, si quedan
    while (current2 !== null) {
        mergedList.add(current2.data);
        current2 = current2.next;
    }

    return mergedList;
}

// Ejemplo de uso:
let list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);

let list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);

let mergedList = mergeSortedLists(list1, list2);
mergedList.printList();  // Imprime 1 2 3 4 5 6

// Ejemplo con una lista vacía
let emptyList = new LinkedList();
let mergedWithEmpty = mergeSortedLists(list1, emptyList);
mergedWithEmpty.printList();  // Imprime 1 3 5



const prueba = [1,2,3,4,5,6,7,8,9]
console.log(twoSum(prueba, 5))