import { appConfig } from "@/utils/app-config";
import { Link } from "react-router-dom";

/** Body of the Cookie Policy page. Rendered inside a `prose` article. */
const CookieContent = () => {
    const email = appConfig.contact.email;

    return (
        <>
            <p><strong>Last updated:</strong> 13 November 2026</p>

            <h3>1. What this page covers</h3>
            <p>
                This page explains what our website stores on your device and which other services your browser
                contacts when you visit www.warsaai.com.
            </p>

            <h3>2. What we use</h3>
            <ul>
                <li>
                    <strong>No analytics or advertising cookies.</strong> We do not track you across websites or build
                    advertising profiles.
                </li>
                <li>
                    <strong>Sign-in session.</strong> If you sign in, we store a session token in your browser’s local
                    storage so that you stay signed in. It is strictly necessary for accounts to work and is removed
                    when you sign out.
                </li>
                <li>
                    <strong>Google Fonts.</strong> Our pages load fonts from Google. Your browser sends Google your IP
                    address to fetch them.
                </li>
                <li>
                    <strong>Google sign-in.</strong> If you choose to sign in with Google, Google may set its own
                    cookies as part of that process.
                </li>
                <li>
                    <strong>Embedded video.</strong> If a page includes an embedded video, the video provider (for
                    example YouTube) may set its own cookies when you play it.
                </li>
            </ul>

            <h3>3. Your choices</h3>
            <p>
                You can clear or block cookies and local storage in your browser settings. If you block local storage,
                you will not be able to stay signed in.
            </p>

            <h3>4. More information</h3>
            <p>
                Our <Link to="/privacy-policy">Privacy Policy</Link> explains how we use personal data. Questions:{" "}
                <a href={`mailto:${email}`}>{email}</a>.
            </p>
        </>
    );
};

export default CookieContent;
