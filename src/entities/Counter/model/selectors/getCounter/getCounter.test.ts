import { StateSchema } from "app/providers/storeProvider"
import { getCounter } from "./getCounter"
import { DeepPartial } from "@reduxjs/toolkit"




describe ('Get Counter', ()=> {
    test('return counter value', ()=>{
        const state: DeepPartial<StateSchema> = {
            counter: {value: 10}
        }

        expect(getCounter(state as StateSchema)).toEqual({value: 10})
    })
})