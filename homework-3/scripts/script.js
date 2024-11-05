const user = {
    street: 'Academician Williams',
    city: 'Odessa',
    zipCode: 966505,
    name: 'Dmitriy',
    age: 23,
    email: 'dima030215@gmail.com'
};
const orders = [
    {
        orderId: 1,
        userId: [
            {
                name: 'Sony Playstation 5 500GB',
                price: 399,
                category: {
                    categoryName: 'Entertainment',
                    categoryId: 234
                }
            },
            {
                name: 'Sony Playstation 5 1TB',
                price: 599,
                category: {
                    categoryName: 'Entertainment',
                    categoryId: 530
                }
            }
        ]
    },
    {
        orderId: 2,
        userId: [
            {
                name: 'Asus VivoBook 16 OLED',
                price: 1200,
                category: {
                    categoryName: 'Entertainment',
                    categoryId: 574
                }
            },
            {
                name: 'Iphone 16 512GB',
                price: 1150,
                category: {
                    categoryName: 'Entertainment',
                    categoryId: 467
                }
            }
        ]
    }
];
function checkPerson(obj) {
    if (obj.middleName !== undefined) {
        return `${obj.lastName} ${obj.firstName} ${obj.middleName}`;
    }
}
// checkPerson({ firstName: 'Dmitriy', lastName: 'Yaroshchuk', middleName: 'Romanovich' });
function applySettings(obj) {
    if (obj.theme === 'dark') {
        console.log('На сайте используется темная тема');
    }
    else {
        console.log('На сайте используется светлая тема');
    }
    if (obj.notifications) {
        console.log('Уведомления включены');
    }
    else {
        console.log('Уведомления выключены, если хотите получать уведомления, включите их');
    }
    if (obj.autoSave.enable) {
        console.log(`Настройки будут переменяны через ${obj.autoSave.interval}мл.`);
    }
    else {
        console.log('Включите авто сохранение');
    }
}
export {};
// applySettings({ theme: 'dark', notifications: true, autoSave: { enable: true, interval: 1200 } });
//# sourceMappingURL=script.js.map