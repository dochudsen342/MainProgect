import { render, screen } from "@testing-library/react"
import SideBar from "./SideBar"

describe('SideBar',() =>{
    test('without paran',() =>{
        render(<SideBar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})