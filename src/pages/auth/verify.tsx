import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function VerifyEmail() {

    const VerificationState = {
        pending: "pending",
        invalid: "invalid",
        already_verified: "already_verified",
        success: "success"
    }

    const [searchParams] = useSearchParams();
    const [verificationState, setVerificationState] = useState(VerificationState.pending);

    useEffect(() => {
        const attemptToVerify = async () => {
            const code = searchParams.get("code");
            const email = searchParams.get("email");

            if (!code || !email) {
                return setVerificationState(VerificationState.invalid)
            }
            const response = await fetch('http://localhost:4000/api/verify/verify-email', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code,
                    email
                })
            })
            const result = await response.json();
            if (result.data === "already verified") {
                return setVerificationState(VerificationState.already_verified)
            }
            setVerificationState(VerificationState.success);
        }
        attemptToVerify()
    }, [VerificationState.already_verified, VerificationState.invalid, VerificationState.success, searchParams]);

    switch (verificationState) {
        case VerificationState.success: {
            return (
                <div>
                    Email verified. Please <Link to="/auth/register">Register</Link>.
                </div>
            )
        }
        case VerificationState.already_verified: {
            return (
                <div>
                    This link is expired. Please <Link to="/auth/verify-email">log in</Link>.
                </div>
            )
        }
        case VerificationState.invalid: {
            return (
                <div>
                    This link is invalid link.
                </div>
            )
        }
        default: {
            return (
                <div>
                    Verifying...
                </div>
            );
        }
    }
}
export default VerifyEmail;