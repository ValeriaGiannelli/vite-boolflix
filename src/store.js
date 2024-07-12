// importo il metodo che andrà a crearmi l'oggetto
import {reactive} from 'vue'

// creo l'oggetto che salvo in una costante
export const store = reactive ({
    // api di riferimento
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=fd16ae8bad3a7198a01333e0d51d2d43&query=",

    // input della search
    searchTitle:'',

    // lista di oggetti che si va a popolare dopo la ricerca
    filmList:[],

    // api per serie tv
    apiURLSerie: "https://api.themoviedb.org/3/search/tv?api_key=fd16ae8bad3a7198a01333e0d51d2d43&query=",

    // lista di oggetti contenenti le info delle serie tv
    serieList:[],

    // l'utente ha fatto la ricerca
    userSearched: false,
})

