// =========== Example 1 ============

// const callBack = function () {
//     console.log('Через 5 секунд после коллбека и таймаута');
// };
// console.log('В коде перед таймаутом');

// setTimeout(callBack, 5000);

// console.log('В коде после таймаута');

// =========== Example 2 ============

// function fn() {
//     // В переменной args будет полноценный массив
//     const args = Array.from(arguments);
//     return args;
// }
// console.log(fn(5, 4, 3, 6, 7));

// function fn(...args) {
//     // В переменной args будет полноценный массив

//     return args;
// }
// console.log(fn(5, 4, 3, 6, 7));

// const user = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: {
//         country: 'Jamaica',
//         city: 'Ocho Rios',
//     },
//     hobbies: ['swiming', 'music', 'sci-fi'],
// };

// const userLocation = user.location;
// console.log(userLocation); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);

//         return allTags;
//     }, []);

// const tags = getTags(tweets);
// console.log(getTags(tweets));
// console.log(tags);

// const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const students = [
//     { name: 'Манго', score: 83 },
//     { name: 'Поли', score: 59 },
//     { name: 'Аякс', score: 37 },
//     { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
// );

// const inDescendingScoreOrder = [...students].sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//     firstStudent.name.localeCompare(secondStudent.name),
// );
// console.table(inAscendingScoreOrder);
// console.table(inDescendingScoreOrder);
// console.table(inAlphabeticalOrder);

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//     username: 'Манго',
// };
// const poly = {
//     username: 'Поли',
// };

// greetGuest.call(mango, 'Добро пожаловать'); // Добро пожаловать, Манго.
// greetGuest.call(poly, 'С приездом'); // С приездом, Поли.

// function greet(clientName) {
//     return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//     service: 'Steam',
// };
// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter('Манго')); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//     service: 'Gmail',
// };
// const gmailGreeter = greet.bind(gmail);
// console.log(gmailGreeter('Поли')); // "Поли, добро пожаловать в «Gmail»."

// const customer = {
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// function makeMessage(callback) {
//     return `Обрабатываем заявку от ${callback.bind(customer)()}.`;
// }

// console.log(makeMessage(customer.getFullName)); // Будет ошибка при вызове функции
