import stocks from "../../data/stocks";

const state = {
    stocks: [],
};

const mutations = {
    'SET_STOCKS'(state, stocks){
        state.stocks = stocks;
    },
    'RANDOMIZE_STOCKS'(state){
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (0.55 + Math.random()));
        });
    },
};

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },
    initializeStocks: ({commit}) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({commit}) => {
        commit('RANDOMIZE_STOCKS');
    }
};

const getters = {
    getStocks: state => {
        return state.stocks;
    }
};

export default {
    state, mutations, actions, getters,
};