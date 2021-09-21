// ============== TASK 30 ===============

// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
// Тесты
// Объявлена переменная firstArray
// Значение переменной firstArray это массив [26, 94, 36, 18]
// Объявлена переменная secondArray
// Значение переменной secondArray это массив [17, 61, 23]
// Объявлена переменная thirdArray
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
// Объявлена переменная eachElementInFirstIsEven
// Значение переменной eachElementInFirstIsEven это буль true
// Объявлена переменная eachElementInFirstIsOdd
// Значение переменной eachElementInFirstIsOdd это буль false
// Объявлена переменная eachElementInSecondIsEven
// Значение переменной eachElementInSecondIsEven это буль false
// Объявлена переменная eachElementInSecondIsOdd
// Значение переменной eachElementInSecondIsOdd это буль true
// Объявлена переменная eachElementInThirdIsEven
// Значение переменной eachElementInThirdIsEven это буль false
// Объявлена переменная eachElementInThirdIsOdd
// Значение переменной eachElementInThirdIsOdd это буль false
// Для перебора массивов использован метод every()

// ============ SOLUTION 30 =============

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// ============== TASK 31 ===============

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

// Тесты
// Объявлена переменная isEveryUserActive
// Переменной isEveryUserActive присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод every()
// Вызов функции с указанным массивом пользователей возвращает false
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 31 =============

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

// const isEveryUserActive = users => {
//     return users.every(user => user.isActive === true);
// };
// console.log(isEveryUserActive(users));

// ============== TASK 32 ===============

// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
// Тесты
// Объявлена переменная firstArray
// Значение переменной firstArray это массив [26, 94, 36, 18]
// Объявлена переменная secondArray
// Значение переменной secondArray это массив [17, 61, 23]
// Объявлена переменная thirdArray
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
// Объявлена переменная anyElementInFirstIsEven
// Значение переменной anyElementInFirstIsEven это буль true
// Объявлена переменная anyElementInFirstIsOdd
// Значение переменной anyElementInFirstIsOdd это буль false
// Объявлена переменная anyElementInSecondIsEven
// Значение переменной anyElementInSecondIsEven это буль false
// Объявлена переменная anyElementInSecondIsOdd
// Значение переменной anyElementInSecondIsOdd это буль true
// Объявлена переменная anyElementInThirdIsEven
// Значение переменной anyElementInThirdIsEven это буль true
// Объявлена переменная anyElementInThirdIsOdd
// Значение переменной anyElementInThirdIsOdd это буль true
// Для перебора массивов использован метод some()

// ============ SOLUTION 32 =============

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

// ============== TASK 33 ===============

// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

// Тесты
// Объявлена функция isAnyUserActive(users)
// Для перебора параметра users используется метод some()
// Вызов функции с указанным массивом пользователей возвращает true
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 33 =============

// const isAnyUserActive = users => {
//     return users.some(user => user.isActive === true);
// };

// ============== TASK 34 ===============

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// Тесты
// Объявлена переменная players
// Значение переменной players это объект игроков с игровым временем каждого
// Объявлена переменная playtimes
// Значение переменной playtimes это массив [1270, 468, 710, 244]
// Объявлена переменная totalPlayTime
// Значение переменной totalPlayTime это число 2692
// Для перебора массива playtimes используется метод reduce()
// Объявлена переменная averagePlayTime
// Значение переменной averagePlayTime это число 673

// ============ SOLUTION 34 =============

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// ============== TASK 35 ===============

// ============ SOLUTION 35 =============

// const players = [
//     { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//     { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//     { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((totalAverage, player) => {
//     return totalAverage + player.playtime / player.gamesPlayed;
// }, 0);

// ============== TASK 36 ===============

// ============ SOLUTION 36 =============

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

// const calculateTotalBalance = users => {
//     return users.reduce((total, user) => total + user.balance, 0);
// };

// console.log(calculateTotalBalance(users));

// ============== TASK 37 ===============

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

// Тесты
// Объявлена переменная getTotalFriendCount
// Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод reduce()
// Вызов функции с указанным массивом пользователей возвращает число 14
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ============ SOLUTION 37 =============

// const getTotalFriendCount = users => {
//     return users.reduce((total, user) => total + user.friends.length, 0);
// };
// console.log(getTotalFriendCount(users));

// ============== TASK 38 ===============

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// Тесты
// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная alphabeticalAuthors
// Значение переменной alphabeticalAuthors это массив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Использован метод sort()

// ============ SOLUTION 38 =============

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// ============== TASK 39 ===============

// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// Тесты
// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная descendingReleaseDates
// Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Использован метод sort()

// ============ SOLUTION 39 =============

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

//  ============= Method Reduce ==============

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
const getTags = tweets =>
    tweets.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);

        return allTags;
    }, []);

console.log(getTags(tweets));

const tags = getTags(tweets);

const getTagStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
        acc[tag] = 0;
    }

    acc[tag] += 1;

    return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
