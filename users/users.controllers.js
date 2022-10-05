const uuid = require('uuid')

const usersDB = [{
    id: 'a1275322-d275-49ba-821f-a4ece9487739',
    first_name: 'gilmar',
    last_name: 'fasabi morales',
    email: 'gilmar@academlo.com',
    password: '1234gipa',
    birthday: '1996/03/03'
},
{
    id: '2ecac947-3917-4209-8c45-a8fdeccf424a',
    first_name: 'arnol',
    last_name: 'ramirez lazo',
    email: 'arnol@academlo.com',
    password: '1234arno',
    birthday: '2006/09/27'
}
];

const getAllUsers = () =>{
    return usersDB;
}

const getUserById = (id) => {
  const data = usersDB.find(user => user.id === id)
  return data;
}

const createUser = (first_name,last_name,email,password,birthday) =>{
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    };

    usersDB.push(newUser);
    return newUser;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}