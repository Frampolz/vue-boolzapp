/*Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

*/
const app = new Vue({
  el: '#app',
  data: {
    
    contacts: [
     {
       name: "Michele",
       avatar: "_1",
       visible: true,
       messages: [
         {
           date: "10/01/2020 15:30:55",
           text: "Hai portato a spasso il cane?",
           status: "sent",
         },
         {
           date: "10/01/2020 15:50:00",
           text: "Ricordati di dargli da mangiare",
           status: "sent",
         },
         {
           date: "10/01/2020 16:15:22",
           text: "Tutto fatto!",
           status: "received",
         },
       ],
     },
     {
       name: "Fabio",
       avatar: "_2",
       visible: true,
       messages: [
         {
           date: "20/03/2020 16:30:00",
           text: "Ciao come stai?",
           status: "sent",
         },
         {
           date: "20/03/2020 16:30:55",
           text: "Bene grazie! Stasera ci vediamo?",
           status: "received",
         },
         {
           date: "20/03/2020 16:35:00",
           text: "Mi piacerebbe ma devo andare a fare la spesa.",
           status: "sent",
         },
       ],
     },
   
     {
       name: "Samuele",
       avatar: "_3",
       visible: true,
       messages: [
         {
           date: "28/03/2020 10:10:40",
           text: "La Marianna va in campagna",
           status: "received",
         },
         {
           date: "28/03/2020 10:20:10",
           text: "Sicuro di non aver sbagliato chat?",
           status: "sent",
         },
         {
           date: "28/03/2020 16:15:22",
           text: "Ah scusa!",
           status: "received",
         },
       ],
     },
     {
       name: "Luisa",
       avatar: "_4",
       visible: true,
       messages: [
         {
           date: "10/01/2020 15:30:55",
           text: "Lo sai che ha aperto una nuova pizzeria?",
           status: "sent",
         },
         {
           date: "10/01/2020 15:50:00",
           text: "Si, ma preferirei andare al cinema",
           status: "received",
         },
       ],
     },
   ],
    counter: 0,
    search: "",
    newMessage: "",
    dropdownMenu: {
      toggle: false,
      index: false
    }

  },
  created() {
    
  },

  methods: {
    newMessages: function() {
      let newMsgSent = {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: this.newMessage,
        status: "sent",
      }
      let newMsgReceived = {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: "ok",
        status: "received",
      }
      let msgArray = this.contacts[this.counter].messages;
      if(this.newMessage.trim().length != 0) {
        msgArray.push(newMsgSent);
        setTimeout(() => {
          msgArray.push(newMsgReceived);
        }, 1000);
      }
      this.newMessage="";
    },
    iconChange: function() {
      
    },
    findContacts: function() {
      this.contacts.forEach((contact) => {
        if (contact.name.toLowerCase().includes(this.search.toLowerCase())) {
          contact.visible = true;
        } else {
          contact.visible = false;
        }
      })
    },
    deleteMsg: function(index) {
     this.contacts[this.counter].messages.splice(index, 1);    
   }, 
   deleteContact: function(index) {
     this.contacts.splice(index, 1)
   },

   dropdown: function(index) {
    
     if (this.dropdownMenu.toggle === true && this.dropdownMenu.index === index) {
       this.dropdownMenu.index == true
       this.dropdownMenu.toggle == true
    } 
     this.dropdownMenu.toggle = !this.dropdownMenu.toggle
     this.dropdownMenu.index = index
   },
   nightmode: function() {
     const container = document.querySelector(".inner-container");
     container.classList.toggle("nightmode")
     const img = document.querySelectorAll("img");

     img.forEach(element => {
       element.classList.toggle("nightmode")
     });
     
   },
  }
});
