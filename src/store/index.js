import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    filterCountries: []
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload
    },
    setFilterCountrie(state, payload) {
      state.filterCountries = payload
    },
  },
  actions: {
    async getCountries({ commit }) {
      try {
        const res = await fetch('countries.json')
        const data = await res.json()

        commit('setCountries', data)
      } catch (error) {
        console.log(error)
      }
    },

    regionFilter({ commit, state }, region) {
      const filter = state.countries.filter(countrie =>
        countrie.region.includes(region)
      )
     
      commit('setFilterCountrie', filter)
    },
    nameFilter({ commit, state }, text) {
      const clientText = text.toLowerCase()
      const filter = state.countries.filter(countrie => {
        const apiText = countrie.name.toLowerCase()
        if (apiText.includes(clientText)) {
          return countrie

        }
      })
      commit('setFilterCountrie', filter)
    }
  },

  getters: {
    topCountriesPopulation(state) { //sort ordena de may a men
      return state.filterCountries.sort((a, b) => {
        return a.population < b.population ? 1 : -1
      })
    }
  },
  modules: {
  }
})
