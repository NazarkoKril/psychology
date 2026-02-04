const header = document.querySelectorAll(".header_component");
const headerComponent = `
		<header>
            <div class="header-container">
                <div class="header-logo">
                    <a href="/">
                        <div class="logo"></div>
                        <span>Ваш особистий психолог</span>
                    </a>
                </div>
                <div class="header-menu">
                    <nav>
                        <ul class="header-menu-list">
                            <li><a class="header-link" href="/#services">Послуги</a></li>
                            <li><a class="header-link" href="/about.html">Про мене</a></li>
                            <li><a class="header-link" href="/blog.html">Блог</a></li>
                            <li><a class="header-link" href="/#contact">Звʼязатись зі мною</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="header-lang">
                    <label class="lang-toggle">
                        <span class="lang">UA</span>
                        <input type="checkbox" id="langSwitch">
                        <span class="slider"></span>
                        <span class="lang">POL</span>
                    </label>
                </div>
                <button class="burger">
                    <div class="line"></div>
                    <div class="line"></div>
                </button>
            </div>
            <div class="header-mobile-container">
                <button class="header-close">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.1211 2.12109L15.6816 13.5605L27.1211 25L25 27.1211L13.5605 15.6816L2.12109 27.1211L0 25L11.4395 13.5605L0 2.12109L2.12109 0L13.5605 11.4395L25 0L27.1211 2.12109Z" fill="#577B7B"/>
                    </svg>
                </button>
                <div class="header-logo">
                    <a href="/">
                        <div class="logo"></div>
                        <span>Ваш особистий психолог</span>
                    </a>
                </div>
                <div class="header-menu">
                    <nav>
                        <ul class="header-menu-list">
                            <li><a class="header-link" href="/#services">Послуги</a></li>
                            <li><a class="header-link" href="/about.html">Про мене</a></li>
                            <li><a class="header-link" href="/blog.html">Блог</a></li>
                            <li><a class="header-link" href="/#contact">Звʼязатись зі мною</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="header-lang">
                    <label class="lang-toggle">
                        <span class="lang">UA</span>
                        <input type="checkbox" id="langSwitchMobile">
                        <span class="slider"></span>
                        <span class="lang">POL</span>
                    </label>
                </div>
            </div>
        </header>`;
header.forEach((el) => {
    return (el.innerHTML = headerComponent);
});
