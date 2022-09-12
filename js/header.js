var header = document.getElementById("site-header");
header.innerHTML = `
<div class="row">
          <div class="r1-col txt-col">
            <p style="font-weight: bold">
              The Power of Project Management <br class="br-small" />
              Builds Organizational Competence for Sustainable Excellence
            </p>
          </div>

          <div class="r1-col logo-col">
            <div class="logo">
              <img src="img/logo.png" alt="" style="width: 100%" />
            </div>
          </div>
        </div>

        <div class="row row-btn-mobile">
          <div class="dd dd-on-mob">
            <div class="dropdown">
              <a onclick="myFunction()" class="reg-btn"
                >Event Registration
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </a>
              <div id="myDropdown" class="dropdown-content">
                <a href="#">Payment in USD</a>
                <a href="#">Payment in PKR</a>
              </div>
            </div>
          </div>

          <label for="toggle-nav" class="toggle-nav-label">
            <i class="fas fa-bars" style="font-size: 25px"></i>
          </label>
        </div>

        <div class="row row-nav">
          <input type="checkbox" id="toggle-nav" class="toggle-nav" />

          <nav class="header-nav">
            <ul class="header-ul">
              <li><a href="/">Home</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="aboutUs.html">About us</a></li>
              <li><a href="">Up-coming Events</a></li>
              <li><a href="past-events">Past Events</a></li>
              <li><a href="articles">Articles</a></li>
              <li><a href="book">Book</a></li>
              <li><a href="contact.html">Contact</a></li>
              <div class="dd display-none-mobile">
                <div class="dropdown">
                  <a onclick="myFunction()" class="reg-btn"
                    >Event Registration
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <div id="myDropdown" class="dropdown-content">
                    <a href="#">Payment in USD</a>
                    <a href="#">Payment in PKR</a>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        </div>
        `;

        var footer = document.getElementById("site-footer");
        footer.innerHTML = ` 
        <section class="horizontal-footer-section" id="footer-top-section">
        <p class="footer-slog">
          The Power of Project Management Builds Organizational Competence for
          Sustainable Excellence
        </p>
        <div id="footer-logo">
          <img
            src="img/logo.png"
            alt="footer logo"
            role="presentation"
            width="100"
          />
        </div>
      </section>

      <section class="horizontal-footer-section" id="footer-middle-section">
        <div id="footer-about" class="footer-columns footer-columns-large">
          <h1>Contact us</h1>
          <address>
            <p>
              <img
                src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png"
              />7 (800) 555–35–35
            </p>
            <p>
              <img
                src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png"
              />noreply@reply.io
            </p>
          </address>
        </div>
        <div class="footer-columns">
          <h1>Overview</h1>
          <ul class="footer-column-menu" role="menu">
            <li class="footer-column-menu-item" role="menuitem">
              <a href="#" class="footer-column-menu-item-link">Services </a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
              <a href="#" class="footer-column-menu-item-link"
                >Upcoming Events</a
              >
            </li>
            <li class="footer-column-menu-item" role="menuitem">
              <a href="#" class="footer-column-menu-item-link">Past Events</a>
            </li>
          </ul>
        </div>

        <div class="footer-columns">
          <h1>Information</h1>
          <ul class="footer-column-menu" role="menu">
            <li class="footer-column-menu-item" role="menuitem">
              <a href="#" class="footer-column-menu-item-link">About Us</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
              <a href="#" class="footer-column-menu-item-link"
                >Privacy Policy</a
              >
            </li>

            <li class="footer-column-menu-item" role="menuitem">
              <a href="#" class="footer-column-menu-item-link">Sitemap</a>
            </li>
          </ul>
        </div>
      </section>

      <section class="horizontal-footer-section" id="footer-bottom-section">
        <div id="footer-copyright-info">
          &copy;
          <a href="https://giantssolutions.com" style="font-weight: bolder"
            >Giants Solutions</a
          >
          2022. All rights reserved.
        </div>
        <div id="footer-social-buttons">
          <a href="https://www.facebook.com/thepowerpm"
            ><img
              src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"
          /></a>
          <img
            src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png"
          />
          <img
            src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"
          />
          <img
            src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"
          />
        </div>
      </section>
        `;       