const footer = document.querySelectorAll('.footer_component')
const footerComponent = `
<footer>
        <div class="footer-container">
            <div class="footer-left">
                <div class="footer-logo">
                    <a href="/"><img src="/assets/img/icons/logo_big.svg" alt="Mariana Uspenko Logo"></a>
                </div>
                <p>Ваш персональний психолог</p>
            </div>
            <div class="footer-right">
                <ul class="footer-links">
                    <h5>Features</h5>
                    <li><a class="footer-link" href="#">Core features</a></li>
                    <li><a class="footer-link" href="#">Pro experience</a></li>
                    <li><a class="footer-link" href="#">Integrations</a></li>
                </ul>
                <ul class="footer-links">
                    <h5>Дослідіть ще</h5>
                    <li><a class="footer-link" href="/blog.html">Блог</a></li>
                    <li><a class="footer-link" href="/about.html">Про мене</a></li>
                    <li><a class="footer-link" href="/#reviews">Відгуки</a></li>
                </ul>
                <ul class="footer-links">
                    <h5>Пітримка </h5>
                    <li><a class="footer-link" href="#">Телеграм</a></li>
                    <li><a class="footer-link" href="#">Фейсбук</a></li>
                    <li><a class="footer-link" href="#">Твітер</a></li>
                </ul>                
            </div>
            <div class="footer-bottom">
                <ul class="footer-socials">
                    <li><a class="footer-social" href="#" target="_blank">
                        <img src="/assets/img/icons/instagram.svg" alt="Instagram">
                    </a></li>
                    <li><a class="footer-social" href="#" target="_blank">
                        <img src="/assets/img/icons/linkedin.svg" alt="LinkedIn">
                    </a></li>
                    <li><a class="footer-social" href="#" target="_blank">
                        <img src="/assets/img/icons/x.svg" alt="X">
                    </a></li>
                </ul>
            </div>
        </div>
    </footer>`
footer.forEach( (el) => {
  return el.innerHTML = footerComponent
}
)

