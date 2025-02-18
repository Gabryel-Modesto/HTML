const arr = [1,2,3,4,5];

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
});

console.log(highNumbers);

const users = [ 
    {name: "Gabryel", available: true},
    {name: "Lucas", available: false},
    {name: "Leo", available: false},
    {name: "Wil", available: false},
    {name: "Brenda", available: true},
]

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);