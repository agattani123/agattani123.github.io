<details>
<summary>Relevant source files</summary>

The following files were used as context for generating this wiki page:

- [travels.html](https://github.com/agattani123/agattani123.github.io/blob/master/travels.html)
- [js/travels.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/travels.js)
- [css/travels.css](https://github.com/agattani123/agattani123.github.io/blob/master/css/travels.css)
</details>

# Travels Page

## Introduction

The Travels Page is a visually appealing and interactive web page that showcases the author's travel experiences across various countries. It serves as a timeline-based representation of the author's journeys, displaying the countries visited along with their respective years and regions. The page incorporates animations and visual effects to enhance the user experience.

Sources: [travels.html](), [css/travels.css]()

## Page Structure

### Header and Navigation

The page features a header section with a logo and two navigation menus. The main navigation menu includes links to different sections of the website, such as "About," "Maps," "Timeline," and the current "Travel" page. The second navigation menu provides links for "Contact" and "Gallery."

```html
<header class="header">
    <img src="logos/trans-logo.png" class="logo" width="100" height="70" data-aos="fade-down">
    <nav class="main-nav" data-aos="fade-down">
        <!-- Main navigation links -->
    </nav>
    <nav class="second-nav" data-aos="fade-down">
        <!-- Secondary navigation links -->
    </nav>
</header>
```

Sources: [travels.html:9-30]()

### Banner and Clouds Animation

The page includes a banner section with a background image and an animated cloud effect. The cloud animation is achieved using CSS keyframes and multiple cloud images positioned absolutely.

```css
.banner .clouds img {
    position: absolute;
    bottom: 0;
    max-width: 100%;
    animation: animate calc(10s * var(--i)) linear infinite;
}

@keyframes animate {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
```

Sources: [travels.html:31-39](), [css/travels.css:53-70]()

### Timeline Section

The main content of the page is a timeline section that displays the author's travel destinations. The timeline is implemented using an unordered list (`<ul>`) with list items (`<li>`) representing each travel event. Each list item contains a time element (`<time>`), a discovery element (`<div class="discovery">`), and a scientists element (`<div class="scientists">`).

```html
<section class="timeline">
    <ul>
        <li>
            <div>
                <time>2024</time>
                <div class="discovery">
                    <h1>India</h1>
                    <p>Asia</p>
                </div>
                <div class="scientists">
                    <h1></h1>
                    <span></span>
                </div>
            </div>
        </li>
        <!-- Additional list items for other travel destinations -->
    </ul>
</section>
```

Sources: [travels.html:43-103]()

### Footer

The page includes a footer section with the logo, a contact email, and additional links.

```html
<footer class="footer" data-aos="fade-up" data-aos-delay="500">
    <img src="logos/trans-logo.png" class="logo" width="100" height="70" data-aos="fade-down">
    <p class="footer-text">let me know what you think! <a class="footer-link" href="#"></a></p>
    <a href="mailto:agattani@seas.upenn.edu" class="footer-button">agattani@seas.upenn.edu</a>
</footer>
```

Sources: [travels.html:105-113]()

## Timeline Animation

The timeline section incorporates an animation effect to enhance the user experience. The animation is implemented using JavaScript and CSS. The JavaScript code checks if each timeline list item is in the viewport and adds or removes the "in-view" class accordingly. The CSS styles define the animation for the "in-view" class, transitioning the list item's position and opacity.

```js
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            if (!items[i].classList.contains("in-view")) {
                items[i].classList.add("in-view");
            }
        } else if (items[i].classList.contains("in-view")) {
            items[i].classList.remove("in-view");
        }
    }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
```

```css
.timeline ul li div {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
}

.timeline ul li:nth-of-type(odd) div {
    transform: translate3d(100px, -10px, 0) rotate(10deg);
}

.timeline ul li:nth-of-type(even) div {
    transform: translate3d(-100px, -10px, 0) rotate(10deg);
}

.timeline ul li.in-view div {
    transform: none;
    visibility: visible;
    opacity: 1;
}
```

Sources: [js/travels.js](), [css/travels.css:100-134]()

## Responsive Design

The Travels Page incorporates responsive design principles to ensure a consistent and optimized user experience across different devices and screen sizes. The CSS styles include media queries that adjust the layout and styles based on the viewport width.

```css
@media screen and (max-width: 900px) {
    .timeline ul li div {
        width: 250px;
        flex-direction: column;
    }
    .timeline ul li div div {
        width: 80%;
        margin: 10px;
    }
    .timeline ul li:nth-of-type(even) > div {
        left: -289px;
    }
}

@media screen and (max-width: 600px) {
    body {
        background: #8bfff4;
    }
    .timeline ul li {
        margin-left: 20px;
    }
    .timeline ul li div {
        width: calc(100vw - 91px);
    }
    .timeline ul li:nth-of-type(even) > div {
        left: 45px;
    }
}
```

Sources: [css/travels.css:136-160]()

## Conclusion

The Travels Page is a visually appealing and interactive web page that showcases the author's travel experiences across various countries. It incorporates animations, responsive design, and a timeline-based layout to provide an engaging user experience. The page is built using HTML, CSS, and JavaScript, with a focus on creating a visually appealing and user-friendly interface.