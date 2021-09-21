// ============== TASK 20 ===============

// Теория

// Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. Этот приём работает только с массивом примитивных значений - не объектов.

// Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом flatMap().

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться. Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, то есть без повторений.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс в оригинальном массиве всех курсов. В параметре index хранится индекс текущего элемента course при переборе массива методом filter.

// Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

// # Массив всех курсов
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Для элемента "mathematics" под индексом 0:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 0.
// Они равны, значит это уникальный элемент.
// Для элемента "mathematics" под индексом 3:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 3.
// Они не равны, значит это повторяющийся - не уникальный элемент.
// Задание

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// Тесты
// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная allGenres
// Значение переменной allGenres это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Объявлена переменная uniqueGenres
// Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для вычисления значения переменной allGenders использован метод flatMap()
// Для вычисления значения переменной uniqueGenres использован метод filter()

// ============ SOLUTION 20 =============

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         genres: ['adventure', 'history'],
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         genres: ['fiction', 'mysticism'],
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         genres: ['horror', 'mysticism', 'adventure'],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

// ============== TASK 21 ===============

// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
// Тесты
// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная MIN_RATING
// Значение переменной MIN_RATING это число 8
// Объявлена переменная AUTHOR
// Значение переменной AUTHOR это строка "Bernard Cornwell"
// Объявлена переменная topRatedBooks
// Значение переменной topRatedBooks это массив книг с рейтингов выше 8
// Объявлена переменная booksByAuthor
// Значение переменной booksByAuthor это массив книг автор которых "Bernard Cornwell"
// Для перебора массива books использован метод filter()

// ============ SOLUTION 21 =============

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

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ============== TASK 22 ===============

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// Тесты
// Объявлена переменная getUsersWithEyeColor
// Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color)
// Для перебора параметра users используется метод filter()
// Если значение параметра color это "blue", функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr
// Если значение параметра color это "green", функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head
// Если значение параметра color это "brown", функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony
// Если значение параметра color это любая другая строка, функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 22 =============

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
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
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

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'brown'));

// ============== TASK 23 ===============

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// Тесты
// Объявлена переменная getUsersWithAge
// Переменной getUsersWithAge присвоена стрелочная функция с параметрами (users, minAge, maxAge)
// Для перебора параметра users используется метод filter()
// Если значение параметров minAge и maxAge равны 20 и 30 соотвественно, функция возвращает массив объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr
// Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Если значение параметров minAge и maxAge равны 80 и 100 соотвественно, функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 23 =============

// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age > minAge && user.age < maxAge);
// };
// console.log(getUsersWithAge(users, '20', '30'));

// ============== TASK 24 ===============

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// Тесты
// Объявлена переменная getUsersWithFriend
// Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName)
// Для перебора параметра users используется метод filter()
// Если значение параметра friendName это строка "Briana Decker", функция возвращает массив объектов пользователей с именами Sharlene Bush и Sheree Anthony
// Если значение параметра friendName это строка "Goldie Gentry", функция возвращает массив объектов пользователей с именами Elma Head и Sheree Anthony
// Если значение параметра friendName это строка "Adrian Cross", функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 24 =============

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName));
// };
// console.log(getUsersWithFriend(users, 'Briana Decker'));

// ============== TASK 25 ===============

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// Тесты
// Объявлена переменная getFriends
// Переменной getFriends присвоена стрелочная функция с параметром (users)
// Вызов функции с указанным массивом пользователей возвращает массив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 25  =============

// const getFriends = users =>
//     users
//         .flatMap(user => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index);

// console.log(getFriends(users));

// ============== TASK 26 ===============

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// Тесты
// Объявлена переменная getActiveUsers Переменной getActiveUsers присвоена стрелочная функция с параметром users
// Для перебора параметра users используется метод filter()
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 26 =============

// const getActiveUsers = users => users.filter(user => user.isActive === true);

// console.log(getActiveUsers(users));

// ============== TASK 27 ===============

// ============ SOLUTION 27 =============

// const getInactiveUsers = users => {
//     return users.filter(user => user.isActive === false);
// };

// ============== TASK 28 ===============

// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
// Тесты
// Объявлена переменная books
// Значение переменной books это массив
// Объявлена переменная BOOK_TITLE
// Значение переменной BOOK_TITLE это строка "The Dream of a Ridiculous Man"
// Объявлена переменная AUTHOR
// Значение переменной AUTHOR это строка "Robert Sheckley"
// Объявлена переменная bookWithTitle
// Значение переменной bookWithTitle это объект книги с названием выше "The Dream of a Ridiculous Man"
// Объявлена переменная bookByAuthor
// Значение переменной bookByAuthor это объект книги автора "Robert Sheckley"
// Для перебора массива books использован метод find()

// ============ SOLUTION 28 =============

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
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// ============== TASK 29 ===============

// ============ SOLUTION 29 =============

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };
