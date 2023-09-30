
import * as styles from "@styles/components/home/welcome.module.scss"

import * as React from 'react';

export default function Welcome() {

    return (
        <section className={styles.welcome}>
            <div className={styles.welcomeContainer}>

                <div className={styles.welcomeIconsContainer}>

                    <svg className={`${styles.iconBike} ${styles.icon}`} viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Bike" d="M8.61333 2.09786C7.9654 2.58841 7.82518 3.52295 8.29881 4.19402C8.77245 4.86509 9.67477 5.01032 10.3227 4.51976L11.5747 3.57185L15.5395 5.52488L8.26121 11.0353L5.57313 10.1286C5.12955 9.97668 4.64216 10.0592 4.26704 10.3432L1.53892 12.4087C0.890993 12.8993 0.750774 13.8338 1.22441 14.5049C1.69805 15.176 2.60036 15.3212 3.24829 14.8306L5.3772 13.2188L7.54712 13.9527L8.14225 17.613C7.56606 17.8557 7.00824 18.1774 6.48697 18.5721C3.04272 21.1798 2.29182 26.1843 4.80958 29.7516C7.32734 33.3189 12.1594 34.0966 15.6036 31.4889C18.7848 29.0804 19.6643 24.6287 17.8021 21.1536L20.1892 19.3463C20.6033 19.0327 20.823 18.518 20.7774 17.9874L19.7982 7.61916L22.2834 8.84208C21.7173 11.0901 22.0922 13.57 23.5167 15.5883C26.0345 19.1555 30.8665 19.9332 34.3107 17.3256C37.755 14.7179 38.5059 9.71329 35.9881 6.14603C33.4704 2.57877 28.6383 1.80106 25.1941 4.40874C24.5364 4.90666 23.9779 5.49211 23.5224 6.13887L12.3002 0.607099C11.6571 0.288902 10.903 0.364326 10.3281 0.799553L8.61333 2.09786ZM25.4309 10.3997L29.1305 12.2206C29.854 12.5786 30.7184 12.257 31.0592 11.5113C31.3999 10.7656 31.0944 9.86663 30.3744 9.5137L26.6748 7.6928C26.8288 7.52974 27.0032 7.37445 27.1884 7.23429C29.1273 5.76632 31.8426 6.20336 33.26 8.21152C34.6773 10.2197 34.2554 13.032 32.3165 14.5C30.3775 15.968 27.6622 15.5309 26.2448 13.5228C25.5824 12.5843 25.3216 11.4734 25.4309 10.3997ZM11.8684 25.646L15.035 23.2486C15.8225 25.1375 15.2754 27.4019 13.6093 28.6633C11.6704 30.1313 8.95505 29.6943 7.5377 27.6861C6.12035 25.678 6.54232 22.8656 8.48123 21.3976C8.56405 21.3349 8.65043 21.2773 8.73681 21.2196L9.28505 24.5593C9.49117 25.8045 10.8879 26.3961 11.872 25.651L11.8684 25.646ZM11.8008 21.9811L10.6632 14.9999L17.8186 17.4172L17.8173 17.426L11.7959 21.9848L11.8008 21.9811ZM11.6562 12.181L16.937 8.18284L17.5035 14.1642L11.6513 12.1847L11.6562 12.181Z" fill="#63BDFF"/>
                    </svg>
                    <svg className={`${styles.iconWrench} ${styles.icon}`} viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Wrench" d="M26.9311 25C33.5992 25 39 19.4062 39 12.5C39 11.3047 38.8341 10.1484 38.5323 9.04688C38.2985 8.20312 37.2953 8.01562 36.6994 8.63281L30.9063 14.6328C30.68 14.8672 30.3707 15 30.0539 15H25.7242C25.0604 15 24.5173 14.4375 24.5173 13.75V9.26562C24.5173 8.9375 24.6455 8.61719 24.8718 8.38281L30.6649 2.38281C31.2608 1.76562 31.0722 0.726562 30.2651 0.484375C29.2015 0.171875 28.0852 0 26.9311 0C20.263 0 14.8621 5.59375 14.8621 12.5C14.8621 13.9922 15.1186 15.4297 15.5787 16.7578L1.88041 30.9453C0.922437 31.9375 0.379333 33.2891 0.379333 34.6953C0.379333 37.625 2.67244 40 5.5011 40C6.85886 40 8.16382 39.4375 9.12179 38.4453L22.8201 24.2578C24.1024 24.7422 25.4903 25 26.9311 25ZM6.41382 31.875C6.89395 31.875 7.35442 32.0725 7.69392 32.4242C8.03343 32.7758 8.22416 33.2527 8.22416 33.75C8.22416 34.2473 8.03343 34.7242 7.69392 35.0758C7.35442 35.4275 6.89395 35.625 6.41382 35.625C5.93368 35.625 5.47321 35.4275 5.13371 35.0758C4.7942 34.7242 4.60347 34.2473 4.60347 33.75C4.60347 33.2527 4.7942 32.7758 5.13371 32.4242C5.47321 32.0725 5.93368 31.875 6.41382 31.875Z" fill="#63BDFF"/>
                    </svg>
                    <svg className={`${styles.iconRobot} ${styles.icon}`} viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Robot" d="M23.382 0.34768C24.435 0.532848 25.1413 1.56359 24.9625 2.65423L24.3161 6.5978L31.4553 7.85318C33.8231 8.26955 35.4136 10.5905 35.0116 13.0429L32.2642 29.8031C31.8622 32.2555 29.6212 33.9027 27.2534 33.4864L9.16737 30.3061C6.79953 29.8897 5.20908 27.5687 5.61109 25.1163L8.3585 8.35617C8.76051 5.90376 11.0014 4.25651 13.3693 4.67288L20.5085 5.92826L21.1549 1.9847C21.3337 0.894052 22.3289 0.162511 23.382 0.34768ZM12.84 22.8374C12.3165 22.7453 11.8154 23.1137 11.7265 23.6559C11.6376 24.1981 11.9932 24.7171 12.5168 24.8092L14.4206 25.1439C14.9441 25.236 15.4452 24.8677 15.5341 24.3254C15.623 23.7832 15.2673 23.2642 14.7438 23.1722L12.84 22.8374ZM18.5514 23.8417C18.0278 23.7496 17.5268 24.118 17.4379 24.6602C17.349 25.2024 17.7046 25.7214 18.2282 25.8135L20.1319 26.1482C20.6555 26.2403 21.1566 25.872 21.2455 25.3297C21.3343 24.7875 20.9787 24.2685 20.4552 24.1765L18.5514 23.8417ZM24.2628 24.846C23.7392 24.7539 23.2381 25.1223 23.1492 25.6645C23.0604 26.2068 23.416 26.7257 23.9395 26.8178L25.8433 27.1526C26.3669 27.2446 26.8679 26.8763 26.9568 26.334C27.0457 25.7918 26.6901 25.2728 26.1665 25.1808L24.2628 24.846ZM17.4645 15.5361C17.5717 14.8824 17.4237 14.2114 17.0532 13.6707C16.6827 13.13 16.12 12.7639 15.4888 12.6529C14.8577 12.5419 14.2098 12.6952 13.6878 13.0789C13.1657 13.4627 12.8122 14.0455 12.7051 14.6992C12.5979 15.3529 12.7459 16.0239 13.1164 16.5646C13.4869 17.1053 14.0496 17.4714 14.6808 17.5824C15.3119 17.6934 15.9598 17.5401 16.4818 17.1564C17.0039 16.7726 17.3574 16.1898 17.4645 15.5361ZM26.1035 19.591C26.7347 19.702 27.3825 19.5487 27.9046 19.165C28.4266 18.7812 28.7801 18.1984 28.8873 17.5447C28.9944 16.891 28.8465 16.22 28.476 15.6793C28.1054 15.1386 27.5427 14.7725 26.9116 14.6615C26.2804 14.5505 25.6326 14.7038 25.1105 15.0875C24.5884 15.4713 24.235 16.0541 24.1278 16.7078C24.0206 17.3615 24.1686 18.0325 24.5391 18.5732C24.9096 19.1139 25.4724 19.48 26.1035 19.591ZM4.93717 11.3046L5.88907 11.472L3.94972 23.3027L2.99783 23.1353C1.42125 22.8581 0.359306 21.3084 0.626977 19.6755L1.59665 13.7602C1.86432 12.1273 3.3606 11.0274 4.93717 11.3046ZM37.3016 16.9957C38.8782 17.2729 39.9401 18.8226 39.6725 20.4555L38.7028 26.3709C38.4351 28.0038 36.9389 29.1036 35.3623 28.8264L34.4104 28.659L36.3497 16.8283L37.3016 16.9957Z" fill="#63BDFF"/>
                    </svg>
                    <svg className={`${styles.iconComputer} ${styles.icon}`} viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Computer" d="M26.4604 10.184L22.8978 23.689L4.27023 18.4178L7.83282 4.91281L26.4604 10.184ZM8.8507 1.05424C6.79585 0.472759 4.66873 1.73033 4.1073 3.85857L0.544712 17.3636C-0.0167142 19.4918 1.19749 21.6949 3.25235 22.2764L10.0805 24.2086L8.94872 25.9616L4.60617 24.7328C3.57583 24.4412 2.51597 25.0678 2.23447 26.135C1.95296 27.2021 2.55795 28.2998 3.58828 28.5914L18.4904 32.8083C19.5207 33.0999 20.5806 32.4733 20.8621 31.4061C21.1436 30.339 20.5386 29.2413 19.5082 28.9497L15.1599 27.7192L15.0459 25.6137L21.8799 27.5476C23.9348 28.129 26.0619 26.8715 26.6233 24.7432L30.1859 11.2382C30.7474 9.10998 29.5332 6.90689 27.4783 6.32541L8.8507 1.05424ZM35.8607 8.69744C34.3181 8.26092 32.7246 9.20301 32.3032 10.8007L26.7048 32.0228C26.2833 33.6205 27.1929 35.2709 28.7355 35.7075L32.4611 36.7617C34.0037 37.1982 35.5971 36.2561 36.0186 34.6584L41.617 13.4363C42.0384 11.8386 41.1288 10.1882 39.5862 9.75168L35.8607 8.69744ZM35.7742 12.8196L37.637 13.3467C38.1492 13.4916 38.4538 14.0443 38.3139 14.5749C38.1739 15.1054 37.6403 15.4209 37.128 15.276L35.2653 14.7489C34.753 14.6039 34.4484 14.0512 34.5884 13.5207C34.7283 12.9901 35.262 12.6746 35.7742 12.8196ZM33.5705 17.3792C33.7104 16.8487 34.2441 16.5332 34.7563 16.6781L36.6191 17.2053C37.1313 17.3502 37.436 17.9029 37.296 18.4335C37.156 18.964 36.6224 19.2795 36.1101 19.1346L34.2474 18.6074C33.7351 18.4625 33.4305 17.9098 33.5705 17.3792ZM32.8885 27.5528C33.3826 27.6926 33.8027 28.0299 34.0566 28.4906C34.3105 28.9513 34.3773 29.4975 34.2423 30.0092C34.1074 30.5209 33.7817 30.9561 33.3369 31.219C32.8921 31.482 32.3647 31.5512 31.8707 31.4114C31.3766 31.2716 30.9564 30.9342 30.7025 30.4736C30.4487 30.0129 30.3819 29.4666 30.5168 28.955C30.6518 28.4433 30.9775 28.0081 31.4223 27.7451C31.8671 27.4822 32.3945 27.413 32.8885 27.5528Z" fill="#63BDFF"/>
                    </svg>
                    <svg className={`${styles.iconCode} ${styles.icon}`} viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Code" d="M23.9778 0.0783829C22.952 -0.227867 21.8839 0.390883 21.5882 1.45338L13.864 29.4534C13.5683 30.5159 14.1657 31.6221 15.1916 31.9284C16.2175 32.2346 17.2856 31.6159 17.5813 30.5534L25.3054 2.55338C25.6011 1.49088 25.0037 0.384633 23.9778 0.0783829ZM28.8416 7.58463C28.0873 8.36588 28.0873 9.63463 28.8416 10.4159L34.2304 16.0034L28.8356 21.5909C28.0813 22.3721 28.0813 23.6409 28.8356 24.4221C29.5899 25.2034 30.8149 25.2034 31.5692 24.4221L38.3278 17.4221C39.0821 16.6409 39.0821 15.3721 38.3278 14.5909L31.5692 7.59088C30.8149 6.80963 29.5899 6.80963 28.8356 7.59088L28.8416 7.58463ZM10.3339 7.58463C9.57954 6.80338 8.35454 6.80338 7.60023 7.58463L0.841612 14.5846C0.0873013 15.3659 0.0873013 16.6346 0.841612 17.4159L7.60023 24.4159C8.35454 25.1971 9.57954 25.1971 10.3339 24.4159C11.0882 23.6346 11.0882 22.3659 10.3339 21.5846L4.93903 16.0034L10.3339 10.4159C11.0882 9.63463 11.0882 8.36588 10.3339 7.58463Z" fill="#63BDFF"/>
                    </svg>
                </div>

                <p className={styles.welcomeText}>
                    I work on projects across CS, Robotics, AI, and more.
                </p>

                <a className={styles.welcomeContinue}>
                    See what I do
                </a>

                <div className={styles.welcomeLine}>
                    <div className={styles.welcomeArrow}>
                        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9393 38.7707C11.5251 39.3565 12.4749 39.3565 13.0607 38.7707L22.6066 29.2247C23.1924 28.639 23.1924 27.6892 22.6066 27.1034C22.0208 26.5176 21.0711 26.5176 20.4853 27.1034L12 35.5887L3.51472 27.1034C2.92893 26.5176 1.97919 26.5176 1.3934 27.1034C0.807611 27.6892 0.807611 28.639 1.3934 29.2247L10.9393 38.7707ZM10.5 0.210022V37.71H13.5V0.210022H10.5Z" fill="white"/>
                        </svg>
                    </div>
                    <div className={styles.lineStart}>
                        <svg className={`${styles.animateLine} ${styles.line1Svg}`} height="250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="line-center-start" pathLength="1" d={"M 500 0 C 500 300 50 50 50 250"} stroke="white" strokeWidth="3"/>
                        </svg>    
                    </div>
                </div>
            </div>
        </section>
    )
}