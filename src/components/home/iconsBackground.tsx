
import React from "react";

export default function IconsBackground({height}: {height?: number}) {

    // note this 'height' is a crop height, so icons will not change size.
    const heightRight = height ? height : 433;
    const heightLeft = height ? height : 498;

    return (
        // The transformStyle and transform css gives a parallax effect in css, along with the perspective property on the scroller in layout.tsx
        <div style={{zIndex: -1, position: 'absolute', width: '100%', height: '100%', transformStyle: 'preserve-3d'}}>

            {/* Right Icons */}
            <svg style={{position: 'absolute', top: '200px', right: '-200px', transform: 'translateZ(-10px)'}} width="350" viewBox={"0 0 92 "+heightRight} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.2095 196.348C64.2626 196.533 64.9689 197.564 64.7901 198.654L64.1437 202.598L71.2829 203.853C73.6507 204.27 75.2412 206.591 74.8391 209.043L72.0917 225.803C71.6897 228.255 69.4488 229.903 67.081 229.486L48.9949 226.306C46.6271 225.89 45.0367 223.569 45.4387 221.116L48.1861 204.356C48.5881 201.904 50.829 200.257 53.1969 200.673L60.3361 201.928L60.9825 197.985C61.1613 196.894 62.1565 196.163 63.2095 196.348ZM52.6676 218.837C52.144 218.745 51.643 219.114 51.5541 219.656C51.4652 220.198 51.8208 220.717 52.3444 220.809L54.2481 221.144C54.7717 221.236 55.2728 220.868 55.3617 220.325C55.4505 219.783 55.0949 219.264 54.5714 219.172L52.6676 218.837ZM58.379 219.842C57.8554 219.75 57.3543 220.118 57.2654 220.66C57.1766 221.202 57.5322 221.721 58.0557 221.813L59.9595 222.148C60.4831 222.24 60.9841 221.872 61.073 221.33C61.1619 220.788 60.8063 220.269 60.2827 220.176L58.379 219.842ZM64.0903 220.846C63.5668 220.754 63.0657 221.122 62.9768 221.665C62.8879 222.207 63.2436 222.726 63.7671 222.818L65.6709 223.153C66.1944 223.245 66.6955 222.876 66.7844 222.334C66.8733 221.792 66.5177 221.273 65.9941 221.181L64.0903 220.846ZM57.2921 211.536C57.3993 210.882 57.2513 210.211 56.8808 209.671C56.5103 209.13 55.9475 208.764 55.3164 208.653C54.6853 208.542 54.0374 208.695 53.5153 209.079C52.9933 209.463 52.6398 210.045 52.5326 210.699C52.4255 211.353 52.5734 212.024 52.944 212.565C53.3145 213.105 53.8772 213.471 54.5083 213.582C55.1395 213.693 55.7874 213.54 56.3094 213.156C56.8315 212.773 57.185 212.19 57.2921 211.536ZM65.9311 215.591C66.5622 215.702 67.2101 215.549 67.7322 215.165C68.2542 214.781 68.6077 214.198 68.7149 213.545C68.822 212.891 68.6741 212.22 68.3035 211.679C67.933 211.139 67.3703 210.773 66.7392 210.662C66.108 210.551 65.4601 210.704 64.9381 211.088C64.416 211.471 64.0625 212.054 63.9554 212.708C63.8482 213.361 63.9962 214.032 64.3667 214.573C64.7372 215.114 65.2999 215.48 65.9311 215.591ZM44.7647 207.305L45.7166 207.472L43.7773 219.303L42.8254 219.135C41.2488 218.858 40.1869 217.308 40.4546 215.676L41.4242 209.76C41.6919 208.127 43.1882 207.027 44.7647 207.305ZM77.1292 212.996C78.7058 213.273 79.7677 214.823 79.5 216.456L78.5304 222.371C78.2627 224.004 76.7664 225.104 75.1898 224.826L74.238 224.659L76.1773 212.828L77.1292 212.996Z" fill="#63BDFF"/>
                <path d="M23.7019 400.078C22.6761 399.772 21.608 400.391 21.3123 401.453L13.5881 429.453C13.2925 430.516 13.8899 431.622 14.9157 431.928C15.9416 432.235 17.0097 431.616 17.3054 430.553L25.0295 402.553C25.3252 401.491 24.7278 400.385 23.7019 400.078ZM28.5657 407.585C27.8114 408.366 27.8114 409.635 28.5657 410.416L33.9545 416.003L28.5597 421.591C27.8054 422.372 27.8054 423.641 28.5597 424.422C29.314 425.203 30.539 425.203 31.2933 424.422L38.0519 417.422C38.8062 416.641 38.8062 415.372 38.0519 414.591L31.2933 407.591C30.539 406.81 29.314 406.81 28.5597 407.591L28.5657 407.585ZM10.058 407.585C9.30366 406.803 8.07866 406.803 7.32435 407.585L0.565733 414.585C-0.188578 415.366 -0.188578 416.635 0.565733 417.416L7.32435 424.416C8.07866 425.197 9.30366 425.197 10.058 424.416C10.8123 423.635 10.8123 422.366 10.058 421.585L4.66315 416.003L10.058 410.416C10.8123 409.635 10.8123 408.366 10.058 407.585Z" fill="#63BDFF"/>
                <path d="M79.5517 25C86.2198 25 91.6207 19.4062 91.6207 12.5C91.6207 11.3047 91.4547 10.1484 91.153 9.04688C90.9192 8.20312 89.9159 8.01562 89.32 8.63281L83.5269 14.6328C83.3006 14.8672 82.9914 15 82.6746 15H78.3448C77.681 15 77.1379 14.4375 77.1379 13.75V9.26562C77.1379 8.9375 77.2662 8.61719 77.4925 8.38281L83.2856 2.38281C83.8815 1.76562 83.6929 0.726562 82.8858 0.484375C81.8222 0.171875 80.7058 0 79.5517 0C72.8836 0 67.4828 5.59375 67.4828 12.5C67.4828 13.9922 67.7392 15.4297 68.1994 16.7578L54.5011 30.9453C53.5431 31.9375 53 33.2891 53 34.6953C53 37.625 55.2931 40 58.1218 40C59.4795 40 60.7845 39.4375 61.7425 38.4453L75.4407 24.2578C76.7231 24.7422 78.111 25 79.5517 25ZM59.0345 31.875C59.5146 31.875 59.9751 32.0725 60.3146 32.4242C60.6541 32.7758 60.8448 33.2527 60.8448 33.75C60.8448 34.2473 60.6541 34.7242 60.3146 35.0758C59.9751 35.4275 59.5146 35.625 59.0345 35.625C58.5543 35.625 58.0939 35.4275 57.7544 35.0758C57.4149 34.7242 57.2241 34.2473 57.2241 33.75C57.2241 33.2527 57.4149 32.7758 57.7544 32.4242C58.0939 32.0725 58.5543 31.875 59.0345 31.875Z" fill="#63BDFF"/>
            </svg>


            {/* Left icons */}
            <svg style={{position: 'absolute', top: '0px', left: '-200px', transform: 'translateZ(-10px)'}} width="300" viewBox={"0 0 61 "+heightLeft} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4604 10.184L24.8978 23.689L6.27023 18.4178L9.83282 4.91281L28.4604 10.184ZM10.8507 1.05424C8.79585 0.472759 6.66873 1.73033 6.1073 3.85857L2.54471 17.3636C1.98329 19.4918 3.19749 21.6949 5.25235 22.2764L12.0805 24.2086L10.9487 25.9616L6.60617 24.7328C5.57583 24.4412 4.51597 25.0678 4.23447 26.135C3.95296 27.2021 4.55795 28.2998 5.58828 28.5914L20.4904 32.8083C21.5207 33.0999 22.5806 32.4733 22.8621 31.4061C23.1436 30.339 22.5386 29.2413 21.5082 28.9497L17.1599 27.7192L17.0459 25.6137L23.8799 27.5476C25.9348 28.129 28.0619 26.8715 28.6233 24.7432L32.1859 11.2382C32.7474 9.10998 31.5332 6.90689 29.4783 6.32541L10.8507 1.05424ZM37.8607 8.69744C36.3181 8.26092 34.7246 9.20301 34.3032 10.8007L28.7048 32.0228C28.2833 33.6205 29.1929 35.2709 30.7355 35.7075L34.4611 36.7617C36.0037 37.1982 37.5971 36.2561 38.0186 34.6584L43.617 13.4363C44.0384 11.8386 43.1288 10.1882 41.5862 9.75168L37.8607 8.69744ZM37.7742 12.8196L39.637 13.3467C40.1492 13.4916 40.4538 14.0443 40.3139 14.5749C40.1739 15.1054 39.6403 15.4209 39.128 15.276L37.2653 14.7489C36.753 14.6039 36.4484 14.0512 36.5884 13.5207C36.7283 12.9901 37.262 12.6746 37.7742 12.8196ZM35.5705 17.3792C35.7104 16.8487 36.2441 16.5332 36.7563 16.6781L38.6191 17.2053C39.1313 17.3502 39.436 17.9029 39.296 18.4335C39.156 18.964 38.6224 19.2795 38.1101 19.1346L36.2474 18.6074C35.7351 18.4625 35.4305 17.9098 35.5705 17.3792ZM34.8885 27.5528C35.3826 27.6926 35.8027 28.0299 36.0566 28.4906C36.3105 28.9513 36.3773 29.4975 36.2423 30.0092C36.1074 30.5209 35.7817 30.9561 35.3369 31.219C34.8921 31.482 34.3647 31.5512 33.8707 31.4114C33.3766 31.2716 32.9564 30.9342 32.7025 30.4736C32.4487 30.0129 32.3819 29.4666 32.5168 28.955C32.6518 28.4433 32.9775 28.0081 33.4223 27.7451C33.8671 27.4822 34.3945 27.413 34.8885 27.5528Z" fill="#63BDFF"/>
                <path d="M28.1995 284.098C27.5516 284.588 27.4114 285.523 27.885 286.194C28.3587 286.865 29.261 287.01 29.9089 286.52L31.1609 285.572L35.1257 287.525L27.8474 293.035L25.1593 292.129C24.7158 291.977 24.2284 292.059 23.8533 292.343L21.1251 294.409C20.4772 294.899 20.337 295.834 20.8106 296.505C21.2843 297.176 22.1866 297.321 22.8345 296.831L24.9634 295.219L27.1333 295.953L27.7285 299.613C27.1523 299.856 26.5944 300.177 26.0732 300.572C22.6289 303.18 21.878 308.184 24.3958 311.752C26.9135 315.319 31.7456 316.097 35.1898 313.489C38.371 311.08 39.2505 306.629 37.3883 303.154L39.7754 301.346C40.1895 301.033 40.4092 300.518 40.3636 299.987L39.3845 289.619L41.8696 290.842C41.3035 293.09 41.6784 295.57 43.1029 297.588C45.6207 301.156 50.4527 301.933 53.8969 299.326C57.3412 296.718 58.0921 291.713 55.5743 288.146C53.0566 284.579 48.2246 283.801 44.7803 286.409C44.1226 286.907 43.5641 287.492 43.1086 288.139L31.8864 282.607C31.2433 282.289 30.4892 282.364 29.9144 282.8L28.1995 284.098ZM45.0171 292.4L48.7167 294.221C49.4403 294.579 50.3046 294.257 50.6454 293.511C50.9862 292.766 50.6806 291.867 49.9606 291.514L46.261 289.693C46.415 289.53 46.5894 289.374 46.7746 289.234C48.7135 287.766 51.4289 288.203 52.8462 290.212C54.2636 292.22 53.8416 295.032 51.9027 296.5C49.9638 297.968 47.2484 297.531 45.831 295.523C45.1687 294.584 44.9078 293.473 45.0171 292.4ZM31.4546 307.646L34.6212 305.249C35.4087 307.137 34.8617 309.402 33.1956 310.663C31.2566 312.131 28.5413 311.694 27.1239 309.686C25.7066 307.678 26.1285 304.866 28.0674 303.398C28.1503 303.335 28.2366 303.277 28.323 303.22L28.8713 306.559C29.0774 307.805 30.4741 308.396 31.4582 307.651L31.4546 307.646ZM31.387 303.981L30.2494 297L37.4048 299.417L37.4035 299.426L31.3821 303.985L31.387 303.981ZM31.2424 294.181L36.5233 290.183L37.0897 296.164L31.2375 294.185L31.2424 294.181Z" fill="#63BDFF"/>
            </svg>

        </div>
    )
}