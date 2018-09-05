/*
* interface Contact
* @param {number} - id
* @param {string} - name
* @param {string} - phone
* @param {string} - img
* */
class Contact {
  constructor(id, name, phone, img) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.img = img;
  }
}

export const Contacts = [
  new Contact(1, "Vova", "+380511234567", "1.jpg"),
  new Contact(2, "Ivan", "+380501234567", "2.jpg"),
  new Contact(3, "Vasa", "+380501234567", "3.jpg"),
  new Contact(4, "Peta", "+380501234567", "4.jpg")
];