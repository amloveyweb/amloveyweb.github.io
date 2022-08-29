(function (window) {
    window.UASLink = "https://assetstore.unity.com/develop-indie-games-faster?aid=1011lGoJ";
    window.UASBannerImg = "https://www.amlovey.com/uas/banner/banner.jpg";
    window.UASBannerEnable = false;

    window.UASBanner = {
        create() {
            return function (hook) {
                hook.ready(function () {
                    window.UASBanner.createCSS();
                });

                hook.doneEach(function () {
                    window.UASBanner.createElements();
                });
            };
        },
        createCSS() {
            if (!window.UASBannerEnable) {
                return;
            }
            
            const styleEl = document.createElement("style");
            styleEl.textContent = `
                #uas-banner {
                    margin-left: -8.5%;
                    margin-top: 6px;
                    padding: initial;
                    width: 118%;
                    height: 118%;
                }
            `
            document.head.insertBefore(styleEl, document.querySelector("head style"));
        },
        createElements() {
            if (!window.UASBannerEnable) {
                return;
            }

            let bannerEl = document.querySelector("#uas-banner");
            const sidebarEl = document.querySelector(".sidebar");

            if (!bannerEl && sidebarEl) {
                bannerEl = document.createElement("a");
                bannerEl.id = "uas-banner";
                bannerEl.setAttribute('href', window.UASLink);
                bannerEl.setAttribute("target", "_blank");

                var imgEl = document.createElement("img");
                imgEl.classList.add("uas-banner-img");
                imgEl.src = window.UASBannerImg;
                bannerEl.insertBefore(imgEl, bannerEl.firstChild);

                sidebarEl.insertBefore(bannerEl, sidebarEl.firstChild);
            }
        }
    };
})(window);
