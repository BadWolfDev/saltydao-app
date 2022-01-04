import React from 'react';
import { 
    WhitepaperContainer,
    WhitepaperContent,
    BenefitList,
    BenefitListItem,
    WhitepaperTitle,
    WhitePaperCol,
    BenefitsTitle,
    CardContainer
} from './StSectionelements';

const Benefits = () => {
    return (
        <>
            <WhitepaperContainer className='bg-white' id="benefits">
                <WhitepaperTitle>Benefits</WhitepaperTitle>
                <WhitepaperContent>
                    <WhitePaperCol>
                        <BenefitsTitle>To Members:</BenefitsTitle>
                        <BenefitList>
                            <BenefitListItem>Access to the best, earliest, and safest alpha in the space</BenefitListItem>
                            <BenefitListItem>SaltyDAO R.U.G.S insurance policy</BenefitListItem>
                            <BenefitListItem>Peace of mind when hitting the mint button</BenefitListItem>
                            <BenefitListItem>A place to be as Salty as you’d like about upcoming projects</BenefitListItem>
                            <BenefitListItem>Direct access to have your own project evaluated for the SaltySeal</BenefitListItem>
                            <BenefitListItem>Potential benefits include OG, WL, airdrops, free mints, and more.</BenefitListItem>
                            <BenefitListItem>Opportunity to petition to have your favorite rugged project, de-rugged and funded.</BenefitListItem>
                            <BenefitListItem>All SaltyDAO members will have up to 25% rug insurance with a cap at 2 sol. That's
                                right, if you get rugged we will cover upto 25% of your loss up to 2 sol.</BenefitListItem>
                        </BenefitList>
                    </WhitePaperCol>
                    <WhitePaperCol>
                        <BenefitsTitle>To Upcoming Projects:</BenefitsTitle>
                        <BenefitList>
                            <BenefitListItem>A seal of approval that showing you deserve the community's investment in your
                                project</BenefitListItem>
                            <BenefitListItem>Approved projects receive the SaltySeal, the gold standard in NFT approval</BenefitListItem>
                            <BenefitListItem>A 0% interest loan to assist with startup costs payable once project has minted</BenefitListItem>
                            <BenefitListItem>5 days of promo and marketing by SaltyDAO so that the whole space knows your
                                project is one they can trust and believe in</BenefitListItem>
                            <BenefitListItem>Additional funding negotiable after mint, if necessary</BenefitListItem>
                            <BenefitListItem>Guidelines to discord setup and team management</BenefitListItem>
                        </BenefitList>
                    </WhitePaperCol>
                </WhitepaperContent>
            </WhitepaperContainer>
        </>
    )
}

export default Benefits;
