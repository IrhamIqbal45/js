//Stack(Primitive), Heap(non-Primitive)

let player1 = "ali"
let player2 = player1
console.log(player1);
console.log(player2);

let user = {
    email: "user@gooole.com",
    upi: "user@ybl"
}

let user2 = user;
user2.email = "ali@gmail.com"
console.log(user2.email);
console.log(user.email);