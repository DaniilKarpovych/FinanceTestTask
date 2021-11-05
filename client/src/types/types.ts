export interface financeModel {
    ticker: string
    exchange: string
    price: number
    change: number
    change_percent: number
    dividend: number
    yield: number
    last_trade_time: string
    direction?: string
}