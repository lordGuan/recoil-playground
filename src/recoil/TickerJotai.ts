import {atom} from 'jotai'
import {atomFamily} from "jotai/utils";

export function createDefaultTicker(): Ticker {
    return {
        id: '',
        marginPrice: 0
    }
}

export const TickerList = atom<TickerList>([])

export const Ticker = atomFamily(id => atom((get) => {
    return get(TickerList).find(t => t.id === id) || createDefaultTicker()
}))

export const TickerPriceSum = atom((get) => {
    const ticker = get(TickerList)
    return ticker.reduce((sum, t) => sum + t.marginPrice, 0)

})