import { appConfig } from "@/utils/app-config";
import { Link } from "react-router-dom";

/** Body of the Privacy Policy page. Rendered inside a `prose` article. */
const PrivacyContent = () => {
    const email = appConfig.contact.email;

    return (
        <>
            <p><strong>Last updated:</strong> 13 November 2026</p>

            <h3>1. Who we are</h3>
            <p>
                WarsaAi (“we”, “us”) is operated by Ahmed Warsame and is based in London, United Kingdom.
            </p>
            <p>We are the data controller for the personal data described in this policy.</p>
            <p>
                Contact us about privacy at <a href={`mailto:${email}`}>{email}</a>.
            </p>

            <h3>2. The personal data we collect</h3>
            <p><strong>When you create an account</strong></p>
            <ul>
                <li>Your name and email address.</li>
                <li>Your password, which is stored in encrypted (hashed) form. We cannot read it.</li>
                <li>Optional profile details you add: phone number and profile photo.</li>
                <li>
                    If you sign in with Google: your name, email address and profile picture, as supplied by Google.
                </li>
            </ul>
            <p><strong>When you contact us or book a session</strong></p>
            <ul>
                <li>
                    Your name, email address, phone number if you give it, and the content of your message, including
                    anything you tell us about your business and its workflows.
                </li>
            </ul>
            <p><strong>When you subscribe to our newsletter</strong></p>
            <ul>
                <li>Your email address.</li>
            </ul>
            <p><strong>When you visit the website</strong></p>
            <ul>
                <li>
                    Technical data that our hosting providers record automatically, such as your IP address, browser
                    type and the time of your visit.
                </li>
            </ul>
            <p>
                We do not ask for special category data (for example health information) and ask that you do not send
                it to us.
            </p>

            <h3>3. How we use your data and our lawful basis</h3>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Purpose</th>
                            <th>Data used</th>
                            <th>Lawful basis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Create and run your account</td>
                            <td>Account data</td>
                            <td>Performance of a contract</td>
                        </tr>
                        <tr>
                            <td>Reply to enquiries and arrange audits, sessions and training</td>
                            <td>Enquiry data</td>
                            <td>
                                Legitimate interests (responding to people who contact us), or steps taken at your
                                request before a contract
                            </td>
                        </tr>
                        <tr>
                            <td>Send our newsletter</td>
                            <td>Email address</td>
                            <td>Consent. You can unsubscribe at any time</td>
                        </tr>
                        <tr>
                            <td>Keep the website secure and working</td>
                            <td>Technical data</td>
                            <td>Legitimate interests (security and reliability)</td>
                        </tr>
                        <tr>
                            <td>Meet legal, tax and accounting duties</td>
                            <td>Relevant records</td>
                            <td>Legal obligation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                We do not sell your personal data. We do not make decisions about you by automated means that have
                legal or similarly significant effects.
            </p>

            <h3>4. Cookies and similar technologies</h3>
            <ul>
                <li>We do not use analytics or advertising cookies.</li>
                <li>
                    If you sign in, we store a session token in your browser’s local storage so that you stay signed
                    in. It is removed when you sign out.
                </li>
                <li>
                    Our pages load fonts from Google Fonts. Your browser sends Google your IP address to fetch them.
                </li>
                <li>
                    If a page includes an embedded video, the video provider (for example YouTube) may set its own
                    cookies when you play it.
                </li>
            </ul>
            <p>
                See our <Link to="/cookie-policy">Cookie Policy</Link> for more detail.
            </p>

            <h3>5. Who we share your data with</h3>
            <p>We use these service providers, who process data on our instructions:</p>
            <ul>
                <li><strong>Lovable (Lovable Cloud, built on Supabase):</strong> account database and sign-in.</li>
                <li><strong>GitHub (GitHub Pages):</strong> website hosting.</li>
                <li><strong>Google:</strong> Google sign-in and web fonts.</li>
                <li>
                    <strong>Our email service provider:</strong> email, including replies to enquiries and the
                    newsletter.
                </li>
                <li>
                    <strong>AI model providers:</strong> we may use an AI assistant to help categorise an enquiry and
                    draft a reply. The text of your message is sent to the model for that purpose. A person reviews
                    every reply before it is sent.
                </li>
            </ul>
            <p>We may also share data with professional advisers, or where the law requires it.</p>
            <p>
                <strong>Transfers outside the UK.</strong> Some of these providers are based outside the UK. Where
                data is transferred, we rely on UK adequacy regulations or on the International Data Transfer
                Agreement or UK Addendum to the EU Standard Contractual Clauses.
            </p>

            <h3>6. How long we keep your data</h3>
            <ul>
                <li>
                    <strong>Account data:</strong> for as long as your account is open, then deleted within 30 days of
                    closure.
                </li>
                <li>
                    <strong>Enquiries:</strong> 24 months after our last contact, unless you become a client.
                </li>
                <li><strong>Newsletter:</strong> until you unsubscribe.</li>
                <li>
                    <strong>Client and financial records:</strong> 6 years after the end of the engagement, as
                    required for tax and accounting.
                </li>
                <li>
                    <strong>Technical logs:</strong> according to our hosting providers’ retention periods.
                </li>
            </ul>

            <h3>7. How we protect your data</h3>
            <p>
                We use encrypted connections (HTTPS) across the website, restrict access to personal data to those who
                need it, and use reputable providers for hosting and storage. No system is completely secure. If a
                breach is likely to put your rights at risk, we will tell you and the ICO as the law requires.
            </p>

            <h3>8. Your rights</h3>
            <p>Under UK data protection law you can ask us to:</p>
            <ul>
                <li>give you a copy of your data;</li>
                <li>correct data that is wrong;</li>
                <li>delete your data;</li>
                <li>restrict or object to how we use it;</li>
                <li>move your data to another provider;</li>
                <li>stop using it where we rely on consent.</li>
            </ul>
            <p>
                Email <a href={`mailto:${email}`}>{email}</a>. We will reply within one month. There is normally no
                charge.
            </p>
            <p>
                You can also complain to the Information Commissioner’s Office at{" "}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or on 0303 123
                1113. We would appreciate the chance to put things right first.
            </p>

            <h3>9. Client data</h3>
            <p>
                When we build or run AI systems for a client, we may handle personal data that belongs to that
                client’s customers or staff. In that case the client is the controller and we act as their processor,
                under a written agreement with them. This policy does not cover that data. Please contact the client
                concerned.
            </p>

            <h3>10. Children</h3>
            <p>
                Our website and services are for businesses and adults. We do not knowingly collect data from anyone
                under 18.
            </p>

            <h3>11. Changes to this policy</h3>
            <p>
                We will post any changes on this page and update the date at the top. If a change is significant, we
                will tell account holders by email.
            </p>
        </>
    );
};

export default PrivacyContent;
