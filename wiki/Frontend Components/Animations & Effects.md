<details>
<summary>Relevant source files</summary>

The following files were used as context for generating this wiki page:

- [js/aos.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/aos.js)
- [css/aos.css](https://github.com/agattani123/agattani123.github.io/blob/master/css/aos.css)
- [js/rellax.min.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/rellax.min.js)
- [js/vidbg.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/vidbg.js)
- [css/vidbg.css](https://github.com/agattani123/agattani123.github.io/blob/master/css/vidbg.css)

</details>

# Animations & Effects

## Introduction

The "Animations & Effects" feature in this project provides various animation and visual effect capabilities to enhance the user experience. It includes libraries and components for animating elements on scroll, creating parallax effects, and displaying background videos. These effects can add depth, movement, and interactivity to the website, making it more engaging and visually appealing.

## Animate on Scroll (AOS)

The Animate on Scroll (AOS) library is used to animate elements as they come into view while scrolling. It allows for smooth and customizable animations, such as fading, zooming, and sliding effects.

### AOS Library

The `aos.js` file contains the core functionality of the AOS library. It provides methods for initializing, refreshing, and destroying the animations. The library supports various animation types, durations, delays, and easing functions, which can be configured through data attributes or programmatically.

```javascript
// Initialize AOS
AOS.init({
  // Options
});

// Refresh AOS
AOS.refresh();

// Destroy AOS
AOS.refreshHard();
```

Sources: [js/aos.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/aos.js)

The `aos.css` file contains the CSS styles for the different animation types and configurations supported by the AOS library.

Sources: [css/aos.css](https://github.com/agattani123/agattani123.github.io/blob/master/css/aos.css)

### Usage

To use AOS, elements need to have the `data-aos` attribute, which specifies the animation type. Additional attributes like `data-aos-delay`, `data-aos-duration`, and `data-aos-easing` can be used to customize the animation behavior.

```html
<div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
  <!-- Content -->
</div>
```

Sources: [js/aos.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/aos.js#L21-L24), [css/aos.css](https://github.com/agattani123/agattani123.github.io/blob/master/css/aos.css)

## Parallax Effects (Rellax)

The Rellax library is used to create parallax effects, where elements move at different speeds based on their position and the scroll position, creating a sense of depth and movement.

### Rellax Library

The `rellax.min.js` file is a minified version of the Rellax library. It provides methods for initializing and destroying the parallax effects, as well as options for configuring the behavior.

```javascript
// Initialize Rellax
const rellax = new Rellax('.rellax', {
  // Options
});

// Destroy Rellax
rellax.destroy();
```

Sources: [js/rellax.min.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/rellax.min.js)

### Usage

To use Rellax, elements need to have the `.rellax` class. Additional data attributes like `data-rellax-speed` and `data-rellax-percentage` can be used to control the parallax effect's speed and intensity.

```html
<div class="rellax" data-rellax-speed="-4">
  <!-- Content -->
</div>
```

Sources: [js/rellax.min.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/rellax.min.js)

## Background Video (Vidbg)

The Vidbg library is used to display background videos on the website, adding a dynamic and immersive visual element.

### Vidbg Library

The `vidbg.js` file contains the Vidbg class, which handles the creation, initialization, and management of the background video element.

```javascript
const vidbg = new Vidbg('#selector', {
  // Options
});

// Get the video element
const videoEl = vidbg.getVideo();

// Destroy the background video
vidbg.destroy();
```

Sources: [js/vidbg.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/vidbg.js)

The `vidbg.css` file contains the CSS styles for positioning and styling the background video container and overlay.

Sources: [css/vidbg.css](https://github.com/agattani123/agattani123.github.io/blob/master/css/vidbg.css)

### Usage

To use Vidbg, you need to provide a selector for the container element and the video sources (MP4 and/or WebM). An optional poster image and overlay can also be configured.

```javascript
const vidbg = new Vidbg('#container', {
  mp4: 'video.mp4',
  webm: 'video.webm',
  poster: 'poster.jpg',
  overlay: true,
  overlayColor: '#000',
  overlayAlpha: 0.3
});
```

Sources: [js/vidbg.js](https://github.com/agattani123/agattani123.github.io/blob/master/js/vidbg.js#L34-L45)

## Conclusion

The "Animations & Effects" feature in this project provides a set of libraries and components that enhance the visual experience of the website. The Animate on Scroll (AOS) library enables smooth animations as elements come into view, the Rellax library creates parallax effects for depth and movement, and the Vidbg library allows for the display of background videos. These features contribute to a more engaging and dynamic user experience.