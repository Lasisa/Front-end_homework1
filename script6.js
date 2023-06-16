
// 1.


const numbersDiv = document.querySelector('.numbers');
for (let i = 100; i >= 50; i -= 10) {
  const paragraph = document.createElement('p');
  paragraph.textContent = i;
  numbersDiv.appendChild(paragraph);
}



// 2. 

const strings = ['Lasisa', 'Maxim', 'Konstantin', 'Alex', 'Arsen'];

const stringsContainer = document.querySelector('.strings_container');

for (let i = 0; i < strings.length; i++) {
  const paragraph = document.createElement('p');
  paragraph.textContent = strings[i];
  stringsContainer.appendChild(paragraph);
}



// 3.


const users = [
    { first_name: 'Lasisa', last_name: 'Abdulloeva', age: 25 },
    { first_name: 'Мaria', last_name: 'Ivanova', age: 17 },
    { first_name: 'Аlex', last_name: 'Konradi', age: 30 },
    { first_name: 'Yuliya', last_name: 'Rybstiv', age: 19 }
  ];
  
  const usersContainer = document.querySelector('.users_container');
  
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      const userCard = document.createElement('div');
      userCard.classList.add('user_card');
      
      
      const nameParagraph = document.createElement('p');
      nameParagraph.textContent = 'Имя: ' + users[i].first_name;
      
      const lastNameParagraph = document.createElement('p');
      lastNameParagraph.textContent = 'Фамилия: ' + users[i].last_name;
      
      const ageParagraph = document.createElement('p');
      ageParagraph.textContent = 'Возраст: ' + users[i].age;
      
      
      userCard.appendChild(nameParagraph);
      userCard.appendChild(lastNameParagraph);
      userCard.appendChild(ageParagraph);
      

      usersContainer.appendChild(userCard);
    }
  }
  













