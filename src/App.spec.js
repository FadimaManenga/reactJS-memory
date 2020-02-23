import {expect} from "chai"
import {shallow } from "enzyme"
import React from "react"
// import ReactDom from "react-dom"
import sinon from "sinon"


import App from "./App"
import GuessCount from "./GuessCount"

// Formulation de smoke test

describe('<App />', () => {

// it()  est fourni par Jest. Nous n’avons pas besoin de recourir à une assertion spécifique, car c’est le  ReactDOM.render()  qui lèvera une exception s’il rencontre une erreur
    // it("renders without crashing", () => {

    // Voici un premier exemple : détecter la présence, quelque part dans la grappe, d’un autre composant doté de props spécifiques, grâce à  contain()  :
    it ("contains a zero-guess counter", () =>{
        /*
        const div = document.createElement("div")
        ReactDom.render(<App />, div)
        */
       // On recourt ici au shallow renderer d’Enzyme, qui utilise le  render()  du composant, mais sans descendre dans les  render()  de ses composants fils : c’est une approche idéale pour les tests unitaires, et de loin la plus populaire.
        const wrapper = shallow(<App />)
        expect(wrapper).to.contain(<GuessCount guesses={0} />)
    })

    // autre exemple : 
    // On peut aussi aller « chercher » des parties de la grappe pour leur poser des questions spécifiques, ou simplement compter les occurrences. Par exemple, notre plateau est censé comporter 36 cartes, 6 × 6 :
    it("has 36 cards", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find("card")).to.have.length(36)
    })

    it("should match its reference snapshot", () => {
        const mock = sinon
            .stub(App.prototype, "generateCards")
            .returns([...SYMBOLS.repeat(2)])
        try {
            const wrapper = shallow(<App />)
            expect(wrapper).to.matchSnapshot()
        } finally {
            mock.restore()
        }  
     })

});

/*
// test chai
it("demoes", () => {
    expect({name: "Joe"}).toEqual({name: "Jane"})
})
*/
