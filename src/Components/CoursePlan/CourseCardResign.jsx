import React from "react";
import styles from "../../StylesOfComponents/CoursePlan/Container.module.css";
import certificate from "../../assets/PlanCertificate.svg";
import greentick from "../../assets/SlimTick.svg";

export default function Container() {
  return (
    <div className="con-con">
      <div className={styles.container}>
        <span className={styles.coursePlan}>Course Plan</span>
        <div className={styles.placeholder}>
          <div className={styles.pricingPlan}>
            <div className={styles.innerContainer}>
              <div className={styles.package}>
                <div className={styles.certificate}>
                  <img
                    src={certificate}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  />
                </div>
                <span className={styles.studentPack}>Student Pack</span>
              </div>
              <div className={styles.pack}>
              <div className={styles.pricing}>
                <p className={styles.dprice}>₹9,999 </p>
                <p className={styles.oprice}>₹11,999 </p>
              </div>
              <p className={styles.optionl_}>*EMI options available</p>
              </div>

              <div className={styles.benefits}>
                {[
                  {
                    title: "Recorded session",
                    desc: "Get record session of each class",
                  },
                  {
                    title: "Life-time Access",
                    desc: "Get lifetime access to all class recordings",
                  },
                  {
                    title: "Weekend Classes",
                    desc: "Classes are available on weekends",
                  },
                  {
                    title: "Guaranteed Internship",
                    desc: "Get Paid/Non-paid internship offers",
                  },
                  {
                    title: "Portfolio Creation",
                    desc: "We help you create a portfolio to crack interviews",
                  },
                ].map((item, index) => (
                  <div className={styles.benefitItem} key={index}>
                    <div className={styles.checkIcon}>
                      <img
                        src={greentick}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      />
                    </div>
                    <div className={styles.benefitText}>
                      <span className={styles.benefitTitle}>{item.title}</span>
                      <span className={styles.benefitDesc}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.primaryButton}>
                <span className={styles.joinNow}>Join Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
