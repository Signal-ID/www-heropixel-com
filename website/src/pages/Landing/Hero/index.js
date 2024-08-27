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
      <div className={styles.HeaderSection}>
        <div className={styles.Container}>
          <div className={styles.HeadlineContent}>
            <div className={styles.Text}>
              <div className={styles.HeadingText}>
                <div className={styles.MainHeading}>
                  Saving Businesses Money,
                </div>
                <div className={styles.SubHeading}>
                  <div className={styles.SubText}>One Lead At A Time.</div>
                </div>
              </div>
              <div className={styles.MobileHeader}>
                <div className={styles.MainHeading}>
                  <div className={styles.MainHeading}>
                    Saving Businesses Money,
                  </div>
                  <div className={styles.SubHeading}>
                    <div className={styles.SubText}>One Lead At A Time.</div>
                  </div>
                </div>
              </div>

              <div className={styles.WistiaWrapper}>
                <script
                  src="https://fast.wistia.com/embed/medias/jd5bh4iafg.jsonp"
                  async></script>
                <script
                  src="https://fast.wistia.com/assets/external/E-v1.js"
                  async></script>
                <div
                  className={
                    styles.WistiaVideoWrapper + ' wistia_responsive_padding'
                  }>
                  <div
                    className={
                      styles.WistiaVideoResponsive +
                      ' wistia_responsive_wrapper'
                    }>
                    <div
                      className={
                        styles.WistiaEmbed +
                        ' wistia_embed wistia_async_jd5bh4iafg seo=true videoFoam=true'
                      }>
                      <div
                        className={
                          styles.WistiaSwatchResponsive + ' wistia_swatch'
                        }>
                        <img
                          src="https://fast.wistia.com/embed/medias/jd5bh4iafg/swatch"
                          className={styles.WistiaImgResponsive}
                          alt=""
                          aria-hidden="true"
                          onload="this.parentNode.style.opacity=1;"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.Description}>
                If you're spending above $50,000 a month on advertising, book a
                call with our team to learn more.
              </div>
            </div>
            <a
              href="https://calendly.com/mark-heropixel/20min"
              className={styles.Button}>
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
