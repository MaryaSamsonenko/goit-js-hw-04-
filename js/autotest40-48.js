// ============== TASK 40 ===============

// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// Тесты
// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Объявлена переменная authorsInAlphabetOrder
// Значение переменной authorsInAlphabetOrder это массив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Объявлена переменная authorsInReversedOrder
// Значение переменной authorsInReversedOrder это массив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Использован метод sort()

// ============ SOLUTION 40 =============

// const authors = [
//     'Tanith Lee',
//     'Bernard Cornwell',
//     'Robert Sheckley',
//     'Fyodor Dostoevsky',
//     'Howard Lovecraft',
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// ============== TASK 41 ===============

// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
// Тесты
// Объявлена переменная books
// Значение переменной books это исходный массив объектов книг
// Объявлена переменная sortedByAuthorName
// Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке
// Объявлена переменная sortedByReversedAuthorName
// Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в обратном алфавитном порядке
// Объявлена переменная sortedByAscendingRating
// Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга
// Объявлена переменная sortedByDescentingRating
// Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга
// Для перебора массива books используется метод sort()

// ============ SOLUTION 41 =============

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//     firstAuthor.author.localeCompare(secondAuthor.author),
// );

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author),
// );

// const sortedByAscendingRating = [...books].sort(
//     (firstRating, secondRating) => firstRating.rating - secondRating.rating,
// );
// const sortedByDescentingRating = [...books].sort(
//     (firstRating, secondRating) => secondRating.rating - firstRating.rating,
// );
// console.log(sortedByAuthorName(books));
// console.log(sortedByReversedAuthorName(books));

// ============== TASK 42 ===============

// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

// Тесты
// Объявлена переменная sortByAscendingBalance
// Переменной sortByAscendingBalance присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по возрастанию их баланса
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// Для перебора параметра users использован метод sort()

// ============ SOLUTION 42 =============

// const sortByAscendingBalance = users => {
//     return users.sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// };

// ============== TASK 43 ===============

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// Тесты
// Объявлена переменная sortByDescendingFriendCount
// Переменной sortByDescendingFriendCount присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Для перебора параметра users использован метод sort()
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по убыванию количества их друзей
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 43 =============

// const sortByDescendingFriendCount = users => {
//     return [...users].sort(
//         (firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length,
//     );
// };

// ============== TASK 44 ===============

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

// Тесты
// Объявлена переменная sortByName
// Переменной sortByName присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Для перебора параметра users использован метод sort()
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по имени в алфавитном порядке
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 44 =============

// const sortByName = users => {
//     return [...users].sort((firstUser, secondUser) =>
//         firstUser.name.localeCompare(secondUser.name),
//     );
// };

// ============== TASK 45 ===============

// ============ SOLUTION 45 =============

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     {
//         title: 'The Dreams in the Witch House',
//         author: 'Howard Lovecraft',
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .sort((a, b) => a.author.localeCompare(b.author))
//     .map(book => book.author);

// console.log(names);

// ============== TASK 46 ===============

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

// Тесты
// Объявлена переменная getNamesSortedByFriendCount
// Переменной getNamesSortedByFriendCount присвоена стрелочная функция с параметром (users)
// В теле функции используется цепочка методов
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает массив ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 46 =============

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//     },
// ];

// const getNamesSortedByFriendCount = users => {
//     return [...users]
//         .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//         .map(user => user.name);
// };

// console.log(getNamesSortedByFriendCount(users));

// ============== TASK 47 ===============

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// Тесты
// Объявлена переменная getSortedFriends
// Переменной getSortedFriends присвоена стрелочная функция с параметром (users)
// В теле функции используется цепочка методов в правильном порядке
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает массив ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 47 =============

// const getSortedFriends = users =>
//     users
//         .flatMap(user => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((a, b) => a.localeCompare(b));

// ============== TASK 48 ===============

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// Тесты
// Объявлена переменная getTotalBalanceByGender
// Переменной getTotalBalanceByGender присвоена стрелочная функция с параметрами (users, gender)
// В теле функции используется цепочка методов в правильном порядке
// Значение параметра users не изменяется
// Если значение параметра gender это строка "male", функция возвращает число 12053
// Если значение параметра gender это строка "female", функция возвращает число 8863
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 48 =============

// const getTotalBalanceByGender = (users, gender) =>
//     users
//         .filter(user => user.gender === gender)
//         .reduce((total, user) => {
//             return total + user.balance;
//         }, 0);
