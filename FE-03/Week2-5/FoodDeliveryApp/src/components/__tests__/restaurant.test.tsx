import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import mockdata from "../mocks/mockdata.json"
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard";

test("Testing restauratn",()=>{
    render(<RestaurantCard resdata={mockdata}/>)

    const res=screen.getByText("Theobroma")

    expect(res).toBeInTheDocument()
    
})