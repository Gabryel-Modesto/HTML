const sum = (a,b) => a + b;


const geeting = (name) => {
    if(name) {
        return `Eae, ${name}`
    } else {
        return `Eae`
    }
}

const user = {
    name: "Gabryel",
    sayUserName() {
        setTimeout(function() {
            console.log(this);
            console.log(`Username: ${this.name}`)
        },1000);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 2000)
    }
};


user.sayUserName();
user.sayUserNameArrow();