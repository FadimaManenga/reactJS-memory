import {expect} from "chai"
import {shallow } from "enzyme"
import React from "react"
// import ReactDom from "react-dom"

import App from "./App"
import GuessCount from "./GuessCount"


describe('<App />', () => {

// it()  est fourni par Jest. Nous n’avons pas besoin de recourir à une assertion spécifique, car c’est le  ReactDOM.render()  qui lèvera une exception s’il rencontre une erreur
    it("renders without crashing", () => {
        /*
        const div = document.createElement("div")
        ReactDom.render(<App />, div)
        */
        const wrapper = shallow(<App />)

        expect(wrapper).to.contain(<GuessCount guesses={0} />)
    })

    it("has 36 cards", () => {
        const wrapper = shallow(<App />)

        expect(wrapper.find("card")).to.have.length(36)
    })

});

/*
// test chai
it("demoes", () => {
    expect({name: "Joe"}).toEqual({name: "Jane"})
})
*/
