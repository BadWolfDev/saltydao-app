import React from 'react';
import { 
    InfContainer, TimeContainer, List, Item, TimeLine, InfoDate, InfoText, InfoTitle, RdTitle, TopLineR} from './RoadmapElements';
import {
    BtnWrap,
    Column1,
    InfoRow,
    InfoContainer,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    Column2,
    ImgWrap,
    Img,
    TopLine,
    Heading
} from '../standard/StSectionelements';

const myStyle = {
    'display': 'none',
}

const colStyle = {
    'width': '100%',
}

const Roadmap = ({ id, lightBg, DarkText, lightText, img, alt, imgStart }) => {
    return (
        <>
        {/*<InfContainer lightBg={lightBg} id={id}>
            <RdTitle>Roadmap</RdTitle>
            <TimeContainer>
                <TimeLine>
                    <List>
                        <Item>
                            <InfoDate darkText={DarkText}>20Nov</InfoDate>
                            <InfoTitle lightText={lightText}>Hola</InfoTitle>
                            <InfoText lightText={lightText}>jejetl</InfoText>
                        </Item>
                        <Item>
                            <InfoDate darkText={DarkText}>20Nov</InfoDate>
                            <InfoTitle lightText={lightText}>Hola</InfoTitle>
                            <InfoText lightText={lightText}>jejetl</InfoText>
                        </Item>
                        <Item>
                            <InfoDate darkText={DarkText}>20Nov</InfoDate>
                            <InfoTitle lightText={lightText}>Hola</InfoTitle>
                            <InfoText lightText={lightText}>jejetl</InfoText>
                        </Item>
                        <Item>
                            <InfoDate darkText={DarkText}>20Nov</InfoDate>
                            <InfoTitle lightText={lightText}>Hola</InfoTitle>
                            <InfoText lightText={lightText}>jejetl</InfoText>
                        </Item>
                    </List>
                </TimeLine>
            </TimeContainer>
    </InfContainer>*/}
            <InfContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1 style={colStyle}>
                        <TopLineR>Roadmap</TopLineR>
                            <TimeContainer>
                                <TimeLine>
                                    <List>
                                        <Item>
                                            <InfoDate darkText={DarkText}>Goal 1</InfoDate>
                                            <InfoTitle lightText={lightText}>Temple of Sin:</InfoTitle>
                                            <InfoText lightText={lightText}>Upon sellout, we will start Shell bank and donate 400 sol from mint to the community bank. 75% of royalties from secondary sales will go directly to Shell Bank. Shell bank will start making investments and acquiring assets.{<br/>}{<br/>}
                                            Sangre para Sangre-  The Blood for Blood tax. When you choose this life you’re in for good, and you’ll never leave without paying in blood. Royalties will be 15% but will be increased to 50% for those who list below mint or less than the last sale. Shell Bank takes from the weak and gives to those loyal to the streets. 
                                            </InfoText>
                                        </Item>
                                        <Item>
                                            <InfoDate darkText={DarkText}>Goal 2</InfoDate>
                                            <InfoTitle lightText={lightText}>A life of Crime:</InfoTitle>
                                            <InfoText lightText={lightText}>A Life of crime: Each neighborhood of 550 will compete in missions throughout the week. The winning neighborhood of that week will earn 10% of the Shell Bank balance to be distributed amongst its delisted holders.{<br/>}{<br/>}A random NFT will be stolen from the bank and airdropped to a random holder every week in the winning neighborhood.</InfoText>
                                        </Item>
                                        <Item>
                                            <InfoDate darkText={DarkText}>Goal 3</InfoDate>
                                            <InfoTitle lightText={lightText}>Crooked Smiles:</InfoTitle>
                                            <InfoText lightText={lightText}>The Solana Bottoms mayor’s office will be revealed. Bikinisteads holders will compete through missions each week, with each completed mission = 1 vote. Holders who complete all missions for the week will have their names put up for ballot. The community will hold a vote for each candidate, the holder with the most votes will win the race. The Mayor will receive a weekly benefit of 3% of the Shell Banks balance. A custom 1/1 will be created for each mayor and the portrait will be hung up in the hall of mayors. The Mayor will be up removed from office every week for embezzlement. Through corruption and bribery all mayors can run again for re-election. 
</InfoText>
                                        </Item>
                                        <Item>
                                            <InfoDate darkText={DarkText}>Goal 4</InfoDate>
                                            <InfoTitle lightText={lightText}>The Corrupt Alliance:</InfoTitle>
                                            <InfoText lightText={lightText}>The formation of Bikinisteads DAO. The community will get to decide all transactions and investments of Shell Bank. The DAO will select Bank Managers to run Shell Bank and to insure the future success of the project. All transactions from this point on will be decided by the bank managers. A weekly vote will be held alongside the mayoral race to decide if new bank managers need to be elected.</InfoText>
                                        </Item>
                                        <Item>
                                            <InfoDate darkText={DarkText}>Goal 5</InfoDate>
                                            <InfoTitle lightText={lightText}>The Corrupt Alliance:</InfoTitle>
                                            <InfoText lightText={lightText}>Release of Gen 2 collection pfps and The Wet paper phase 2- High stakes.</InfoText>
                                        </Item>
                                    </List>
                                </TimeLine>
                            </TimeContainer>
                        </Column1>
                        <Column2 style={myStyle}>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfContainer>
        </>
    )
}

export default Roadmap;
