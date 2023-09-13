import { render, screen } from "@testing-library/react"
import ApiComponent from "./ApiComponent"
describe("Asynch Component", ()=> {
    test("doest not render data", async ()=> {
        render(<ApiComponent />);
    
        const asyncElements = await screen.findAllByRole('listitem');
        expect(asyncElements).not.toHaveLength(0);
    })
})
