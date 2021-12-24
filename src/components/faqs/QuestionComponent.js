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
                    <Question>Mint Date</Question>
                    <Answer>
                        TBA
                    </Answer>
                </Accordion>
                <Accordion>
                    <Question>What is the total supply?</Question>
                    <Answer>
                        2,222
                    </Answer>
                </Accordion>
                <Accordion>
                    <Question>What network will this be launched on?</Question>
                    <Answer>
                        Solana!
                    </Answer>
                </Accordion>
                <Accordion>
                    <Question>How much does it cost to mint an NFT?</Question>
                    <Answer>
                        0.77SOL
                    </Answer>
                </Accordion>
                <Accordion>
                    <Question>What are the secondary markets?</Question>
                    <Answer>
                        TBA
                    </Answer>
                </Accordion>
                <Accordion>
                    <Question>Secondary Fees?</Question>
                    <Answer>
                    8% with 50% going to the SaltyDAO - R.U.G.S Insurance and Launchpad community bank and the remaining 50% going to the founders.
                    </Answer>
                </Accordion>
        </ContainerFluid>
        </>
    )
};

export default QuestionComponent;