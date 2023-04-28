function createInstructor (firstName, lastName)
{
    return{
        firstName,
        lastName
    }
}

let favNumber = 42

const instructor = {
    name : 'Noam'
}

instructor[favNumber] = "That's my favorate!"

var instructor2 =
{
    firstName: 'Noam',
    sayHi()
    {
        return 'Hi!'
    },
    sayBye()
    {
        return 'Bye, ' + this.firstName + ' so nice to meet you!'
    }
}

function animal(species, verb, sound)
{
    return{
        species,
        [verb] ()
        {
            return sound
        }
    }
}