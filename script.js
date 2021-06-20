// // ES - 15

// // Scrivi un programma per la gestione di un garage.
// // Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
// // Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

// // Consigli:
// // Puoi usare un array come base per salvare le automobili.
// // Rivedendo la lezione sara’ sicuramente piu’ facile farlo.

let garage = {
  name: 'Heaven garage',
  cars: [
    {
      brand: 'Audi',
      model: 'S6',
    },
    {
      brand: 'Alfa Romeo',
      model: 'Giulietta',
    },
    {
      brand: 'Audi',
      model: 'Subaro Baracca',
    },
    {
      brand: 'Fiat',
      model: 'Panda',
    },
    {
      brand: 'Lancia',
      model: 'delta',
    },
    {
      brand: 'Fiat',
      model: '500',
    },
  ],

  findCar: function (vehicle) {
    let result = [];

    this.cars.filter((car) => {
      if (car.brand.toLowercase() == vehicle.toLowercase()) {
        result.push(car);
      }
    });

    if (result.length > 0) {
      result.forEach((car) => {
        console.log(car.model);
      });
    } else {
      console.log('Car not found');
    }
  },
};

// garage.findCar('Audi');

// ES - 16 DIFFICILE !!!

// Scrivi un programma per la gestione di una rubrica telefonica.

// Crea un oggetto rubrica con la proprieta’ contatti che sara’ un array di oggetti, ovvero i singoli contatti.

// I contatti dovranno avere almeno 2 proprieta’ Nome e Telefono.

//   Implementa i metodi dell'oggetto per le seguenti operazioni:
//       - Visualizzazione dell'intera lista contatti
//       - Inserimento di un nuovo contatto
//       - Modifica di uno contatto passando in input il nome del contatto
//       - Cancellazione di un contatto passando in input il nome del contatto
//       - Ricerca passando il nome e restituendo il singolo contatto (restituire oggetto contatto da usare come input per l'edit)

let phonebook = {
  contacts: [
    {
      name: 'Laura Tondi',
      phone: '0685840544',
    },
    {
      name: 'Marco Insabato',
      phone: '3404110234',
    },
    {
      name: 'Matteo Sisto',
      phone: '3465599842',
    },
    {
      name: 'Davide Romeo',
      phone: '3489076345',
    },
  ],

  showContacts: function () {
    this.contacts.forEach((contact) => {
      console.log(contact);
    });
  },

  addContact: function (name, phone) {
    let contact = {
      name: name,
      phone: phone,
    };
    this.contacts.push(contact);
  },

  searchContact: function (input) {
    // let search = [];
    // this.contacts.filter((contact) => {
    //   if (contact.name == input) {
    //     search.push(contact);
    //   }
    // });

    // if (search.length > 0) {
    //   search.forEach((contact) => {
    //     console.log(contact);
    //   });
    // } else {
    //   console.log('Contact not found!');
    // }

    this.contacts.filter((contact) => {
      if (contact.name == input) {
        console.log(`Nome: ${contact.name}, Telefono: ${contact.phone}`);
      }
    });
  },

  removeContact: function (input) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === input) {
        this.contacts.splice(i, 1);
      }
    }
  },

  // modifyContact: function (input, name, phone) {
  //   let contact = {
  //     name: name,
  //     phone: phone,
  //   };
  //   for (let i = 0; i < this.contacts.length; i++) {
  //     if (this.contacts[i].name === input) {
  //       this.contacts.splice(i, 1, contact);
  //     }
  //   }
  // },
  modifyContact: function (name, phone) {
    this.contacts.forEach((contact) => {
      if (contact.name == name) {
        contact.phone = phone;
      }
    });
  },
};

// phonebook.searchContact('Marco Insabato');

// phonebook.addContact('Noemi Lopiccolo', '3489022305');
// phonebook.addContact('Alessio Sciumbarruto', '3335098000');
phonebook.showContacts();

// phonebook.modifyContact('Laura Tondi', '3489022305');

phonebook.removeContact('Matteo Sisto');

phonebook.showContacts();
