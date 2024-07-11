// importo il metodo che andrà a crearmi l'oggetto
import {reactive} from 'vue'

// creo l'oggetto che salvo in una costante
export const store = reactive ({
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=fd16ae8bad3a7198a01333e0d51d2d43&query="
})

