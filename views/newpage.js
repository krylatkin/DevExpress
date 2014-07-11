MyApp.newpage = function () {

    var employees = [
        {
            key: 'Management',
            items: [
                { name: "Bob", hired: 2005 },
                { name: "John", hired: 2007 },
                { name: "Frank", hired: 2001 },
                { name: "Robert", hired: 2007 },
            ]
        },
        {
            key: 'Manufacturing',
            items: [
                { name: "Paul", hired: 2011 },
                { name: "Elizabeth", hired: 2000 },
                { name: "Mary", hired: 2002 },
                { name: "Michael", hired: 2003 },
                { name: "George", hired: 2002 },
            ]
        },
        {
            key: 'Sales',
            items: [
                { name: "Deborah", hired: 2000 },
                { name: "Lisa", hired: 1999 },
                { name: "Mark", hired: 2011 },
                { name: "Joseph", hired: 2000 }
            ]
        }
    ];

    console.log(this);
    return {
        value: ko.observable('Введите значение...'),
        employees: employees
    };
}
