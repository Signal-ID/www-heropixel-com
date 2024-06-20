import React from 'react';
import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faUsers,
  faCoins,
  faFingerprint,
} from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className={styles.LandingPageNewV2}>
      <img
        src="/img/heropixel/Hero-Pixel-Horizontal-Logo-RGB-Black-Medium.png"
        alt="Logo"
        className={styles.Logo}
      />
      <img
        src="/img/heropixel/Hero-Pixel-Icon-RGB-Black-Medium.svg"
        alt="MobileLogo"
        className={styles.MobileLogo}
      />
      <div className={styles.HeaderSection}>
        <div className={styles.Container}>
          <div className={styles.HeadlineContent}>
            <div className={styles.Text}>
              <div className={styles.BlueText}>
                Your Lead Prices Keep Increasing. Now What?
              </div>
              <div className={styles.HeadingText}>
                <div className={styles.MainHeading}>
                  Your leads cost $5 - $10+
                </div>
                <div className={styles.SubHeading}>
                  <div className={styles.SubText}>
                    We'll give them to you for&nbsp;
                    <span className={styles.PriceText}>$0.50</span>
                  </div>
                </div>
              </div>
              <div className={styles.MobileHeader}>
                <div className={styles.MainHeading}>
                  <div className={styles.MainHeading}>Your leads cost</div>
                  <div className={styles.SubHeading}>
                    <div className={styles.SubText}>
                      $5 - $10+, We'll give them to you for&nbsp;
                      <span className={styles.PriceText}>$0.50</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.Description}>
                If you're spending above $50,000 a month on advertising, book a
                call with our team to learn more.
              </div>
            </div>
            <a href="#" className={styles.Button}>
              <div className={styles.ButtonText}>Get started</div>
              <div className={styles.Right}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
          <img
            className={styles.DashboardImage}
            src="/img/heropixel/hero-dash.png"
            alt="Dashboard"
          />
        </div>
      </div>
      <div className={styles.AsetOrnamen}>
        <div className={styles.MetricCard1}>
          <div className={styles.Icon1}>
            <div className={styles.Users01}>
              <div className={styles.IconInner1}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
            </div>
          </div>
          <div className={styles.Content}>
            <div className={styles.Heading}>Total Leads</div>
            <div className={styles.NumberAndBadge}>
              <div className={styles.Number}>107,148</div>
              <div className={styles.DashboardBadge}>
                <div className={styles.Up16px}>
                  <div className={styles.Primary}></div>
                  <div className={styles.PrimaryVertical}></div>
                </div>
                <div className={styles.Typography}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MetricCard2}>
          <div className={styles.Icon2}>
            <div className={styles.UsersCheck}>
              <div className={styles.IconInner2}>
                <FontAwesomeIcon icon={faFingerprint} />
              </div>
            </div>
          </div>
          <div className={styles.Content}>
            <div className={styles.Heading}>Total % Leads Identified</div>
            <div className={styles.NumberAndBadge}>
              <div className={styles.Number}>39%</div>
              <div className={styles.DashboardBadge}>
                <div className={styles.Up16px}>
                  <div className={styles.Primary}></div>
                  <div className={styles.PrimaryVertical}></div>
                </div>
                <div className={styles.Typography}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MetricCard3}>
          <div className={styles.Icon3}>
            <div className={styles.CoinsStacked02}>
              <div className={styles.IconInner3}>
                <FontAwesomeIcon icon={faCoins} />
              </div>
            </div>
          </div>
          <div className={styles.Content}>
            <div className={styles.Heading}>Total Savings</div>
            <div className={styles.NumberAndBadge}>
              <div className={styles.Number}>$27,985.00</div>
              <div className={styles.DashboardBadge}>
                <div className={styles.Up16px}>
                  <div className={styles.Primary}></div>
                  <div className={styles.PrimaryVertical}></div>
                </div>
                <div className={styles.Typography}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
