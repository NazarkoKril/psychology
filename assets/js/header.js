const header = document.querySelectorAll(".header_component");
const headerComponent = `
		<header>
            <div class="header-container">
                <button class="burger">
                    <img src="/assets/img/icons/burger.svg" alt="">
                </button>
                <div class="header-logo">
                    <a href="/">
                        <img src="/assets/img/logo.png" alt="Mariana Uspenko Logo">
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
            </div>
            <div class="header-mobile-container">
                <button class="header-close">
                    <img src="/assets/img/icons/crose.svg" alt="">
                </button>
                <div class="header-mobile-menu">
                    <ul class="header-mobile-menu-list">
                        <li><a class="header-link" href="/#services">Послуги</a></li>
                        <li><a class="header-link" href="/about.html">Про мене</a></li>
                        <li><a class="header-link" href="/blog.html">Блог</a></li>
                        <li><a class="header-link" href="/#contact">Звʼязатись зі мною</a></li>
                    </ul>
                </div>
            </div>
        </header>`;
header.forEach((el) => {
	return (el.innerHTML = headerComponent);
});
