import {atom, selector, selectorFamily} from 'recoil'

export function createDefaultTicker(): Ticker {
    return {
        id: '',
        marginPrice: 0
    }
}

export const TickerList = atom<TickerList>({
    key: 'TickerList',
    default: []
})

export const Ticker = selectorFamily<Ticker, string>({
    key: 'Ticker',
    get: id => ({get}) => {
        const ticker = get(TickerList)
        return ticker.find(t => t.id === id) || createDefaultTicker()
    },
    cachePolicy_UNSTABLE: {
        eviction: 'most-recent',
    }
})

export const TickerPriceSum = selector({
    key: 'TickerPriceSum',
    get: ({get}) => {
        const ticker = get(TickerList)
        return ticker.reduce((sum, t) => sum + t.marginPrice, 0)
    },
    cachePolicy_UNSTABLE: {
        eviction: 'most-recent',
    }
})