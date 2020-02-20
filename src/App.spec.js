import React from "react"
import ReactDom from "react-dom"
import App from "./App"

// it()  est fourni par Jest. Nous n’avons pas besoin de recourir à une assertion spécifique, car c’est le  ReactDOM.render()  qui lèvera une exception s’il rencontre une erreur
it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDom.render(<App />, div)
})