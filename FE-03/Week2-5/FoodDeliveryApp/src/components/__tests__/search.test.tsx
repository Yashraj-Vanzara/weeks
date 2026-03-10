import { describe, expect, test } from "@jest/globals";
import { act, fireEvent, render, screen } from "@testing-library/react";
// @ts-ignore
import Body from "../Body";
import { MemoryRouter } from "react-router-dom";
import reslistdata from "../mocks/reslistdata.json"
import "@testing-library/jest-dom"

// @ts-ignore
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            // @ts-ignore
            return Promise.resolve(reslistdata)
        }
    })
})

describe("Test",()=>{

    beforeAll(()=>{
        console.log("Run before all")
    })
    beforeEach(()=>{
        console.log("Run before each ")
    })

    afterAll(()=>{
        console.log("After all runs ")
    })
    afterEach(()=>{
        console.log("After each runs ")
    })
test("Should render body with serach",async ()=>{
    await act(async()=>{
         render(
    <MemoryRouter>
    <Body/>
    </MemoryRouter>

    

    )
    })
    const btn=screen.getByRole('button',{name:/Search/})
    const search=screen.getByTestId("SearchInput")
    fireEvent.change(search,{target:{value:'pizza'}})
    fireEvent.click(btn)

    const card=screen.getAllByTestId("res")
    expect(card.length).toBe(2)
   
})
})
