/*
	Modern Interactive Website - 2025
	Enhanced with smooth animations, scroll effects, and modern UX patterns
*/

document.addEventListener('DOMContentLoaded', function() {
	// Initialize all functionality
	initializeLoadingScreen();
	initializeNavigation();
	initializeScrollEffects();
	initializeAppFilter();
	initializeCounterAnimation();
	initializeIntersectionObserver();
	initializeSmoothScrolling();
	initializeParallaxEffects();
	initializeHoverEffects();
	initializeMobileMenu();
	initializeLazyLoading();
	initializePerformanceMonitoring();
	initializeViewportAnimations();
	initializePolicyPage();
	initializeScrollIndicator();
	initializeAppImageFallbacks();
});

// Loading Screen Animation
function initializeLoadingScreen() {
	const loadingScreen = document.querySelector('.loading-screen');
	const body = document.body;
	
	// Show loading screen for minimum 1.5 seconds for better UX
	setTimeout(() => {
		if (loadingScreen) {
			loadingScreen.classList.add('fade-out');
			body.classList.remove('loading');
			
			// Remove loading screen from DOM after transition
			setTimeout(() => {
				loadingScreen.remove();
			}, 500);
		}
	}, 1500);
}

// Enhanced Navigation with Scroll Effects
function initializeNavigation() {
	const navbar = document.querySelector('.navbar');
	const navLinks = document.querySelectorAll('.nav-link');
	const navToggle = document.querySelector('.nav-toggle');
	const navMenu = document.querySelector('.nav-menu');
	
	// Navbar scroll effect
	let lastScrollY = 0;
	let ticking = false;
	
	function updateNavbar() {
		const scrollY = window.scrollY;
		
		if (scrollY > 50) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
		
		lastScrollY = scrollY;
		ticking = false;
	}
	
	function requestNavbarUpdate() {
		if (!ticking) {
			requestAnimationFrame(updateNavbar);
			ticking = true;
		}
	}
	
	window.addEventListener('scroll', requestNavbarUpdate);
	
	// Active link highlighting
	function setActiveLink() {
		const sections = document.querySelectorAll('section[id]');
		const scrollPos = window.scrollY + 100;
		
		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute('id');
			
			if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
				navLinks.forEach(link => {
					link.classList.remove('active');
					if (link.getAttribute('href') === `#${sectionId}`) {
						link.classList.add('active');
					}
				});
			}
		});
	}
	
	window.addEventListener('scroll', setActiveLink);
}

// Scroll-triggered Animations
function initializeScrollEffects() {
	const heroTitle = document.querySelector('.hero-title');
	const heroSubtitle = document.querySelector('.hero-subtitle');
	const heroCTA = document.querySelector('.hero-cta');
	
	// Animate hero elements on load
	if (heroTitle) {
		setTimeout(() => {
			heroTitle.style.opacity = '1';
			heroTitle.style.transform = 'translateY(0)';
		}, 500);
	}
	
	if (heroSubtitle) {
		setTimeout(() => {
			heroSubtitle.classList.add('fade-in-up');
		}, 800);
	}
	
	if (heroCTA) {
		setTimeout(() => {
			heroCTA.classList.add('fade-in-up');
		}, 1100);
	}
}

// App Category Filter System - Enhanced with flicker prevention
let filterInitialized = false;

function initializeAppFilter() {
	// Prevent multiple initializations
	if (filterInitialized) {
		console.log('🔄 Filter already initialized, skipping...');
		return;
	}
	
	console.log('🎯 Initializing App Filter System...');
	
	// Use a more robust selector approach
	const filterContainer = document.querySelector('.category-filter');
	const appsGrid = document.querySelector('.apps-grid');
	
	if (!filterContainer || !appsGrid) {
		console.warn('⚠️ Filter container or apps grid not found');
		return;
	}
	
	const filterBtns = filterContainer.querySelectorAll('.filter-btn');
	const appCards = appsGrid.querySelectorAll('.app-card');
	
	console.log('✅ Found:', filterBtns.length, 'filter buttons,', appCards.length, 'app cards');
	
	if (filterBtns.length === 0 || appCards.length === 0) {
		console.warn('⚠️ No filter buttons or app cards found');
		return;
	}
	
	// Log categories for debugging
	console.log('📊 Available categories:');
	filterBtns.forEach((btn, i) => {
		const category = btn.getAttribute('data-category');
		console.log(`  ${i + 1}. ${category} - "${btn.textContent.trim()}"`);
	});
	
	console.log('📱 App cards:');
	appCards.forEach((card, i) => {
		const category = card.getAttribute('data-category');
		const title = card.querySelector('.app-title')?.textContent || 'Unknown';
		console.log(`  ${i + 1}. ${category} - "${title}"`);
	});
	
	// Add click event listeners with improved error handling
	filterBtns.forEach((btn, index) => {
		// Remove any existing listeners
		btn.removeEventListener('click', handleFilterClick);
		
		// Add new listener
		btn.addEventListener('click', handleFilterClick, { passive: false });
		
		// Mark as initialized
		btn.setAttribute('data-filter-initialized', 'true');
		
		console.log(`🔗 Added click listener to button ${index + 1}: ${btn.getAttribute('data-category')}`);
	});
	
	function handleFilterClick(e) {
		e.preventDefault();
		e.stopPropagation();
		
		const clickedBtn = e.currentTarget;
		const category = clickedBtn.getAttribute('data-category');
		
		// Prevent rapid clicking and multiple filter operations
		if (clickedBtn.disabled || clickedBtn.classList.contains('filtering') || appsGrid.classList.contains('filtering')) {
			return;
		}
		
		console.log('🖱️ Filter button clicked:', category);
		
		// Mark grid as filtering to prevent overlapping operations
		appsGrid.classList.add('filtering');
		
		// Disable all buttons temporarily to prevent rapid clicks
		filterBtns.forEach(btn => {
			btn.classList.add('filtering');
			btn.style.pointerEvents = 'none';
		});
		
		// Update active states
		filterBtns.forEach(btn => {
			btn.classList.remove('active');
			btn.setAttribute('aria-pressed', 'false');
		});
		
		clickedBtn.classList.add('active');
		clickedBtn.setAttribute('aria-pressed', 'true');
		
		// Filter and animate cards
		filterAppCards(category, appCards);
		
		// Re-enable buttons after animation
		setTimeout(() => {
			filterBtns.forEach(btn => {
				btn.classList.remove('filtering');
				btn.style.pointerEvents = '';
			});
			appsGrid.classList.remove('filtering');
		}, 600); // Wait for animations to complete
	}
	
	// Set initial state
	const activeBtn = filterContainer.querySelector('.filter-btn.active');
	if (activeBtn) {
		activeBtn.setAttribute('aria-pressed', 'true');
	}
	
	// Add keyboard support
	filterBtns.forEach(btn => {
		btn.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				btn.click();
			}
		});
	});
	
	// Mark as initialized
	filterInitialized = true;
	console.log('✅ App filter initialization complete!');
	
	// Test if the filter is working immediately
	setTimeout(() => {
		console.log('🧪 Testing filter functionality...');
		const testBtn = filterContainer.querySelector('.filter-btn[data-category="puzzle"]');
		if (testBtn) {
			console.log('🎯 Found puzzle filter button, testing click...');
			// Simulate a click programmatically for testing
			// testBtn.click(); // Uncomment this line to auto-test
		}
	}, 100);
}

// Separate function for filtering cards with better animation
function filterAppCards(category, appCards) {
	console.log('🔄 Filtering apps for category:', category);
	
	let visibleCount = 0;
	
	// Single pass: update all cards simultaneously
	appCards.forEach((card, index) => {
		const cardCategory = card.getAttribute('data-category');
		const shouldShow = category === 'all' || cardCategory === category;
		
		if (shouldShow) {
			showAppCard(card, index * 30); // Stagger show animations
			visibleCount++;
		} else {
			hideAppCard(card);
		}
	});
	
	console.log(`👁️ Showing ${visibleCount} of ${appCards.length} apps`);
}

// Improved card show animation - no flicker
function showAppCard(card, delay = 0) {
	// Clear any existing timeouts to prevent conflicts
	if (card.hideTimeout) {
		clearTimeout(card.hideTimeout);
		card.hideTimeout = null;
	}
	
	// Immediately prepare the card for display
	card.style.display = 'block';
	card.classList.remove('hidden');
	
	// Use a simple, smooth animation
	setTimeout(() => {
		card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
		card.style.opacity = '1';
		card.style.transform = 'translateY(0) scale(1)';
	}, delay);
}

// Improved card hide animation - no flicker
function hideAppCard(card) {
	// Clear any existing show timeouts
	if (card.showTimeout) {
		clearTimeout(card.showTimeout);
		card.showTimeout = null;
	}
	
	// Quick, smooth hide animation
	card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
	card.style.opacity = '0';
	card.style.transform = 'translateY(-10px) scale(0.95)';
	
	// Hide the card after animation completes
	card.hideTimeout = setTimeout(() => {
		card.style.display = 'none';
		card.classList.add('hidden');
		card.hideTimeout = null;
	}, 200); // Match transition duration
}

// Animated Counter for Statistics
function initializeCounterAnimation() {
	const counters = document.querySelectorAll('.stat-number');
	let hasAnimated = false;
	
	function animateCounters() {
		if (hasAnimated) return;
		
		counters.forEach(counter => {
			const target = parseInt(counter.getAttribute('data-count'));
			const duration = 2000; // 2 seconds
			const increment = target / (duration / 16); // 60fps
			let current = 0;
			
			const timer = setInterval(() => {
				current += increment;
				if (current >= target) {
					current = target;
					clearInterval(timer);
				}
				
				// Format number with commas for large numbers
				const formattedNumber = Math.floor(current).toLocaleString();
				counter.textContent = formattedNumber + (target >= 1000 ? '+' : '');
			}, 16);
		});
		
		hasAnimated = true;
	}
	
	// Trigger animation when stats section is visible
	const statsSection = document.querySelector('.about-stats');
	if (statsSection) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateCounters();
				}
			});
		}, { threshold: 0.5 });
		
		observer.observe(statsSection);
	}
}

// Intersection Observer for Scroll Animations
function initializeIntersectionObserver() {
	// Use different options for mobile vs desktop
	const isMobile = window.innerWidth <= 768;
	const observerOptions = {
		threshold: isMobile ? 0.05 : 0.1, // Less aggressive on mobile
		rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px' // Smaller margin on mobile
	};
	
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animated');
				
				// Stagger animation for grid items
				if (entry.target.classList.contains('app-card')) {
					const cards = Array.from(document.querySelectorAll('.app-card'));
					const index = cards.indexOf(entry.target);
					entry.target.style.animationDelay = `${index * 0.1}s`;
				}
			}
		});
	}, observerOptions);
	
	// Observe elements for animation
	const animateElements = document.querySelectorAll('.app-card, .about-card, .section-header, .stat-item');
	animateElements.forEach(el => {
		el.classList.add('animate-on-scroll');
		observer.observe(el);
	});
}

// Smooth Scrolling for Navigation
function initializeSmoothScrolling() {
	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			
			if (target) {
				const isMobile = window.innerWidth <= 768;
				const offsetTop = target.offsetTop - (isMobile ? 100 : 80); // More space on mobile
				
				// Use different scroll behavior for mobile
				if (isMobile) {
					// Gentler scroll on mobile to prevent overshooting
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
						inline: 'nearest'
					});
				} else {
					window.scrollTo({
						top: offsetTop,
						behavior: 'smooth'
					});
				}
			}
		});
	});
}

// Global scroll function for buttons
function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);
	if (section) {
		const isMobile = window.innerWidth <= 768;
		
		if (isMobile) {
			// Gentler scroll on mobile
			section.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			});
		} else {
			const offsetTop = section.offsetTop - 80;
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			});
		}
	}
}

// Parallax Effects for Background Elements
function initializeParallaxEffects() {
	const shapes = document.querySelectorAll('.shape');
	const phoneModel = document.querySelector('.phone-mockup');
	
	let ticking = false;
	
	function updateParallax() {
		const scrolled = window.pageYOffset;
		const rate = scrolled * -0.5;
		const rate2 = scrolled * -0.3;
		
		// Animate floating shapes
		shapes.forEach((shape, index) => {
			const speed = 0.5 + (index * 0.1);
			shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
		});
		
		// Animate phone mockup
		if (phoneModel) {
			phoneModel.style.transform = `translateY(${rate2}px)`;
		}
		
		ticking = false;
	}
	
	function requestParallaxUpdate() {
		if (!ticking) {
			requestAnimationFrame(updateParallax);
			ticking = true;
		}
	}
	
	window.addEventListener('scroll', requestParallaxUpdate);
}

// Enhanced Hover Effects
function initializeHoverEffects() {
	// App card hover effects
	const appCards = document.querySelectorAll('.app-card');
	
	appCards.forEach(card => {
		card.addEventListener('mouseenter', function() {
			// Add glow effect
			this.style.boxShadow = '0 25px 50px -12px rgba(99, 102, 241, 0.25)';
		});
		
		card.addEventListener('mouseleave', function() {
			// Remove glow effect
			this.style.boxShadow = '';
		});
	});
	
	// Button ripple effect
	const buttons = document.querySelectorAll('.cta-button, .filter-btn');
	
	buttons.forEach(button => {
		button.addEventListener('click', function(e) {
			const ripple = document.createElement('span');
			const rect = this.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;
			
			ripple.style.width = ripple.style.height = size + 'px';
			ripple.style.left = x + 'px';
			ripple.style.top = y + 'px';
			ripple.classList.add('ripple');
			
			this.appendChild(ripple);
			
			setTimeout(() => {
				ripple.remove();
			}, 600);
		});
	});
}

// Enhanced mobile menu functionality
function initializeMobileMenu() {
	console.log('🔧 Initializing mobile menu...');
	
	const navToggle = document.querySelector('.nav-toggle');
	const navMenu = document.querySelector('.nav-menu');
	const navLinks = document.querySelectorAll('.nav-link');
	
	console.log('📱 Mobile menu elements found:', {
		navToggle: !!navToggle,
		navMenu: !!navMenu,
		navLinksCount: navLinks.length
	});
	
	if (navToggle && navMenu) {
		console.log('✅ Mobile menu setup successful');
		
		navToggle.addEventListener('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			
			const isActive = navMenu.classList.contains('active');
			console.log('🔄 Toggle clicked, current state:', isActive ? 'open' : 'closed');
			
			if (isActive) {
				closeMobileMenu();
			} else {
				openMobileMenu();
			}
		});
		
		// Close menu when clicking on nav links
		navLinks.forEach((link, index) => {
			console.log(`🔗 Setting up link ${index + 1}:`, link.textContent.trim());
			link.addEventListener('click', () => {
				console.log('🔗 Nav link clicked:', link.textContent.trim());
				closeMobileMenu();
			});
		});
		
		// Close menu when clicking outside
		document.addEventListener('click', function(e) {
			if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
				closeMobileMenu();
			}
		});
		
		// Close menu on escape key
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape' && navMenu.classList.contains('active')) {
				console.log('⌨️ Escape key pressed, closing menu');
				closeMobileMenu();
			}
		});
	} else {
		console.error('❌ Mobile menu elements not found!', { navToggle, navMenu });
	}
	
	function openMobileMenu() {
		console.log('📱 Opening mobile menu');
		navMenu.classList.add('active');
		navToggle.classList.add('active');
		
		// Animate menu items with a stagger effect
		navLinks.forEach((link, index) => {
			link.style.opacity = '0';
			link.style.transform = 'translateY(-10px)';
			setTimeout(() => {
				link.style.transition = 'all 0.3s ease';
				link.style.opacity = '1';
				link.style.transform = 'translateY(0)';
			}, index * 80);
		});
		
		console.log('✅ Mobile menu opened');
	}
	
	function closeMobileMenu() {
		console.log('📱 Closing mobile menu');
		navMenu.classList.remove('active');
		navToggle.classList.remove('active');
		
		// Reset nav link styles
		navLinks.forEach(link => {
			link.style.transition = '';
			link.style.opacity = '';
			link.style.transform = '';
		});
		
		console.log('✅ Mobile menu closed');
	}
}

// Lazy loading for images
function initializeLazyLoading() {
	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.dataset.src || img.src;
				img.classList.remove('lazy');
				img.classList.add('loaded');
				observer.unobserve(img);
				
				// Add fade-in animation
				img.style.opacity = '0';
				img.style.transition = 'opacity 0.3s ease';
				setTimeout(() => {
					img.style.opacity = '1';
				}, 100);
			}
		});
	});

	document.querySelectorAll('img[loading="lazy"]').forEach(img => {
		imageObserver.observe(img);
	});
}

// Performance monitoring
function initializePerformanceMonitoring() {
	// Monitor page load performance
	window.addEventListener('load', function() {
		setTimeout(() => {
			if ('performance' in window) {
				const perfData = performance.getEntriesByType('navigation')[0];
				console.log('Page Load Performance:', {
					'DOM Content Loaded': Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
					'Load Complete': Math.round(perfData.loadEventEnd - perfData.loadEventStart),
					'Total Load Time': Math.round(perfData.loadEventEnd - perfData.navigationStart)
				});
			}
		}, 0);
	});
}

// Add intersection observer for performance
function initializeViewportAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -10% 0px'
	};

	const viewportObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-viewport');
				
				// Add staggered animation for child elements
				const children = entry.target.querySelectorAll('.app-card, .about-card, .stat-item');
				children.forEach((child, index) => {
					setTimeout(() => {
						child.classList.add('animate-in');
					}, index * 150);
				});
			}
		});
	}, observerOptions);

	// Observe sections for viewport animations
	document.querySelectorAll('section').forEach(section => {
		viewportObserver.observe(section);
	});
}

// Add smooth reveal animations
const revealStyles = `
.in-viewport {
	animation: revealSection 0.8s ease forwards;
}

@keyframes revealSection {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-in {
	animation: slideInUp 0.6s ease forwards;
}

@keyframes slideInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
`;

// Add reveal styles to head
const revealStyleSheet = document.createElement('style');
revealStyleSheet.textContent = revealStyles;
document.head.appendChild(revealStyleSheet);

// Utility Functions
function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

function throttle(func, limit) {
	let inThrottle;
	return function() {
		const args = arguments;
		const context = this;
		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit);
		}
	}
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
	.ripple {
		position: absolute;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.6);
		transform: scale(0);
		animation: ripple-animation 0.6s linear;
		pointer-events: none;
	}
	
	@keyframes ripple-animation {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}
	
	button, .filter-btn {
		position: relative;
		overflow: hidden;
	}
`;
document.head.appendChild(style);

// Performance optimization for mobile
if (window.innerWidth <= 768) {
	// Reduce animation complexity on mobile
	document.body.classList.add('mobile-optimized');
	
	// Disable parallax on mobile for better performance
	const parallaxElements = document.querySelectorAll('.floating-shapes');
	parallaxElements.forEach(el => {
		el.style.transform = 'none';
	});
}

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
	// Allow keyboard navigation
	if (e.key === 'Tab') {
		document.body.classList.add('keyboard-navigation');
	}
});

document.addEventListener('mousedown', function() {
	document.body.classList.remove('keyboard-navigation');
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
	img.addEventListener('error', function() {
		this.style.display = 'none';
		console.warn('Failed to load image:', this.src);
	});
});

// Preload critical images
function preloadImages() {
	const criticalImages = [
		'images/apps/2048.png',
		'images/apps/Brain Puzzle Quest.png',
		'images/apps/slidingPuzzle.png'
	];
	
	criticalImages.forEach(src => {
		const img = new Image();
		img.src = src;
	});
}

preloadImages();

// Modern Image Gallery (if needed)
function initializeGallery() {
	const galleryLinks = document.querySelectorAll('.gallery a');
	
	galleryLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			if (this.href.match(/\.(jpg|gif|png|mp4)$/)) {
				e.preventDefault();
				// Add your gallery modal logic here if needed
				console.log('Gallery image clicked:', this.href);
			}
		});
	});
}

// Initialize gallery if gallery exists
if (document.querySelector('.gallery')) {
	initializeGallery();
}

// Add scroll-based navbar background blur effect
function initializeAdvancedScrollEffects() {
	const navbar = document.querySelector('.navbar');
	let lastScrollY = window.scrollY;
	
	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY;
		const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
		
		// Enhanced navbar effect based on scroll direction
		if (scrollY > 100) {
			navbar.style.background = `rgba(255, 255, 255, ${Math.min(0.95, 0.7 + scrollY / 1000)})`;
			navbar.style.backdropFilter = `blur(${Math.min(20, 10 + scrollY / 100)}px)`;
		} else {
			navbar.style.background = 'rgba(255, 255, 255, 0.95)';
			navbar.style.backdropFilter = 'blur(10px)';
		}
		
		// Hide/show navbar on scroll
		if (scrollDirection === 'down' && scrollY > 300) {
			navbar.style.transform = 'translateY(-100%)';
		} else {
			navbar.style.transform = 'translateY(0)';
		}
		
		lastScrollY = scrollY;
	});
}

// Initialize advanced scroll effects
initializeAdvancedScrollEffects();

// Add touch gesture support for mobile
function initializeTouchGestures() {
	let startY = 0;
	let endY = 0;
	
	document.addEventListener('touchstart', e => {
		startY = e.touches[0].clientY;
	}, { passive: true });
	
	document.addEventListener('touchmove', e => {
		endY = e.touches[0].clientY;
	}, { passive: true });
	
	document.addEventListener('touchend', () => {
		const swipeDistance = startY - endY;
		const minSwipeDistance = 50;
		
		if (Math.abs(swipeDistance) > minSwipeDistance) {
			if (swipeDistance > 0) {
				// Swipe up - scroll to next section
				scrollToNextSection();
			} else {
				// Swipe down - scroll to previous section
				scrollToPreviousSection();
			}
		}
	}, { passive: true });
}

function scrollToNextSection() {
	const sections = document.querySelectorAll('section[id]');
	const currentScrollY = window.scrollY + window.innerHeight / 2;
	
	for (let i = 0; i < sections.length; i++) {
		if (sections[i].offsetTop > currentScrollY) {
			sections[i].scrollIntoView({ behavior: 'smooth' });
			break;
		}
	}
}

function scrollToPreviousSection() {
	const sections = document.querySelectorAll('section[id]');
	const currentScrollY = window.scrollY + window.innerHeight / 2;
	
	for (let i = sections.length - 1; i >= 0; i--) {
		if (sections[i].offsetTop < currentScrollY - 100) {
			sections[i].scrollIntoView({ behavior: 'smooth' });
			break;
		}
	}
}

// Initialize touch gestures on mobile
if ('ontouchstart' in window) {
	initializeTouchGestures();
}

// Console welcome message
console.log(`
🚀 Welcome to Magiban Technologies Pvt Ltd!
💻 Modern website built with vanilla JavaScript
✨ Featuring smooth animations and interactive elements
📱 Optimized for all devices

Visit our apps: 
- Classic 2048 Puzzle Game
- Brain Puzzle Quest  
- Sliding Puzzle Challenge
- Sudoku Master
- And more!
`);

// Website analytics (placeholder)
function trackPageView() {
	// Add your analytics tracking code here
	console.log('Page view tracked:', window.location.pathname);
}

// Track initial page view
trackPageView();

// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log('Section viewed:', entry.target.id);
			// Add analytics tracking for section views
		}
	});
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
	sectionObserver.observe(section);
});

// Backup filter initialization in case of timing issues
window.addEventListener('load', function() {
	// Double-check filter initialization after page fully loads
	setTimeout(() => {
		// Only run backup if not already initialized
		if (!filterInitialized) {
			const filterBtns = document.querySelectorAll('.filter-btn');
			const appCards = document.querySelectorAll('.app-card');
			
			console.log('🔄 Backup filter check: Found', filterBtns.length, 'buttons,', appCards.length, 'cards');
			
			if (filterBtns.length > 0 && appCards.length > 0) {
				console.log('🔧 Running backup filter initialization');
				initializeAppFilter();
			} else {
				console.warn('⚠️ Backup check: Missing filter elements');
			}
		} else {
			console.log('✅ Filter already initialized, skipping backup');
		}
	}, 500);
});

// Manual filter function that can be called from console for debugging
function manualFilter(category) {
	console.log('🔧 Manual filter triggered:', category);
	
	const filterBtns = document.querySelectorAll('.filter-btn');
	const appCards = document.querySelectorAll('.app-card');
	
	if (filterBtns.length === 0 || appCards.length === 0) {
		console.error('❌ Manual filter failed: No buttons or cards found');
		return;
	}
	
	// Update active button
	filterBtns.forEach(btn => {
		btn.classList.remove('active');
		if (btn.getAttribute('data-category') === category) {
			btn.classList.add('active');
			console.log('✅ Set active button:', btn.textContent.trim());
		}
	});
	
	// Filter cards using the improved function
	filterAppCards(category, appCards);
}

// Debug function to check filter setup
function debugFilters() {
	const filterBtns = document.querySelectorAll('.filter-btn');
	const appCards = document.querySelectorAll('.app-card');
	
	console.log('🔍 === FILTER DEBUG ===');
	console.log('📊 Filter buttons found:', filterBtns.length);
	filterBtns.forEach((btn, i) => {
		const category = btn.getAttribute('data-category');
		const text = btn.textContent.trim();
		const hasListener = btn.hasAttribute('data-filter-initialized');
		console.log(`  ${i + 1}. Category: "${category}", Text: "${text}", Initialized: ${hasListener}`);
	});
	
	console.log('📱 App cards found:', appCards.length);
	appCards.forEach((card, i) => {
		const category = card.getAttribute('data-category');
		const title = card.querySelector('.app-title')?.textContent || 'No title';
		const isVisible = card.style.display !== 'none' && !card.classList.contains('hidden');
		console.log(`  ${i + 1}. Category: "${category}", Title: "${title}", Visible: ${isVisible}`);
	});
	
	console.log('🔍 ===================');
	
	// Test manual filter
	console.log('🧪 Testing manual filter with "puzzle" category...');
	setTimeout(() => manualFilter('puzzle'), 1000);
}

// Privacy Policy Page Enhancements
function initializePolicyPage() {
    if (!document.querySelector('.policy-section')) return;
    
    console.log('🔒 Initializing Privacy Policy page...');
    
    // Initialize table of contents highlighting
    initializeTOCHighlighting();
    
    // Initialize smooth scroll for TOC links
    initializeTOCSmoothScroll();
    
    console.log('✅ Privacy Policy page initialized');
}

// Table of contents active highlighting
function initializeTOCHighlighting() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    const sections = document.querySelectorAll('.policy-section-block');
    
    if (tocLinks.length === 0 || sections.length === 0) return;
    
    const observerOptions = {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active class from all TOC links
                tocLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's TOC link
                const activeLink = document.querySelector(`.toc-list a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Smooth scroll for table of contents
function initializeTOCSmoothScroll() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update URL without causing scroll
                if (history.pushState) {
                    history.pushState(null, null, `#${targetId}`);
                }
            }
        });
    });
}

// Enhanced scroll indicator functionality
function initializeScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (!scrollIndicator) return;
    
    // Make scroll indicator clickable
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about') || document.getElementById('policy-content');
        if (aboutSection) {
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
    
    // Hide scroll indicator when user scrolls past hero section
    let lastScrollY = window.scrollY;
    
    function updateScrollIndicator() {
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight * 0.8; // Approximate hero height
        
        if (scrollY > heroHeight) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '0.8';
            scrollIndicator.style.pointerEvents = 'auto';
        }
        
        lastScrollY = scrollY;
    }
    
    // Throttled scroll event
    let ticking = false;
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollIndicator);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16); // ~60fps
        }
    }
    
    window.addEventListener('scroll', requestScrollUpdate);
    
    console.log('✅ Scroll indicator initialized');
}

// App Image Fallback System
function initializeAppImageFallbacks() {
    console.log('🖼️ Initializing app image fallbacks...');
    
    const appImages = document.querySelectorAll('.app-image img');
    
    // App icon configurations for fallbacks
    const appConfigs = {
        'fitness tracker': {
            initials: 'FT',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            bgColor: '#10b981'
        },
        'habit tracker': {
            initials: 'HB',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            bgColor: '#f59e0b'
        },
        '2048': {
            initials: '20',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            bgColor: '#6366f1'
        },
        'Brain Puzzle Quest': {
            initials: 'BP',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            bgColor: '#8b5cf6'
        },
        'slidingPuzzle': {
            initials: 'SP',
            gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
            bgColor: '#06b6d4'
        },
        'sudoku': {
            initials: 'SU',
            gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            bgColor: '#ef4444'
        },
        'bombhunt': {
            initials: 'BH',
            gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            bgColor: '#f97316'
        },
        'mystudentApp': {
            initials: 'MS',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            bgColor: '#3b82f6'
        }
    };
    
    appImages.forEach(img => {
        // Add loading state
        img.style.transition = 'opacity 0.3s ease';
        
        // Handle successful load
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            console.log(`✅ Successfully loaded: ${this.src}`);
        });
        
        // Create fallback for missing or broken images
        img.addEventListener('error', function() {
            console.warn(`❌ Failed to load image: ${this.src}`);
            createFallbackIcon(this);
        });
        
        // Check if image loads successfully for existing images
        if (img.complete && img.naturalHeight === 0) {
            createFallbackIcon(img);
        }
    });
    
    function createFallbackIcon(img) {
        const src = img.src;
        let appName = '';
        let config = null;
        
        // Determine app type from src
        for (const [key, value] of Object.entries(appConfigs)) {
            if (src.includes(key)) {
                appName = key;
                config = value;
                break;
            }
        }
        
        if (!config) {
            // Default fallback for unknown apps
            const alt = img.alt || 'App';
            const words = alt.split(' ');
            const initials = words.length > 1 
                ? words[0][0] + words[1][0] 
                : alt.substring(0, 2);
            
            config = {
                initials: initials.toUpperCase(),
                gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                bgColor: '#6366f1'
            };
        }
        
        // Create SVG fallback icon
        const fallbackSvg = `
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradient-${Date.now()}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:${config.bgColor};stop-opacity:1" />
                        <stop offset="100%" style="stop-color:${config.bgColor}CC;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="200" height="200" rx="40" ry="40" fill="url(#gradient-${Date.now()})" />
                <text x="100" y="120" font-family="Inter, sans-serif" font-size="48" font-weight="600" 
                      text-anchor="middle" fill="white" dominant-baseline="middle">
                    ${config.initials}
                </text>
            </svg>
        `;
        
        // Convert SVG to data URL
        const svgBlob = new Blob([fallbackSvg], { type: 'image/svg+xml' });
        const svgUrl = URL.createObjectURL(svgBlob);
        
        // Replace the broken image
        img.src = svgUrl;
        img.style.background = config.gradient;
        img.style.borderRadius = '1rem';
        img.style.opacity = '1';
        
        // Clean up the blob URL after a delay
        setTimeout(() => {
            URL.revokeObjectURL(svgUrl);
        }, 1000);
        
        console.log(`✅ Created fallback icon for ${appName || img.alt}`);
    }
    
    console.log('✅ App image fallbacks initialized');
}