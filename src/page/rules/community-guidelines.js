import React from 'react';
import RulesNavbar from '../../components/rules-navbar';

export default function CommunityGuidelines() {
  return (
    <div>
      <RulesNavbar page={'Community Guidelines'} />
      <div className="rules-container">
        <h1 className="bold center">Community Guidelines</h1>

        <h2>
          Hello and welcome to the Reskyut community. You'll always be welcome
          here if you're polite, respectful to others, and love animals,
          especially those in the rescue shelter. Our goal is to provide stray
          pets with a home and a loving family, and in order to do so, we must
          assist the NGO in finding a suitable adopter for the pets they have.{' '}
        </h2>
        <h2 className="bold">Reskyut is not for:</h2>

        <h2 className="bold">Buying/selling Pet </h2>

        <h2>
          We do not permit you to use Reskyut to buy or sell pets. However,
          please keep in mind that some NGO rescue shelters charge an adoption
          fee to help with the care of the shelter as well as to support the
          costs of the rescues' rehabilitation.
        </h2>
        <h2 className="bold">Hate Speech</h2>
        <h2>
          Any statement that encourages, advocates for, or condones hatred or
          violence against NGO rescue shelters, including rescue pets, is
          prohibited.
        </h2>
        <h2 className="bold">Impersonation</h2>
        <h2>
          Be true to yourself! Don't act like someone else. For the NGO to
          identify a suitable adopter.
        </h2>
        <h2 className="bold">Minors</h2>
        <h2>
          Adopting a pet requires you to be at least 18 years old. Minors can
          use Reskyut. However, when adopting a rescue pet, the parent must
          attend the interview that the adopter and the NGO set up.
        </h2>
        <h2 className="bold">Illegal Usage</h2>
        <h2>
          Adopting a pet requires you to be at least 18 years old. Minors can
          use Reskyut. However, when adopting a rescue pet, the parent must
          attend the interview that the adopter and the NGO set up.
        </h2>

        <h2>
          Reskyut has the right to investigate and/or terminate your account if
          you have misused the Service or acted in a manner that Reskyut
          considers inappropriate, illegal, or in violation of the Terms of Use.
        </h2>
      </div>
    </div>
  );
}
