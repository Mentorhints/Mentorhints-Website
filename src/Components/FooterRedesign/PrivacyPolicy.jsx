import React from "react";
import "../../StylesOfComponents/FooterRedesign/PrivacyPolicy.css";
import { useContext } from "react";
import { ScreenSizeContext } from "../../ScreenSizeContext";
const PrivacyPolicy = () => {
  const { isDesktop } = useContext(ScreenSizeContext);
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "   We collect the following types of data to provide a seamless learning experience:",
      list: [
        {
          subTitle: "a. Personal Information",
          points: [
            "Your name, email address, phone number, and any additional details provided during account registration or communication with us.",
            "Educational background and learning preferences for tailoring your experience.",
          ],
        },
        {
          subTitle: "b. Usage Data",
          points: [
            "Interaction data such as device details, browser type, IP address, and pages accessed on our platform.",
            "Data collected through cookies to enhance website functionality and personalize user experiences.",
          ],
        },
        {
          subTitle: "c. Transactional Data",
          points: [
            "Payment details, securely processed through trusted third-party payment gateways.",
          ],
        },
      ],
    },
    {
      title: "2. How We Use Your Data",
      content: "The information collected is utilized to:",
      list: [
        "Deliver personalized educational content and services.",
        "Improve platform usability through analytics and user feedback.",
        "Facilitate payment processing and provide transaction records.",
        "Send updates, promotional materials, and support messages.",
      ],
    },
    {
      title: "3. Data Sharing and Disclosure",
      content:
        "At MentorHints, we handle your data responsibly. We do not sell your personal information. Your data may be shared with:",
      inlineList: [
        {
          subTitle: "Service Providers",
          points:
            "Third-party partners for hosting, analytics, and payment processing.",
        },
        {
          subTitle: "Legal Authorities",
          points:
            "If required by law or to protect our rights and ensure compliance.",
        },
      ],
    },
    {
      title: "4. Cookies and Tracking Technologies",
      content:
        "   We use cookies to analyze website traffic, enhance functionality, and improve user experience. Users can manage their cookie preferences via browser settings.",
    },
    {
      title: "5. Security Measures",
      content:
        "MentorHints implements industry-standard security practices to protect your data. These include encrypted transmissions and secure storage mechanisms. However, no digital platform is entirely secure, and we encourage users to safeguard their login credentials.",
    },
    {
      title: "6. Your Rights and Choices",
      content: "You have the following rights regarding your data:",
      list: [
        "Access and update your information via your account settings. ",
        "Request the deletion of your personal data, subject to legal obligations. ",
        "Opt out of receiving promotional communications. ",
      ],
    },
    {
      title: "7. Children's Privacy",
      content:
        "Our services are designed for individuals above 13. We do not knowingly collect personal data from children without parental consent.",
    },
    {
      title: "8. Updates to This Policy",
      content:
        " This Privacy Policy may be revised periodically. Significant changes will be communicated via email or prominent notices on our website. We encourage users to review this policy regularly.",
    },
  ];

  return (
    <main className="contentofpp">
      <h4 className="contentheading">Privacy Policy</h4>
      <h5 className="subhead">Introduction</h5>
      <p>
        At MentorHints, we prioritize the privacy and security of our users.
        This Privacy Policy explains how we collect, use, and safeguard your
        information when you engage with our services, including our website and
        also the educational programs. By accessing our services, you consent to
        the practices described in this policy.
      </p>

      {sections.map((section, index) => (
        <div key={index}>
          <h5 className="titleofprivacypolicy">{section.title}</h5>
          {section.content && <p className="contentp">{section.content}</p>}

          {section.list && Array.isArray(section.list) && (
            <ul>
              {section.list.map((item, idx) =>
                typeof item === "string" ? (
                  <li className="listof2pp" key={idx}>
                    {item}
                  </li>
                ) : (
                  <div key={idx}>
                    <h6 className="subtitleofpp">{item.subTitle}</h6>
                    <ul className="listofpolicy">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          style={{ listStyleType: "disc" }}
                          className="pointsinpp"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </ul>
          )}

          {section.inlineList && Array.isArray(section.inlineList) && (
            <ul>
              {section.inlineList.map((item, idx) => (
                <li key={idx} className="listof3pp">
                  <span style={{ color: "#000001", fontWeight: "500" }}>
                    {item.subTitle}:
                  </span>
                  <span
                    style={{
                      color: "#616161",
                      marginLeft: "4px",
                    }}
                  >
                    {item.points}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className="contactInfo">
        <h5 className="titleofprivacypolicy">Contact Us </h5>
        <p>
          For questions or concerns about this Privacy Policy, please reach out
          to us:
        </p>
        <ul className="listof2pp">
          <li>
            <span style={{ color: "black", fontWeight: "500" }}>Email:</span>{" "}
            info@mentorhints.com
          </li>
          <li>
            <span style={{ color: "black", fontWeight: "500" }}>Phone:</span>{" "}
            7418016096 
          </li>
          <li style={{ width: isDesktop ? "800px" : "280px" }}>
            <span style={{ color: "black", fontWeight: "500" }}>Address:</span>{" "}
            INNOV8 MILLENIA, 2ND FLOOR, EAST WING, RMZ, MILLENIA BUSINESS PARK,
            CAMPUS 1A, NO.143, DR.M.G.R. ROAD, (NORTH VEERANAM SALAI),
            PERUNGUDI,SHOLINGANALLUR, CHENNAI-600096
          </li>
        </ul>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
