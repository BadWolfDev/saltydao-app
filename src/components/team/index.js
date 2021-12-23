import React from 'react'
import Icon1 from '../../images/faq.svg'
import Icon2 from '../../images/faq.svg'
import Icon3 from '../../images/faq.svg'
import Icon4 from '../../images/faq.svg'
import { TeamContainer, Teamh1, TeamWrapper, TeamCard, TeIcon, Teamh2, TeamP, TeamCont} from './TeamElements'

const Team = () => {
    return (
        <>
            <TeamContainer id="team" >
                <Teamh1>Meet the team</Teamh1>
                <TeamWrapper>
                    <TeamCard>
                        <TeIcon src={Icon1}></TeIcon>
                        <Teamh2>pilon</Teamh2>
                        <TeamP>kami kami kami</TeamP>
                    </TeamCard>
                    <TeamCard>
                        <TeIcon src={Icon2}></TeIcon>
                        <Teamh2>pilon</Teamh2>
                        <TeamP>kami kami kami</TeamP>
                    </TeamCard>
                    <TeamCard>
                        <TeIcon src={Icon3}></TeIcon>
                        <Teamh2>pilon</Teamh2>
                        <TeamP>kami kami kami</TeamP>
                    </TeamCard>
                    <TeamCard>
                        <TeIcon src={Icon4}></TeIcon>
                        <Teamh2>pilon</Teamh2>
                        <TeamP>kami kami kami</TeamP>
                    </TeamCard>
                    <TeamCard>
                        <TeIcon src={Icon1}></TeIcon>
                        <Teamh2>pilon</Teamh2>
                        <TeamP>kami kami kami</TeamP>
                    </TeamCard>
                </TeamWrapper>
            </TeamContainer>
        </>
    )
}

export default Team;
