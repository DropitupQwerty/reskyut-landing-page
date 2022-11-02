import React from 'react';
import RulesNavbar from './../../components/rules-navbar';

export default function TermsOfUse() {
  return (
    <div>
      <RulesNavbar page={'Terms of Use'} />
      <div className="rules-container">
        <h1 className="bold">TERMS OF USE</h1>

        <h2>Last revised on October 28, 2022</h2>

        <h2>
          Welcome to Reskyut: Adoption for stray animals made fun and easy This
          capstone project is being worked on by Tabao, Jeffrey, and his team at
          the Bulacan State University Bustos Campus.
        </h2>

        <h2 className="bold">1. Acceptance of Terms of Use Agreement.</h2>
        <h2>
          By creating a Reskyut account using a Google or Facebook account
          through a mobile device, you agree to be bound by these
          <a href="/terms-of-use">Terms of Use</a>, our
          <a href="/privacy-policy">Privacy Policy</a> , and{' '}
          <a href="/community-guidelines"> Community Guidelines</a>, each of
          these is incorporated by reference into this Agreement,
        </h2>

        <h2 className="bold">2. Your Account.</h2>
        <h2>
          In order to use Reskyut, you may sign in to Reskyut using one of two
          methods: Google Login or Facebook Login. You permit us to access and
          use certain Facebook account information, including but not limited to
          your public Facebook profile, if you choose to use Facebook Login, as
          you do when you use Google Login. Please see our
          <a href="/privacy-policy">Privacy Policy</a>Privacy Policy for
          additional information on the information we gather from you and how
          we use it.
        </h2>

        <h2>
          You are entirely responsible for any activities that occur under your
          login credentials used to login for Reskyut, and you are solely
          responsible for preserving the confidentiality of those credentials.
        </h2>
        <h2 className="bold">3. Modifying the Service and Termination.</h2>
        <h2>
          Reskyut is always working to enhance the service and provide you new
          features that you will find interesting and useful. This means that we
          may add new product features or upgrades, as well as eliminate some
          features, from time to time, and if these actions do not have a
          significant impact on your rights or responsibilities, we may not
          provide you with prior notice. We may even suspend the service
          completely, in which case we will notify you in advance.
        </h2>
        <h2 className="bold"> 4. Rights you Grant Reskyut.</h2>
        <h2>
          By creating an account, you allow Reskyut permission to make public
          the information you authorize us to obtain from third parties such as
          Facebook or Google, and you accept that any material you submit or
          permit us to place on the Service may be accessed by NGO rescue
          shelters.
        </h2>
        <h2>
          You agree that all of the information you provide when creating your
          account, including information from your Facebook or Google accounts,
          as well as any extra information you submit to the NGO rescue shelter,
          is accurate and true.
        </h2>
        <h2>
          You acknowledge and agree that we may monitor or review any content
          you publish as part of the service for the NGO rescue shelter account.
        </h2>
        <h2>
          We reserve the right to delete any Content, in whole or in part, that
          we believe violates this Agreement or may harm the Service's
          reputation.
        </h2>
        <h2 className="bold">5. Community Rules.</h2>

        <ul>
          <h2>By using the Reskyut Service, you agree not to:</h2>
          <li>
            <h2>
              Use the Service for any unlawful or prohibited activity as
              described in this Agreement.
            </h2>
          </li>
          <li>
            <h2> Use the service for any criminal or harmful purpose.</h2>
          </li>
          <li>
            <h2> Make use of the service to harm Reskyut.</h2>
          </li>
          <li>
            <h2>
              {' '}
              Violate our Community Guidelines, which are continuously updated
            </h2>
          </li>
          <li>
            <h2> Impersonate someone else without permission. </h2>
          </li>
          <li>
            <h2>
              {' '}
              Misrepresenting your identity, age, current or qualifications, or
              affiliations with a person or entity.
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
