import React from "react";
const SignIn = () => {
  const generateSignInUrl = () => {
    const params = new URLSearchParams({
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      response_type: "code",
      scope: "openid profile email",
      acr_values:
        "mosip:idp:acr:generated-code mosip:idp:acr:linked-wallet mosip:idp:acr:biometrics",
      claims:
        '{"userinfo":{"name":{"essential":true},"phone":{"essential":true},"email":{"essential":true},"picture":{"essential":true},"gender":{"essential":true},"birthdate":{"essential":true},"address":{"essential":true}},"id_token":{}}',
      code_challenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
      code_challenge_method: "S256",
      display: "page",
      nonce: "g4DEuje5Fx57Vb64dO4oqLHXGT8L8G7g",
      state: "ptOO76SD",
      ui_locales: "en",
    });

    return `${
      process.env.REACT_APP_AUTHORIZATION_ENDPOINT
    }?${params.toString()}`;
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>
          Welcome to Fayda Mock Relying Party Portal
        </h1>
        <form action="/login" method="POST">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            style={styles.input}
            onFocus={(e) =>
              (e.target.style = { ...styles.input, ...styles.inputFocus })
            }
            onBlur={(e) => (e.target.style = styles.input)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={styles.input}
            onFocus={(e) =>
              (e.target.style = { ...styles.input, ...styles.inputFocus })
            }
            onBlur={(e) => (e.target.style = styles.input)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            style={styles.input}
            onFocus={(e) =>
              (e.target.style = { ...styles.input, ...styles.inputFocus })
            }
            onBlur={(e) => (e.target.style = styles.input)}
          />
          <button
            type="submit"
            style={styles.btn}
            onMouseEnter={(e) =>
              (e.target.style = { ...styles.btn, ...styles.btnHover })
            }
            onMouseLeave={(e) => (e.target.style = styles.btn)}
          >
            Sign In
          </button>
        </form>
        <div style={styles.separator}>
          <span
            style={styles.separatorLine}
            className="separator-line-left"
          ></span>
          <span>or</span>
          <span
            style={styles.separatorLine}
            className="separator-line-right"
          ></span>
        </div>
        <a
          href={generateSignInUrl()}
          style={styles.link}
          onMouseEnter={(e) =>
            (e.target.style = { ...styles.link, ...styles.linkHover })
          }
          onMouseLeave={(e) => (e.target.style = styles.link)}
        >
          Sign in with Fayda E-Signet
        </a>
      </div>
      <footer style={styles.footer}>
        &copy; 2025 National ID. All Rights Reserved.
      </footer>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    backgroundColor: "#f5f7fa",
    color: "#2d3748",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
  },
  container: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    textAlign: "center",
    maxWidth: "450px",
    width: "90%",
    margin: "20px 0",
  },
  heading: {
    marginBottom: "24px",
    color: "#3a86ff",
    fontSize: "24px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    margin: "12px 0",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    backgroundColor: "#f8fafc",
    color: "#2d3748",
    fontSize: "16px",
    transition: "border-color 0.2s, box-shadow 0.2s",
    outline: "none",
    boxSizing: "border-box",
  },
  inputFocus: {
    borderColor: "#3a86ff",
    boxShadow: "0 0 0 3px rgba(58, 134, 255, 0.2)",
  },
  btn: {
    backgroundColor: "#3a86ff",
    color: "white",
    padding: "14px",
    width: "100%",
    border: "none",
    borderRadius: "8px",
    marginTop: "24px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.2s, transform 0.1s",
    boxShadow: "0 2px 5px rgba(58, 134, 255, 0.3)",
  },
  btnHover: {
    backgroundColor: "#2667cc",
    transform: "translateY(-1px)",
  },
  separator: {
    margin: "20px 0",
    color: "#a0aec0",
    fontSize: "14px",
    position: "relative",
  },
  separatorLine: {
    position: "absolute",
    top: "50%",
    width: "40%",
    height: "1px",
    backgroundColor: "#e2e8f0",
  },
  separatorLineLeft: {
    left: 0,
  },
  separatorLineRight: {
    right: 0,
  },
  link: {
    color: "#3a86ff",
    textDecoration: "none",
    fontSize: "15px",
    marginTop: "16px",
    display: "inline-block",
    fontWeight: "500",
    transition: "color 0.2s",
    padding: "8px 12px",
    borderRadius: "6px",
  },
  linkHover: {
    color: "#2667cc",
    backgroundColor: "rgba(58, 134, 255, 0.1)",
  },
  footer: {
    marginTop: "40px",
    color: "#718096",
    fontSize: "14px",
    textAlign: "center",
    padding: "20px",
  },
};

export default SignIn;
