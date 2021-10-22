import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  PricingSubHeading
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Choose your plan</PricingHeading>
          <PricingSubHeading>
            Let's choose the package that is best for you and<br/>
            explore it happiy and cheerfully
          </PricingSubHeading>
          <PricingContainer>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                </PricingCardIcon>
                <PricingCardPlan>Free Plan</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                </PricingCardFeatures>
                <PricingCardCost>Free</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Select</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                </PricingCardIcon>
                <PricingCardPlan>Standard Plan</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                </PricingCardFeatures>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                </PricingCardIcon>
                <PricingCardPlan>Premium Plan</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                  <PricingCardFeature>Mauris</PricingCardFeature>
                </PricingCardFeatures>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;