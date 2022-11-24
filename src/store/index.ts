import { createStore } from 'vuex'

export default createStore({
  state: { // Data 
          // aquí se ubican los distintos estados del store,
          // haciendo una comparativa con el Option API, sería el equivalente al data()
  },      // aquí van todos los datos que contiene el Store, las distintas variables que tendremos
  getters: { // Computed 
            // métodos que nos permiten acceder a la información de un estado,
            // nos permiten acceder a los elementos que tendremos en el state
  },
  mutations: { // Set sync 
              // los métodos equivalentes a un setter,
              // son métodos que nos permiten modificar los estados
  },
  actions: { // Set async  
            // las actions al igual que las mutations,
            // nos permiten modificar los estados de los state,
            // pero con la diferencia que las actions son modificaciones async
  },
  modules: { // subdivide the store
            // nos permiten subdividir nuestro store y hacer una estructuración del mismo a través de sub-elementos
  }
})
