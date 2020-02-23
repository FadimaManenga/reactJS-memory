// squelette de test Card
import {expect} from "chai"
import {shallow} from "enzyme"
import React from "react"
import sinon from "sinon"

import Card from "./Card"


 describe('<Card />', () => {
     it("should trigger its `onClick` prop when clicked", () => {
         // const onClick = jest.fn()
         const onClick = sinon.spy()
         const wrapper = shallow(
             <Card 
             card="😀" 
             feelback="hidden" 
             index={0} 
             onClick={onclick} />
         )
    wrapper.simulate("click")
    // expect(onClick).toHaveBeenCalledWith(0)
    expect(onClick).to.have.been.calledWith(0)
     })
 });
 