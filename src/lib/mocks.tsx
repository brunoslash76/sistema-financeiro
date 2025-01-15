const users = [
    {
      name: 'Joana da Silva Oliveira',
      email: 'joanaso@email.com',
      password: '123456',
    },
  ];

  const invoices = [
    {
        id: '12345abcd',
        type: 'Depósito',
        value: '300,00',
        date: '18/02/2024'    
    },

    {
        id: '12345abce',
        type: 'Saque',
        value: '300,00',
        date: '18/02/2024'    
    },
    {
        id: '12346abcd',
        type: 'Depósito',
        value: '300,00',
        date: '18/02/2024'    
    },

    {
        id: '12345abcf',
        type: 'Saque',
        value: '300,00',
        date: '18/02/2024'    
    }
  ]

  export {users, invoices}