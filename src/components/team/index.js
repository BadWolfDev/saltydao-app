import React from 'react'
import Icon1 from '../../assets/images/Bad_Wolf.jpeg'
import Icon2 from '../../assets/images/Dre.jpeg'
import Icon3 from '../../assets/images/Prez.jpeg'
import Icon4 from '../../assets/images/Matt.jpeg'
import Icon5 from '../../assets/images/AelphaDUB.jpeg'
import { TeamContainer, Teamh1, TeamWrapper, TeamCard, TeIcon, Teamh2, TeamP, TeamCont} from './TeamElements'
import { Button } from '../ButtonElements';

const btnTwitter = {
    'background':'#00acee',
    'max-width':'150px',
    'font-size':'10px',
    'border-radius':'2px',
    'margin':'auto'
}

const Team = () => {
    return (
        <>
            <TeamContainer id="team" >
                <Teamh1>Meet the team</Teamh1>
                <TeamWrapper>
                    <TeamCard>
                        <TeIcon src={Icon1}></TeIcon>
                        <Teamh2>Bad Wolf</Teamh2>
                        <Button style={btnTwitter} onClick={event => window.location.href="https://twitter.com/DMotta_182?s=20"}>@DMotta_182</Button>
                    </TeamCard>
                    <TeamCard>
                        <TeIcon src={Icon2}></TeIcon>
                        <Teamh2>Dré</Teamh2>
                        <Button style={btnTwitter} onClick={event => window.location.href="https://twitter.com/willowcatstudio?s=20"}>@willowcatstudio</Button>
                    </TeamCard>
                    <TeamCard>
                        <TeIcon src={Icon3}></TeIcon>
                        <Teamh2>Prez</Teamh2>
                        <Button style={btnTwitter} onClick={event => window.location.href="https://twitter.com/ClearlyNothing?s=20"}>@ClearlyNothing</Button>
                    </TeamCard>
                    <TeamCard>
                        <TeIcon src={Icon4}></TeIcon>
                        <Teamh2>Matt</Teamh2>
                        <Button style={btnTwitter} onClick={event => window.location.href="https://twitter.com/NFTs_and_shit?s=20"}>@NFTs_and_shit</Button>
                    </TeamCard>
                    <TeamCard>
                        <TeIcon src={Icon5}></TeIcon>
                        <Teamh2>AelphaDUB</Teamh2>
                        <Button style={btnTwitter} onClick={event => window.location.href="https://twitter.com/NFTs_and_shit?s=20"}>@NFTs_and_shit</Button>
                    </TeamCard>
                </TeamWrapper>
            </TeamContainer>
        </>
    )
}

export default Team;
