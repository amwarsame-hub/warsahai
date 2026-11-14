import AiImplementations from "@/components/sections/legal/ai-implementations";

/**
 * Body of the Security & Confidentiality page.
 * Rendered inside a `prose` article.
 */
const LegalContent = () => (
    <>
        <h3>1. Introduction &amp; Scope</h3>
        <p>
            At WarsaAi, we deliver cutting-edge technology solutions, automated workflows, and advanced AI
            implementations designed to accelerate your business operations. In an era where data drives innovation,
            we recognize that security, privacy, and confidentiality are paramount. This framework governs our
            operational standards, data handling practices, and commitment to safeguarding your proprietary
            information.
        </p>

        <AiImplementations sectionNumber={2} />

        <h3>3. Data Protection, GDPR &amp; Regulatory Compliance</h3>
        <p>
            WarsaAi is fully committed to upholding the highest standards of data protection and privacy regulation,
            including the General Data Protection Regulation (GDPR) and applicable regional data laws.
        </p>
        <ul>
            <li>
                <strong>Lawful Processing:</strong> All personal and corporate data is processed lawfully, fairly,
                and transparently, strictly for the purposes outlined in our service agreements.
            </li>
            <li>
                <strong>Data Minimization &amp; Security by Design:</strong> We collect and process only the data
                strictly necessary to deliver our services, applying robust encryption protocols both in transit
                (TLS 1.3+) and at rest (AES-256).
            </li>
            <li>
                <strong>Data Subject Rights:</strong> We assist our clients in fulfilling their obligations regarding
                data subject access requests (DSARs), data rectification, and the right to be forgotten.
            </li>
        </ul>

        <h3>4. Absolute Commitment to Confidentiality &amp; NDAs</h3>
        <p>
            Confidentiality is the cornerstone of WarsaAi’s philosophy. We treat all client infrastructure details,
            business logic, source code, and strategic data as strictly confidential.
        </p>
        <ul>
            <li>
                <strong>Uncompromising Security Standards:</strong> Access to client environments is restricted on a
                strict need-to-know basis, protected by multi-factor authentication (MFA), role-based access controls
                (RBAC), and comprehensive audit logging.
            </li>
            <li>
                <strong>Encouragement of Mutual NDAs:</strong> To foster complete trust and transparent
                collaboration, WarsaAi actively encourages all clients to execute a mutual Non-Disclosure Agreement
                (NDA) prior to the commencement of any technical integration, data exchange, or project
                implementation.
            </li>
        </ul>

        <h3 id="automation-savings-disclaimer" className="scroll-mt-28">5. Automation Savings Disclaimer</h3>
        <p>
            All time, cost, efficiency and risk-reduction figures on this website are illustrative estimates for
            demonstration purposes only. They do not represent actual results achieved for any specific client and
            are not a guarantee of future performance.
        </p>
        <p>
            The benefits of automation vary significantly between organisations and depend on factors including
            process complexity, transaction volumes, data quality, existing systems (e.g. ServiceNow, Jira,
            Salesforce), staff adoption and ongoing maintenance. Time and cost savings are hard to measure precisely
            and may be partly or wholly offset by implementation, licensing and support costs.
        </p>
        <p>
            Automation reduces some operational risks but may introduce others, such as system errors, integration
            failures or reduced human oversight. WarsaAi makes no representation that any client will achieve a
            particular level of savings or risk reduction. Where we provide a client-specific estimate, it is based
            on information supplied by the client and our assumptions at the time. It should be validated before you
            rely on it.
        </p>
        <p>Any savings estimate we give you is agreed in writing as part of a scoping exercise.</p>

        <h3>6. Conclusion: A Partnership Built on Trust</h3>
        <p>
            As digital ecosystems and AI capabilities continue to evolve, WarsaAi remains dedicated to pioneering
            innovation without ever compromising security. By combining advanced technical architecture with
            uncompromising data governance and a commitment to formal NDAs, we ensure your enterprise scales safely,
            securely, and confidentially.
        </p>
    </>
);

export default LegalContent;
