let persons = [
    {
    vardas:'antanas',
    amzius:25,
    miestas:'kaunas'
    },
    {
    vardas:'vilius',
    amzius:30,
    miestas:'vilnius'
    },
    {
    vardas:'ricardas',
    amzius:35,
    miestas:'klaipeda'
    },
    {
    vardas:'jadvyga',
    amzius:40,
    miestas:'palanga'
    },
    {
    vardas:'emilija',
    amzius:45,
    miestas:'marijampole'
    },
]

let listData = document.querySelector('.data');
let listElement = document.createElement('ul');
listData.appendChild(listElement);

createList(persons);

function getPersons() {
    const getName = document.getElementById('name').value;
    const getAge = document.getElementById('age').value;
    const getCity = document.getElementById('city').value;
    const filteredPersons = persons.filter(person => {
        return (
            person.vardas.toString().includes(getName) &&
            person.amzius.toString().includes(getAge) &&
            person.miestas.toString().includes(getCity)
        );
    });
    createList(filteredPersons);
};

function createList(filteredPersons) {
    listElement.innerHTML = '';
    for (let i = 0; i < filteredPersons.length; i++) {
        let listItem = document.createElement('li');
        listElement.appendChild(listItem);
        listItem.textContent = `vardas: ${filteredPersons[i].vardas}, amzius: ${filteredPersons[i].amzius}, miestas: ${filteredPersons[i].miestas}`;
    };
};

document.getElementById('name').addEventListener('input', getPersons);
document.getElementById('age').addEventListener('input', getPersons);
document.getElementById('city').addEventListener('input', getPersons);