const state = {
    movies: []
}

const actions = {
    GET_MOVIES : (state,title) => {
        fetch(`http://localhost:8080/movies?search=${title}`, {
	    			method: 'GET',
                    headers: {'Access-Control-Allow-Origin':'*'}
	    		}).then(response => {
	    				response.json().then(res => {
                            console.log(res)
                        state.commit('SET_MOVIES', res)            
                        });
	    		}).catch(err => {console.error(err);});
    }
}

const mutations = {
    SET_MOVIES: (state, data) => {
      state.movies = Object.assign({}, response.data)
    }
  }
const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}