/** Automation savings disclaimer shown at the top of the legal pages. */
const AutomationDisclaimer = () => (
    <section
        id="automation-savings-disclaimer"
        aria-labelledby="automation-savings-disclaimer-title"
        className="not-prose mb-10 rounded-lg border border-border bg-card p-6 md:p-8 scroll-mt-28"
    >
        <h2 id="automation-savings-disclaimer-title" className="h5 mb-4">
            Automation savings disclaimer
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-foreground">
            <p>
                All time, cost, efficiency and risk-reduction figures on this website are illustrative estimates for
                demonstration purposes only. They do not represent actual results achieved for any specific client and
                are not a guarantee of future performance.
            </p>
            <p>
                The benefits of automation vary significantly between organisations and depend on factors including
                process complexity, transaction volumes, data quality, existing systems (e.g. ServiceNow, Jira,
                Salesforce), staff adoption and ongoing maintenance. Time and cost savings are hard to measure
                precisely and may be partly or wholly offset by implementation, licensing and support costs.
            </p>
            <p>
                Automation reduces some operational risks but may introduce others, such as system errors, integration
                failures or reduced human oversight. WarsaAi makes no representation that any client will achieve a
                particular level of savings or risk reduction. Where we provide a client-specific estimate, it is based
                on information supplied by the client and our assumptions at the time. It should be validated before
                you rely on it.
            </p>
            <p>Any savings estimate we give you is agreed in writing as part of a scoping exercise.</p>
        </div>
    </section>
);

export default AutomationDisclaimer;
