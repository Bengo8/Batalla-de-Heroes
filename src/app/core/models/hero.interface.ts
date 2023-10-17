import { BattleHistory } from "./battleHistory.interface"

export interface Hero {
    id: number,
    name: string,
    img: string,
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number,
    battleHistory?: BattleHistory[]
}