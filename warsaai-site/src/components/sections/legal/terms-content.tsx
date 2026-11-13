import { appConfig } from "@/utils/app-config";
import { Link } from "react-router-dom";

/** Body of the Terms & Conditions page. Rendered inside a `prose` article. */
const TermsContent = () => {
    const email = appConfig.contact.email;

    return (
        <>
            <p><strong>Last updated:</strong> 13 November 2026</p>

            <h3>1. About us</h3>
            <p>
                This website, www.warsaai.com, is operated by Ahmed Warsame, trading as WarsaAi (“WarsaAi”, “we”,
                “us”), based in London, United Kingdom. You can contact us at{" "}
                <a href={`mailto:${email}`}>{email}</a>.
            </p>

            <h3>2. These terms</h3>
            <p>
                By using this website you agree to these terms. If you do not agree, please do not use it. We may
                change these terms from time to time. The date at the top shows when they were last updated, and the
                version in force is the one on this page when you visit.
            </p>

            <h3>3. Using the website</h3>
            <p>You may use the website for lawful purposes only. You must not:</p>
            <ul>
                <li>try to gain unauthorised access to the website, its servers or any account;</li>
                <li>introduce malicious code or interfere with how the website works;</li>
                <li>
                    copy or collect content from the website by automated means without our written permission;
                </li>
                <li>use the website to send unsolicited marketing.</li>
            </ul>
            <p>
                We do not promise that the website will always be available or free from errors. We may suspend or
                change any part of it without notice.
            </p>

            <h3>4. Accounts</h3>
            <p>
                If you create an account, you must give accurate information, keep your password confidential and tell
                us promptly if you think someone else has used your account. You are responsible for activity under
                your account. We may suspend or close an account that breaches these terms. You may close your account
                at any time by contacting us.
            </p>

            <h3>5. Academy, prompt library and other learning content</h3>
            <p>
                We make guides, prompts, workflows and session materials available on the website. You may use them
                for your own learning and within your own business. You must not sell them, republish them or present
                them as your own without our written permission.
            </p>
            <p>
                This content is general information. It is not legal, financial, tax or other professional advice, and
                you should not rely on it as such. Some of it describes third-party products, including Claude AI.
                Those products change, and we do not promise that the content is current or complete. To follow some
                exercises you will need your own subscription to the relevant product, on that provider’s terms.
            </p>

            <h3>6. Intellectual property</h3>
            <p>
                We own, or have the right to use, the content and design of this website, including text, graphics,
                the WarsaAi name and logo. All rights are reserved except as set out in section 5.
            </p>
            <p>
                Other companies’ names and logos shown on the website belong to their owners. They are shown to
                describe the products our work can connect with. Their appearance does not mean that those companies
                endorse or are affiliated with WarsaAi.
            </p>

            <h3>7. Figures and examples on the website</h3>
            <p>
                Time, cost, efficiency and risk-reduction figures on the website are illustrative examples. They are
                not results achieved for a particular client and are not a promise of what you will achieve. See the
                Automation Savings Disclaimer in our{" "}
                <Link to="/security">Security &amp; Confidentiality statement</Link> for details. Any estimate specific
                to your business will be given in writing as part of a scoping exercise.
            </p>

            <h3>8. Our services</h3>
            <p>
                The website describes services such as AI strategy and audits, custom implementation and training.
                Nothing on the website is an offer capable of acceptance. Any paid work is carried out under a
                separate written agreement or statement of work, which will set out the scope, fees, timings,
                confidentiality and data protection terms. If that agreement conflicts with these terms, the agreement
                takes priority.
            </p>
            <p>
                When you book an audit, discovery call or session through the website, we will confirm the
                arrangements by email. Either of us may cancel or rearrange with reasonable notice.
            </p>

            <h3>9. AI-generated output</h3>
            <p>
                Some of our work and content is produced with the help of AI tools. AI output can contain errors. You
                are responsible for checking any output before you rely on it or use it in your business.
            </p>

            <h3>10. Our liability</h3>
            <p>
                Nothing in these terms excludes or limits our liability for death or personal injury caused by our
                negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be excluded or
                limited under the law of England and Wales.
            </p>
            <p><strong>If you are a business user:</strong></p>
            <ul>
                <li>
                    we exclude all implied conditions, warranties and representations that may apply to the website or
                    its content;
                </li>
                <li>
                    we are not liable for loss of profit, sales, business, revenue, data, goodwill or business
                    opportunity, or for any indirect or consequential loss;
                </li>
                <li>our total liability to you arising from your use of the website is limited to £100.</li>
            </ul>
            <p><strong>If you are a consumer:</strong></p>
            <ul>
                <li>
                    the website is provided for domestic and private use, and we are not liable for business losses;
                </li>
                <li>
                    if we fail to comply with these terms, we are responsible for loss or damage that is a foreseeable
                    result of our breach or our failure to use reasonable care and skill;
                </li>
                <li>nothing in these terms affects your legal rights as a consumer.</li>
            </ul>
            <p>Liability for paid services is governed by the separate agreement described in section 8.</p>

            <h3>11. Links to other websites</h3>
            <p>
                The website contains links to other sites and resources. We provide them for information only. We have
                no control over their content and are not responsible for it.
            </p>

            <h3>12. Privacy</h3>
            <p>
                Our <Link to="/privacy-policy">Privacy Policy</Link> explains how we use personal data.
            </p>

            <h3>13. General</h3>
            <p>
                If a court finds part of these terms unenforceable, the rest continue to apply. If we do not enforce a
                right straight away, we can still enforce it later. These terms are between you and us; no one else
                has rights under them.
            </p>

            <h3>14. Governing law</h3>
            <p>
                These terms are governed by the law of England and Wales. If you are a business, the courts of England
                and Wales have exclusive jurisdiction. If you are a consumer living in Scotland or Northern Ireland,
                you may also bring proceedings in your home courts.
            </p>

            <h3>15. Contact</h3>
            <p>
                Questions about these terms: <a href={`mailto:${email}`}>{email}</a>.
            </p>
        </>
    );
};

export default TermsContent;
