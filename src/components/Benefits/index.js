import React from 'react';
import { 
    WhitepaperContainer,
    WhitepaperContent,
    BenefitList,
    BenefitListItem,
    WhitepaperTitle
} from './StSectionelements';

const Benefits = () => {
    return (
        <>
            <WhitepaperContainer className='bg-white'>
                <WhitepaperContent>
                    <WhitepaperTitle>Benefits</WhitepaperTitle>
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
                </WhitepaperContent>
            </WhitepaperContainer>
        </>
    )
}

export default Benefits;
