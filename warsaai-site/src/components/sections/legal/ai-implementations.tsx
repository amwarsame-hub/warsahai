type AiImplementationsProps = {
    sectionNumber: number;
};

const AiImplementations = ({ sectionNumber }: AiImplementationsProps) => (
    <>
        <h3>{sectionNumber}. AI Implementations &amp; Operational Integrity</h3>

        <h4>AI Services and Technology Providers</h4>
        <p>
            WarsaAi does not develop, own, license or operate proprietary foundational artificial intelligence
            models. WarsaAi's services consist of the design, configuration, integration and implementation of
            business process automations, workflows and technology solutions which may utilise third-party
            artificial intelligence services, platforms and models.
        </p>

        <h4>Selection of AI Technologies</h4>
        <p>
            Where artificial intelligence functionality forms part of a solution, WarsaAi shall, where reasonably
            practicable, recommend established, reputable and commercially supported AI technologies provided by
            recognised third-party vendors. Where a client has already approved, licensed, deployed or otherwise
            adopted specific AI tools, platforms or models within its organisation, WarsaAi may, subject to
            technical feasibility and mutual agreement, integrate such technologies into the proposed solution.
        </p>

        <h4>Third-Party AI Providers</h4>
        <p>
            All third-party AI services remain the property and responsibility of their respective providers and are
            governed by the applicable terms of service, privacy policies, security controls, service-level
            commitments and licensing arrangements of those providers. WarsaAi makes no representation of ownership,
            operational control or independent authority over third-party AI models and services.
        </p>

        <h4>Client Data and AI Processing</h4>
        <p>
            WarsaAi shall take reasonable steps to ensure that client data is processed only to the extent necessary
            for the provision of agreed services. Where data is processed through third-party AI services, such
            processing shall be subject to the technical, contractual and regulatory controls applicable to the
            relevant provider and any agreed contractual arrangements between WarsaAi and the client.
        </p>

        <h4>No Training of Proprietary Models</h4>
        <p>
            WarsaAi shall not use client confidential information, proprietary datasets, business records, operational
            data or other non-public information for the purpose of training proprietary foundational AI models. Any
            processing performed by third-party AI providers shall be subject to the configuration, contractual
            safeguards and data-handling practices offered by the relevant provider.
        </p>

        <h4>Human Oversight and Client Responsibility</h4>
        <p>
            Artificial intelligence outputs may contain inaccuracies, omissions, biases or other unintended results.
            Clients acknowledge that AI-generated outputs should not be relied upon as the sole basis for operational,
            legal, financial, regulatory or business-critical decisions without appropriate human review and
            validation. The client remains responsible for reviewing and approving outputs generated through any
            AI-enabled solution prior to implementation or reliance.
        </p>

        <h4>No Warranty of AI Outputs</h4>
        <p>
            WarsaAi does not warrant that any AI-generated output will be accurate, complete, error-free, uninterrupted
            or fit for any particular purpose. AI functionality is provided on a reasonable endeavours basis and is
            subject to the limitations, availability and performance of the underlying third-party technology
            providers.
        </p>
    </>
);

export default AiImplementations;
