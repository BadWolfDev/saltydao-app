import React, {useState, useRef} from 'react';
import {
    Accordion,
    Icon,
    Question,
    Panel,
    Answer,
    ContainerFluid,
} from './FaqElements'

const QuestionComponent = () => {

    const [setActive, setActiveState] = useState("");

    const toggleAccordion = () =>{
        setActiveState(setActive === "" ? "active" : "");
    }

    return(
        <>
        <ContainerFluid>
        <Accordion>
                <Question>Question?</Question>
        </Accordion>
        <Panel>
            <Answer>
                asfdsfdsgdfxjvbdskcjbvdjfhbv
            </Answer>
        </Panel>
        <Accordion>
                <Question>Question?</Question>
        </Accordion>
        <Panel>
            <Answer>
                asfdsfdsgdfxjvbdskcjbvdjfhbv
            </Answer>
        </Panel>
        <Accordion>
                <Question>Question?</Question>
        </Accordion>
        <Panel>
            <Answer>
                asfdsfdsgdfxjvbdskcjbvdjfhbv
            </Answer>
        </Panel>
        </ContainerFluid>
        </>
    )
};

export default QuestionComponent;