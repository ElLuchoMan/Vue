const app = new Vue({
    el: '#main',
    data: {
        conectado: true,
        edad: 15,
        lista: ['Diana', 'Luis', 'Tobby'],
        listaPersonas: [
            { nombre: 'Diana', edad: 19 },
            { nombre: 'Luis', edad: 24 },
            { nombre: 'Tobby', edad: 1 }
        ],
    }
});