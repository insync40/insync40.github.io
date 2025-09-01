// Initialize challenge quiz functionality
document.addEventListener("DOMContentLoaded", () => {
	// ===== GLOBAL VARIABLES =====
	// DOM elements
	const allSteps = document.querySelectorAll("[data-multistep-form]");
	const startStep = document.querySelector('[data-multistep-form="start"]');
	const nextButtons = document.querySelectorAll(
		'[data-multistep-form="next-btn"]'
	);
	const backButtons = document.querySelectorAll(
		'[data-multistep-form="back-btn"]'
	);
	const skipButtons = document.querySelectorAll(
		'[data-multistep-form="skip-btn"]'
	);

	// Countries data for select dropdowns
	const countries = [
		"Afghanistan",
		"Albania",
		"Algeria",
		"Andorra",
		"Angola",
		"Antigua and Barbuda",
		"Argentina",
		"Armenia",
		"Australia",
		"Austria",
		"Azerbaijan",
		"Bahamas",
		"Bahrain",
		"Bangladesh",
		"Barbados",
		"Belarus",
		"Belgium",
		"Belize",
		"Benin",
		"Bhutan",
		"Bolivia",
		"Bosnia and Herzegovina",
		"Botswana",
		"Brazil",
		"Brunei",
		"Bulgaria",
		"Burkina Faso",
		"Burundi",
		"Cabo Verde",
		"Cambodia",
		"Cameroon",
		"Canada",
		"Central African Republic",
		"Chad",
		"Chile",
		"China",
		"Colombia",
		"Comoros",
		"Congo (Brazzaville)",
		"Costa Rica",
		"Côte d'Ivoire",
		"Croatia",
		"Cuba",
		"Cyprus",
		"Czechia",
		"Democratic Republic of the Congo",
		"Denmark",
		"Djibouti",
		"Dominica",
		"Dominican Republic",
		"Ecuador",
		"Egypt",
		"El Salvador",
		"Equatorial Guinea",
		"Eritrea",
		"Estonia",
		"Eswatini",
		"Ethiopia",
		"Fiji",
		"Finland",
		"France",
		"Gabon",
		"Gambia",
		"Georgia",
		"Germany",
		"Ghana",
		"Greece",
		"Grenada",
		"Guatemala",
		"Guinea",
		"Guinea-Bissau",
		"Guyana",
		"Haiti",
		"Honduras",
		"Hungary",
		"Iceland",
		"India",
		"Indonesia",
		"Iran",
		"Iraq",
		"Ireland",
		"Israel",
		"Italy",
		"Jamaica",
		"Japan",
		"Jordan",
		"Kazakhstan",
		"Kenya",
		"Kiribati",
		"Kuwait",
		"Kyrgyzstan",
		"Laos",
		"Latvia",
		"Lebanon",
		"Lesotho",
		"Liberia",
		"Libya",
		"Liechtenstein",
		"Lithuania",
		"Luxembourg",
		"Madagascar",
		"Malawi",
		"Malaysia",
		"Maldives",
		"Mali",
		"Malta",
		"Marshall Islands",
		"Mauritania",
		"Mauritius",
		"Mexico",
		"Micronesia",
		"Moldova",
		"Monaco",
		"Mongolia",
		"Montenegro",
		"Morocco",
		"Mozambique",
		"Myanmar",
		"Namibia",
		"Nauru",
		"Nepal",
		"Netherlands",
		"New Zealand",
		"Nicaragua",
		"Niger",
		"Nigeria",
		"North Korea",
		"North Macedonia",
		"Norway",
		"Oman",
		"Pakistan",
		"Palau",
		"Palestine State",
		"Panama",
		"Papua New Guinea",
		"Paraguay",
		"Peru",
		"Philippines",
		"Poland",
		"Portugal",
		"Qatar",
		"Romania",
		"Russia",
		"Rwanda",
		"Saint Kitts and Nevis",
		"Saint Lucia",
		"Saint Vincent and the Grenadines",
		"Samoa",
		"San Marino",
		"São Tomé and Príncipe",
		"Saudi Arabia",
		"Senegal",
		"Serbia",
		"Seychelles",
		"Sierra Leone",
		"Singapore",
		"Slovakia",
		"Slovenia",
		"Solomon Islands",
		"Somalia",
		"South Africa",
		"South Korea",
		"South Sudan",
		"Spain",
		"Sri Lanka",
		"Sudan",
		"Suriname",
		"Sweden",
		"Switzerland",
		"Syria",
		"Taiwan",
		"Tajikistan",
		"Tanzania",
		"Thailand",
		"Timor-Leste",
		"Togo",
		"Tonga",
		"Trinidad and Tobago",
		"Tunisia",
		"Turkey",
		"Turkmenistan",
		"Tuvalu",
		"Uganda",
		"Ukraine",
		"United Arab Emirates",
		"United Kingdom",
		"United States of America",
		"Uruguay",
		"Uzbekistan",
		"Vanuatu",
		"Vatican City",
		"Venezuela",
		"Vietnam",
		"Yemen",
		"Zambia",
		"Zimbabwe",
	];
	const industryMasterList = [
		"Accounting",
		"Airlines / Aviation",
		"Alternative Dispute Resolution",
		"Alternative Medicine",
		"Animation",
		"Apparel & Fashion",
		"Architecture & Planning",
		"Arts & Crafts",
		"Automotive",
		"Aviation & Aerospace",
		"Banking",
		"Biotechnology",
		"Broadcast Media",
		"Building Materials",
		"Business Supplies & Equipment",
		"Capital Markets",
		"Chemicals",
		"Civic & Social Organization",
		"Civil Engineering",
		"Commercial Real Estate",
		"Computer & Network Security",
		"Computer Games",
		"Computer Hardware",
		"Computer Networking",
		"Computer Software",
		"Construction",
		"Consumer Electronics",
		"Consumer Goods",
		"Consumer Services",
		"Cosmetics",
		"Dairy",
		"Defense & Space",
		"Design",
		"Education Management",
		"E-Learning",
		"Electrical / Electronic Manufacturing",
		"Entertainment",
		"Environmental Services",
		"Events Services",
		"Executive Office",
		"Facilities Services",
		"Farming",
		"Financial Services",
		"Fine Art",
		"Fishery",
		"Food & Beverages",
		"Food Production",
		"Fund-Raising",
		"Furniture",
		"Gambling & Casinos",
		"Glass, Ceramics & Concrete",
		"Government Administration",
		"Government Relations",
		"Graphic Design",
		"Health, Wellness & Fitness",
		"Higher Education",
		"Hospital & Health Care",
		"Hospitality",
		"Human Resources",
		"Import & Export",
		"Individual & Family Services",
		"Industrial Automation",
		"Information Services",
		"Information Technology & Services",
		"Insurance",
		"International Affairs",
		"International Trade & Development",
		"Internet",
		"Investment Banking",
		"Investment Management",
		"Judiciary",
		"Law Enforcement",
		"Law Practice",
		"Legal Services",
		"Legislative Office",
		"Leisure, Travel & Tourism",
		"Libraries",
		"Logistics & Supply Chain",
		"Luxury Goods & Jewelry",
		"Machinery",
		"Management Consulting",
		"Maritime",
		"Market Research",
		"Marketing & Advertising",
		"Mechanical / Industrial Engineering",
		"Media Production",
		"Medical Device",
		"Medical Practice",
		"Mental Health Care",
		"Military",
		"Mining & Metals",
		"Motion Pictures & Film",
		"Museums & Institutions",
		"Music",
		"Nanotechnology",
		"Newspapers",
		"Non-Profit Organization Management",
		"Oil & Energy",
		"Online Publishing",
		"Outsourcing / Offshoring",
		"Package / Freight Delivery",
		"Packaging & Containers",
		"Paper & Forest Products",
		"Performing Arts",
		"Pharmaceuticals",
		"Philanthropy",
		"Photography",
		"Plastics",
		"Political Organization",
		"Primary / Secondary Education",
		"Printing",
		"Professional Training & Coaching",
		"Program Development",
		"Public Policy",
		"Public Relations & Communications",
		"Public Safety",
		"Publishing",
		"Railroad Manufacture",
		"Ranching",
		"Real Estate",
		"Recreational Facilities & Services",
		"Religious Institutions",
		"Renewables & Environment",
		"Research",
		"Restaurants",
		"Retail",
		"Security & Investigations",
		"Semiconductors",
		"Shipbuilding",
		"Sporting Goods",
		"Sports",
		"Staffing & Recruiting",
		"Supermarkets",
		"Telecommunications",
		"Textiles",
		"Think Tanks",
		"Tobacco",
		"Translation & Localization",
		"Transportation / Trucking / Railroad",
		"Utilities",
		"Venture Capital & Private Equity",
		"Veterinary",
		"Warehousing",
		"Wholesale",
		"Wine & Spirits",
		"Wireless",
		"Writing & Editing",
	];

	// Step containers (filtering out UI components and buttons)
	const stepContainers = Array.from(allSteps).filter((step) => {
		const attr = step.getAttribute("data-multistep-form");
		return attr === "start" || attr.startsWith("step-");
	});

	// Track current step index
	let currentStepIndex = 0;

	// State management for locations step
	const locationState = {
		selectedCountries: new Map(), // Track selected countries by select element id
	};

	// ===== CORE UTILITY FUNCTIONS =====

	/**
	 * Validates the current step and returns if it's valid to proceed
	 * @returns {boolean} - Whether the current step is valid
	 */
	const isStepValid = () => {
		// Always return true for the start step
		if (currentStepIndex === 0) {
			return true;
		}

		const currentStep = stepContainers[currentStepIndex];

		// Delegate to step-specific validation functions
		switch (currentStepIndex) {
			case 1:
				return validateStep1(currentStep);
			case 2:
				return validateStep2(currentStep);
			case 3:
				return validateStep3(currentStep);
			case 4:
				return validateStep4(currentStep);
			case 5:
				return validateStep5(currentStep);
			default:
				return validateGenericStep(currentStep);
		}
	};

	/**
	 * Updates next button state based on validation
	 */
	const updateNextButtonState = () => {
		const isValid = isStepValid();

		// Find the next button in the current step container
		const currentStep = stepContainers[currentStepIndex];
		const currentNextBtn = currentStep.querySelector(
			'[data-multistep-form="next-btn"]'
		);

		if (currentNextBtn) {
			const clickableBtn = currentNextBtn.querySelector(".clickable_btn");
			if (clickableBtn) {
				if (isValid) {
					currentNextBtn.classList.remove("is-disabled");
					clickableBtn.disabled = false;
				} else {
					currentNextBtn.classList.add("is-disabled");
					clickableBtn.disabled = true;
				}
			}
		}
	};

	/**
	 * Navigates to a specific step
	 * @param {number} stepIndex - Index of the step to navigate to
	 */
	const goToStep = (stepIndex) => {
		// Hide all steps
		stepContainers.forEach((step) => {
			step.style.display = "none";
		});

		// Show the target step
		if (stepContainers[stepIndex]) {
			stepContainers[stepIndex].style.display = "flex";
			currentStepIndex = stepIndex;

			// Update the next button state for the new step
			updateNextButtonState();
		}
	};

	// ===== STEP-SPECIFIC VALIDATION FUNCTIONS =====

	/**
	 * Validates Step 1 (Freeform specification)
	 * @param {Element} step - The step element to validate
	 * @returns {boolean} - Whether the step is valid
	 */
	const validateStep1 = (step) => {
		const textarea = step.querySelector(
			'#freeform_spec, textarea[name="freeform_spec"]'
		);
		// Check for minimum 10 non-whitespace characters
		if (textarea) {
			const nonWhitespaceCount = textarea.value.replace(/\s/g, "").length;
			return nonWhitespaceCount >= 10;
		}
		return false;
	};

	/**
	 * Validates Step 2 (Location)
	 * @param {Element} step - The step element to validate
	 * @returns {boolean} - Whether the step is valid
	 */
	const validateStep2 = (step) => {
		const countrySelects = step.querySelectorAll("select");
		const cityInputs = step.querySelectorAll('input[type="text"]');

		let hasValue = false;

		// Check if any country is selected
		countrySelects.forEach((select) => {
			if (select.selectedIndex > 0) {
				hasValue = true;
			}
		});

		// Check if any city is entered
		cityInputs.forEach((input) => {
			if (input.value.trim()) {
				hasValue = true;
			}
		});

		return hasValue;
	};

	/**
	 * Validates Step 3 (Industry)
	 * @param {Element} step - The step element to validate
	 * @returns {boolean} - Whether the step is valid
	 */
	const validateStep3 = (step) => {
		const hiddenInput = step.querySelector('input[name="industry_tags"]');
		return hiddenInput && hiddenInput.value.trim() !== "";
	};

	/**
	 * Validates Step 4 (Company Size)
	 * @param {Element} step - The step element to validate
	 * @returns {boolean} - Whether the step is valid
	 */
	const validateStep4 = (step) => {
		const checkedRadios = step.querySelectorAll(
			'input[type="radio"]:checked'
		);
		return checkedRadios.length > 0;
	};

	/**
	 * Validates Step 5 (Titles & Signals)
	 * @param {Element} step - The step element to validate
	 * @returns {boolean} - Whether the step is valid
	 */
	const validateStep5 = (step) => {
		const titleInput = step.querySelector('input[name="title_filters"]');
		const checkedSignals = step.querySelectorAll(
			'input[type="radio"]:checked'
		);

		return (
			(titleInput && titleInput.value.trim()) || checkedSignals.length > 0
		);
	};

	/**
	 * Generic validation for steps without specific validation logic
	 * @param {Element} step - The step element to validate
	 * @returns {boolean} - Whether the step is valid
	 */
	const validateGenericStep = (step) => {
		// Get all input elements in the current step
		const allInputs = step.querySelectorAll(
			'input:not([type="radio"]), textarea, select'
		);
		const checkedRadios = step.querySelectorAll(
			'input[type="radio"]:checked, input[type="checkbox"]:checked'
		);

		// For steps with required fields, check if all required fields are filled
		const requiredInputs = step.querySelectorAll("[required]");
		if (requiredInputs.length > 0) {
			for (let input of requiredInputs) {
				if (input.type === "radio" || input.type === "checkbox") {
					// For radio/checkbox, check if any in the group is checked
					const name = input.name;
					const checked = step.querySelector(
						`input[name="${name}"]:checked`
					);
					if (!checked) return false;
				} else if (!input.value.trim()) {
					return false;
				}
			}
			return true;
		} else {
			// For steps without required fields, check if any input is filled
			if (allInputs.length === 0 && checkedRadios.length === 0)
				return false;

			// Check if any input has a value
			let hasFilledInput = false;

			for (let input of allInputs) {
				if (input.value.trim()) {
					hasFilledInput = true;
					break;
				}
			}

			// Check if any radio/checkbox is checked
			if (checkedRadios.length > 0) {
				hasFilledInput = true;
			}

			return hasFilledInput;
		}
	};

	/**
	 * Sets up autosuggest functionality for the title filters input in Step 5
	 */
	const setupTitleAutosuggest = () => {
		const step5 = document.querySelector('[data-multistep-form="step-5"]');
		if (!step5) return;

		const titleInput = step5.querySelector('input[name="title_filters"]');
		if (!titleInput) return;

		// Comprehensive list of common executive and leadership titles
		const titleSuggestions = [
			// C-Suite
			"CEO",
			"CFO",
			"CTO",
			"COO",
			"CMO",
			"CHRO",
			"CIO",
			"CPO",
			"CCO",
			"CDO",
			"CSO",
			// Founders
			"Founder",
			"Co-Founder",
			"Owner",
			"Managing Partner",
			"President",
			// VP Level
			"VP Sales",
			"VP Marketing",
			"VP Engineering",
			"VP Product",
			"VP Operations",
			"VP Finance",
			"VP HR",
			"VP Business Development",
			"VP Customer Success",
			// Directors
			"Director of Sales",
			"Director of Marketing",
			"Director of Engineering",
			"Director of Product",
			"Director of Operations",
			"Director of Finance",
			"Director of HR",
			"Head of Sales",
			"Head of Marketing",
			"Head of Product",
			// Managers
			"Sales Manager",
			"Marketing Manager",
			"Product Manager",
			"Engineering Manager",
			"Operations Manager",
			"Finance Manager",
			"HR Manager",
			// Other Decision-Makers
			"Partner",
			"Principal",
			"General Manager",
			"Regional Manager",
			"Board Member",
			"Investor",
			"Procurement Manager",
			"Purchasing Director",
		];

		// Create dropdown for showing suggestions
		const dropdownContainer = document.createElement("div");
		dropdownContainer.className = "title-suggestions-dropdown";
		dropdownContainer.style.display = "none";
		dropdownContainer.style.position = "absolute";
		dropdownContainer.style.zIndex = "1000";
		dropdownContainer.style.backgroundColor = "rgba(30, 30, 30, 1)";
		dropdownContainer.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
		dropdownContainer.style.maxHeight = "200px";
		dropdownContainer.style.overflowY = "auto";
		dropdownContainer.style.width = "100%";
		dropdownContainer.style.borderRadius = "8px";
		dropdownContainer.setAttribute("data-lenis-prevent", "");

		// Insert dropdown after the input wrapper
		const inputWrapper = titleInput.closest(".form_main_label_wrap");
		inputWrapper.style.position = "relative";
		inputWrapper.appendChild(dropdownContainer);

		/**
		 * Gets the current input value and cursor position
		 * @returns {Object} Object containing current term being typed and full input value
		 */
		const getCurrentInputState = () => {
			const value = titleInput.value;
			const cursorPos = titleInput.selectionStart;

			// Find the term currently being typed (before the cursor, after the last comma)
			let lastCommaBeforeCursor = value.lastIndexOf(",", cursorPos - 1);
			let currentTerm = value
				.substring(lastCommaBeforeCursor + 1, cursorPos)
				.trim();

			return { currentTerm, fullValue: value, cursorPos };
		};

		/**
		 * Filters suggestions based on current input term
		 * @param {string} term - The current term being typed
		 * @returns {Array} - Filtered list of suggestions
		 */
		const filterSuggestions = (term) => {
			term = term.toLowerCase().trim();
			if (!term) return [];

			return titleSuggestions.filter((title) =>
				title.toLowerCase().startsWith(term)
			);
			// .slice(0, 10); // Limit to 10 results for performance
		};

		/**
		 * Updates the dropdown with filtered suggestions
		 */
		const updateDropdown = () => {
			const { currentTerm, fullValue } = getCurrentInputState();
			const filteredTitles = filterSuggestions(currentTerm);

			dropdownContainer.innerHTML = "";

			if (filteredTitles.length > 0) {
				filteredTitles.forEach((title) => {
					const item = document.createElement("div");
					item.className = "title-suggestion-item";
					item.textContent = title;
					item.style.padding = "10px";
					item.style.cursor = "pointer";
					item.style.borderBottom =
						"1px solid rgba(255, 255, 255, 0.20)";

					item.addEventListener("mouseover", () => {
						item.style.backgroundColor =
							"rgba(255, 255, 255, 0.06)";
					});

					item.addEventListener("mouseout", () => {
						item.style.backgroundColor = "";
					});

					item.addEventListener("click", () => {
						selectSuggestion(title);
					});

					dropdownContainer.appendChild(item);
				});

				showDropdown();
			} else {
				closeDropdown();
			}
		};

		/**
		 * Inserts a selected suggestion into the input field
		 * @param {string} suggestion - The selected suggestion
		 */
		const selectSuggestion = (suggestion) => {
			const { fullValue, cursorPos } = getCurrentInputState();

			// Find the position to insert the suggestion
			const lastCommaBeforeCursor = fullValue.lastIndexOf(
				",",
				cursorPos - 1
			);

			// Create new value by replacing the current term with the selected suggestion
			const beforeTerm = fullValue.substring(
				0,
				lastCommaBeforeCursor + 1
			);
			const afterTerm = fullValue.substring(cursorPos);

			// Handle spacing properly around commas
			let newValue;
			if (lastCommaBeforeCursor === -1) {
				// First term
				newValue =
					suggestion +
					(afterTerm.startsWith(",")
						? afterTerm
						: afterTerm
						? ", " + afterTerm
						: "");
			} else {
				// Subsequent terms - ensure proper spacing after comma
				newValue =
					beforeTerm +
					(beforeTerm.endsWith(" ") ? "" : " ") +
					suggestion +
					(afterTerm.startsWith(",")
						? afterTerm
						: afterTerm
						? ", " + afterTerm
						: "");
			}

			titleInput.value = newValue;

			// Position cursor after the inserted suggestion
			const newCursorPos =
				(lastCommaBeforeCursor === -1 ? 0 : lastCommaBeforeCursor + 1) +
				(beforeTerm.endsWith(" ")
					? 0
					: lastCommaBeforeCursor === -1
					? 0
					: 1) +
				suggestion.length;

			titleInput.setSelectionRange(newCursorPos, newCursorPos);
			titleInput.focus();

			closeDropdown();
			updateNextButtonState();
		};

		/**
		 * Shows the dropdown
		 */
		const showDropdown = () => {
			dropdownContainer.style.display = "block";
			dropdownContainer.style.top = "100%";
			dropdownContainer.style.left = "0";
		};

		/**
		 * Closes the dropdown
		 */
		const closeDropdown = () => {
			dropdownContainer.style.display = "none";
		};

		// Event listeners
		titleInput.addEventListener("input", updateDropdown);

		titleInput.addEventListener("focus", () => {
			const { currentTerm } = getCurrentInputState();
			if (currentTerm) {
				updateDropdown();
			}
		});

		// Handle keyboard navigation
		titleInput.addEventListener("keydown", (e) => {
			const items = dropdownContainer.querySelectorAll(
				".title-suggestion-item"
			);

			if (items.length === 0) return;

			// Get currently highlighted item if any
			const highlighted = dropdownContainer.querySelector(
				".title-suggestion-item.highlighted"
			);
			let index = -1;

			if (highlighted) {
				index = Array.from(items).indexOf(highlighted);
			}

			if (e.key === "ArrowDown") {
				e.preventDefault();

				if (index < items.length - 1) {
					if (highlighted)
						highlighted.classList.remove("highlighted");
					items[index + 1].classList.add("highlighted");
					items[index + 1].scrollIntoView({ block: "nearest" });
				}
			} else if (e.key === "ArrowUp") {
				e.preventDefault();

				if (index > 0) {
					if (highlighted)
						highlighted.classList.remove("highlighted");
					items[index - 1].classList.add("highlighted");
					items[index - 1].scrollIntoView({ block: "nearest" });
				}
			} else if (e.key === "Enter" && highlighted) {
				e.preventDefault();
				selectSuggestion(highlighted.textContent);
			}
		});

		// Close dropdown when clicking outside
		document.addEventListener("click", (e) => {
			if (!inputWrapper.contains(e.target)) {
				closeDropdown();
			}
		});

		// Add CSS for highlighted item
		const style = document.createElement("style");
		style.textContent = `
      .title-suggestion-item.highlighted {
        background-color: rgba(94, 151, 235, 0.2);
      }
    `;
		document.head.appendChild(style);
	};

	// ===== STEP-SPECIFIC SETUP FUNCTIONS =====

	/**
	 * Sets up Step 1 (Freeform specification)
	 */
	/**
	 * Sets up Step 1 with character counter and cycling placeholders
	 * @returns {Object} Object with validation method
	 */
	const setupStep1 = () => {
		const step1 = stepContainers.find(
			(step) => step.getAttribute("data-multistep-form") === "step-1"
		);
		if (!step1) return;

		const textarea = step1.querySelector(
			'#freeform_spec, textarea[name="freeform_spec"]'
		);
		if (!textarea) return;

		// Set max length attribute
		textarea.setAttribute("maxlength", "280");

		// Create and add character counter element
		const inputArea = textarea.closest(".challenge_form_input_area_wrap");
		if (!inputArea) return;

		let charCounter = inputArea.querySelector(".char-counter");
		if (!charCounter) {
			charCounter = document.createElement("div");
			charCounter.className = "char-counter u-text-style-small";
			charCounter.style.textAlign = "right";
			charCounter.style.marginTop = "8px";
			charCounter.style.color = "#999";
			inputArea.appendChild(charCounter);
		}

		// Add placeholder cycling functionality
		const placeholders = [
			"Series-B SaaS companies in the US using Snowflake. Owner email & phone",
			"German e-commerce brands hiring a CFO, w/ 10+ million (EUR) revenue",
		];

		let placeholderIndex = 0;
		let placeholderInterval;

		/**
		 * Cycles to the next placeholder with a fade effect
		 */
		const cyclePlaceholder = () => {
			if (!textarea) return;

			// Prepare next placeholder index
			placeholderIndex = (placeholderIndex + 1) % placeholders.length;

			// Use GSAP for smooth transition if available, otherwise fallback to CSS
			if (typeof gsap !== "undefined") {
				gsap.to(textarea, {
					opacity: 0.7,
					duration: 0.5,
					ease: "power2.out",
					onComplete: () => {
						textarea.placeholder = placeholders[placeholderIndex];
						gsap.to(textarea, {
							opacity: 1,
							duration: 0.5,
							ease: "power2.in",
						});
					},
				});
			} else {
				// CSS transition fallback
				textarea.style.transition = "opacity 0.5s ease";
				textarea.style.opacity = "0.7";
				setTimeout(() => {
					textarea.placeholder = placeholders[placeholderIndex];
					textarea.style.opacity = "1";
				}, 500);
			}
		};

		/**
		 * Starts the placeholder cycling
		 */
		const startPlaceholderCycle = () => {
			// Set initial placeholder
			textarea.placeholder = placeholders[placeholderIndex];

			// Clear any existing interval
			if (placeholderInterval) clearInterval(placeholderInterval);

			// Start cycling every 8 seconds
			placeholderInterval = setInterval(cyclePlaceholder, 8000);
		};

		/**
		 * Stops the placeholder cycling
		 */
		const stopPlaceholderCycle = () => {
			if (placeholderInterval) {
				clearInterval(placeholderInterval);
				placeholderInterval = null;
			}
		};

		// Function to update char counter
		const updateCharCounter = () => {
			const text = textarea.value;
			const charCount = text.length;
			const nonWhitespaceCount = text.replace(/\s/g, "").length;

			// charCounter.textContent = `${charCount}/280 characters (${nonWhitespaceCount} non-whitespace)`;
			charCounter.textContent = `${charCount}/280 characters (Minimum 10 characters)`;

			// Visual feedback based on remaining chars
			//   if (charCount > 250) {
			//     charCounter.style.color = "#ff9900";
			//   } else {
			//     charCounter.style.color = "#999";
			//   }

			//   if (nonWhitespaceCount >= 10) {
			//     charCounter.style.fontWeight = "bold";
			//   } else {
			//     charCounter.style.fontWeight = "normal";
			//   }

			// Ensure counter is visible
			charCounter.style.display = "block";
		};

		// Initial update
		updateCharCounter();
		startPlaceholderCycle();

		// Event listeners
		textarea.addEventListener("input", updateCharCounter);
		textarea.addEventListener("input", updateNextButtonState);

		// Focus/blur events for placeholder cycling
		textarea.addEventListener("focus", () => {
			// Ensure opacity is reset when focused
			if (typeof gsap !== "undefined") {
				gsap.to(textarea, { opacity: 1, duration: 0.3 });
			} else {
				textarea.style.opacity = "1";
			}
			stopPlaceholderCycle();
		});

		textarea.addEventListener("blur", () => {
			if (!textarea.value) {
				startPlaceholderCycle();
			}
		});

		// Return validation and cleanup methods
		return {
			validate: () => {
				const text = textarea?.value || "";
				const nonWhitespaceChars = text.replace(/\s/g, "").length;
				return nonWhitespaceChars > 0;
			},
			cleanup: () => {
				if (placeholderInterval) clearInterval(placeholderInterval);
				textarea.removeEventListener("focus", stopPlaceholderCycle);
			},
		};
	};

	/**
	 * Enhanced Step 2 Setup with Simple Custom Dropdowns
	 */
	const setupStep2 = () => {
		const step2 = document.querySelector('[data-multistep-form="step-2"]');
		if (!step2) return;

		const countryListContainer = step2.querySelector(
			".challenge_form_country_list"
		);
		const addBtnContainer = step2.querySelector(
			".challenge_form_country_add_btn"
		);
		const addBtn = addBtnContainer?.querySelector(
			'[data-step-2="add-btn"]'
		);

		// Store dropdown instances
		const countryDropdowns = new Map();

		// Ensure add button is visible
		if (addBtnContainer) {
			addBtnContainer.style.display = "block";
		}

		// Remove existing items
		const existingItems = countryListContainer?.querySelectorAll(
			'[data-step-2="item"]'
		);
		existingItems?.forEach((item) => item.remove());

		/**
		 * Creates a custom country dropdown
		 */
		const createCountryDropdown = (selectElement, availableCountries) => {
			const selectWrapper = selectElement.closest(
				".form_main_select_wrap"
			);
			if (!selectWrapper) return null;

			// Create trigger input
			const triggerInput = document.createElement("input");
			triggerInput.type = "text";
			triggerInput.className = "form_main_field country-trigger";
			triggerInput.placeholder = "Select Country";
			triggerInput.readOnly = true;
			triggerInput.style.cursor = "pointer";

			// Create dropdown container
			const dropdownContainer = document.createElement("div");
			dropdownContainer.className = "country-dropdown";
			dropdownContainer.setAttribute("data-lenis-prevent", "");

			dropdownContainer.style.display = "none";
			dropdownContainer.style.position = "absolute";
			dropdownContainer.style.zIndex = "1000";
			dropdownContainer.style.backgroundColor = "rgba(30, 30, 30, 1)";
			dropdownContainer.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
			dropdownContainer.style.maxHeight = "200px";
			dropdownContainer.style.overflowY = "auto";
			dropdownContainer.style.width = "100%";
			dropdownContainer.style.borderRadius = "8px";
			dropdownContainer.style.top = "100%";
			dropdownContainer.style.left = "0";
			dropdownContainer.style.marginTop = "4px";

			// Create search input
			const searchInput = document.createElement("input");
			searchInput.type = "text";
			searchInput.className = "form_main_field";
			searchInput.placeholder = "Search countries...";
			searchInput.style.margin = "8px";
			searchInput.style.width = "calc(100% - 16px)";
			searchInput.style.fontSize = "14px";

			// Create options container
			const optionsContainer = document.createElement("div");
			optionsContainer.className = "country-options";

			dropdownContainer.appendChild(searchInput);
			dropdownContainer.appendChild(optionsContainer);

			// Hide original select and add custom elements
			selectElement.style.display = "none";
			selectWrapper.style.position = "relative";
			selectWrapper.appendChild(triggerInput);
			selectWrapper.appendChild(dropdownContainer);

			let isOpen = false;
			let filteredCountries = [...availableCountries];

			/**
			 * Populates dropdown options
			 */
			const populateOptions = (countriesToShow = filteredCountries) => {
				optionsContainer.innerHTML = "";

				// Add placeholder option
				const placeholderOption = document.createElement("div");
				placeholderOption.className = "country-option";
				placeholderOption.textContent = "Select Country";
				placeholderOption.dataset.value = "";
				placeholderOption.style.padding = "12px 16px";
				placeholderOption.style.cursor = "pointer";
				placeholderOption.style.borderBottom =
					"1px solid rgba(255, 255, 255, 0.1)";
				placeholderOption.style.color = "#999";
				placeholderOption.style.fontStyle = "italic";
				optionsContainer.appendChild(placeholderOption);

				// Add country options
				countriesToShow.forEach((country) => {
					const option = document.createElement("div");
					option.className = "country-option";
					option.textContent = country;
					option.dataset.value = country;
					option.style.padding = "12px 16px";
					option.style.cursor = "pointer";
					option.style.borderBottom =
						"1px solid rgba(255, 255, 255, 0.1)";
					option.style.transition = "background-color 0.2s ease";

					// Highlight if selected
					if (selectElement.value === country) {
						option.style.backgroundColor =
							"rgba(94, 151, 235, 0.2)";
						triggerInput.value = country;
					}

					// Hover effects
					option.addEventListener("mouseenter", () => {
						option.style.backgroundColor =
							"rgba(255, 255, 255, 0.1)";
					});

					option.addEventListener("mouseleave", () => {
						if (selectElement.value !== country) {
							option.style.backgroundColor = "transparent";
						}
					});

					optionsContainer.appendChild(option);
				});
			};

			const filterCountries = (searchTerm) => {
				if (!searchTerm) {
					filteredCountries = [...availableCountries];
				} else {
					filteredCountries = availableCountries.filter((country) =>
						country
							.toLowerCase()
							.startsWith(searchTerm.toLowerCase())
					);
				}
				populateOptions(filteredCountries);
			};

			/**
			 * Opens dropdown
			 */
			const openDropdown = () => {
				if (isOpen) return;

				isOpen = true;
				dropdownContainer.style.display = "block";

				if (typeof gsap !== "undefined") {
					gsap.fromTo(
						dropdownContainer,
						{ opacity: 0, y: -10 },
						{ opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
					);
				}

				setTimeout(() => searchInput.focus(), 100);
			};

			/**
			 * Closes dropdown
			 */
			const closeDropdown = () => {
				if (!isOpen) return;

				isOpen = false;

				if (typeof gsap !== "undefined") {
					gsap.to(dropdownContainer, {
						opacity: 0,
						y: -10,
						duration: 0.2,
						ease: "power2.in",
						onComplete: () => {
							dropdownContainer.style.display = "none";
						},
					});
				} else {
					dropdownContainer.style.display = "none";
				}

				searchInput.value = "";
				filterCountries("");
			};

			/**
			 * Selects option
			 */
			const selectOption = (value, text) => {
				selectElement.value = value;
				triggerInput.value = text || "Select Country";

				// Update option styles
				optionsContainer
					.querySelectorAll(".country-option")
					.forEach((opt) => {
						if (opt.dataset.value === value) {
							opt.style.backgroundColor =
								"rgba(94, 151, 235, 0.2)";
						} else {
							opt.style.backgroundColor = "transparent";
						}
					});

				// Trigger change event
				selectElement.dispatchEvent(
					new Event("change", { bubbles: true })
				);
				closeDropdown();
			};

			// Event Listeners
			triggerInput.addEventListener("click", (e) => {
				e.stopPropagation();
				isOpen ? closeDropdown() : openDropdown();
			});

			searchInput.addEventListener("input", (e) => {
				filterCountries(e.target.value);
			});

			searchInput.addEventListener("click", (e) => {
				e.stopPropagation();
			});

			optionsContainer.addEventListener("click", (e) => {
				const option = e.target.closest(".country-option");
				if (option) {
					selectOption(option.dataset.value, option.textContent);
				}
			});

			// Close on outside click
			document.addEventListener("click", (e) => {
				if (!selectWrapper.contains(e.target)) {
					closeDropdown();
				}
			});

			// Initialize
			populateOptions();

			return {
				updateOptions: (newCountries) => {
					filteredCountries = [...newCountries];
					populateOptions();
				},
				destroy: () => {
					triggerInput.remove();
					dropdownContainer.remove();
					selectElement.style.display = "";
				},
			};
		};

		/**
		 * Gets selected countries except current
		 */
		const getSelectedCountriesExcept = (currentSelectId) => {
			const selected = [];
			locationState.selectedCountries.forEach((value, key) => {
				if (key !== currentSelectId && value) {
					selected.push(value);
				}
			});
			return selected;
		};

		/**
		 * Updates all dropdowns
		 */
		const updateAllCountryDropdowns = () => {
			countryDropdowns.forEach((dropdown, selectId) => {
				const otherSelected = getSelectedCountriesExcept(selectId);
				const availableCountries = countries.filter(
					(country) => !otherSelected.includes(country)
				);
				dropdown.updateOptions(availableCountries);
			});
		};

		/**
		 * Creates country item
		 */
		const createCountryItem = (number) => {
			const item = document.createElement("div");
			item.className = "challenge_form_country_item";

			if (number > 1) {
				item.setAttribute("data-step-2", "item");
			}

			const deleteButtonHtml =
				number > 1
					? `
      <div class="challenge_form_country_item_delete_btn">
        <div data-wf--button-main--style="secondary" data-step-2="delete-btn" class="button_main_wrap w-variant-e85564cd-af30-a478-692b-71732aefb3ab">
          <div class="clickable_wrap u-cover-absolute">
            <a target="" href="#" class="clickable_link w-inline-block">
              <span class="clickable_text u-sr-only">Delete</span>
            </a>
            <button type="button" class="clickable_btn">
              <span class="clickable_text u-sr-only">Delete</span>
            </button>
          </div>
          <div aria-hidden="true" class="button_main_text u-text-style-main">Delete</div>
        </div>
      </div>
    `
					: "";

			const nameAttr =
				number > 1
					? `region_scope_country_${number}`
					: "region_scope_country";
			const idAttr =
				number > 1 ? `country-select-${number}` : "country-select";
			const cityNameAttr =
				number > 1
					? `region_scope_city_${number}`
					: "region_scope_city";

			item.innerHTML = `
      <div class="challenge_form_country_label u-text-style-main">Country #${number}</div>
      <div class="challenge_form_country_item_layout">
        <div class="challenge_form_country_item_select_wrap">
          <span class="form_main_select_wrap">
            <select name="${nameAttr}" placeholder="Select Country" id="${idAttr}" class="form_main_field">
              <option value="">Select Country</option>
            </select>
            <svg width="100%" viewBox="0 0 6 5" fill="none" aria-hidden="true" class="form_main_select_icon">
              <path d="M0.5 1L3 3.5L5.5 1" stroke="currentColor" stroke-width="0.125rem" vector-effect="non-scaling-stroke"></path>
            </svg>
          </span>
        </div>
        <label data-wf--form-input--variant="base" class="form_main_label_wrap">
          <input type="text" name="${cityNameAttr}" placeholder="City (Separate with Coma)" class="form_main_field" value="">
        </label>
        ${deleteButtonHtml}
      </div>
    `;

			return item;
		};

		/**
		 * Adds listeners to country item
		 */
		const addCountryItemListeners = (item) => {
			const selectEl = item.querySelector("select");

			if (selectEl) {
				// Create custom dropdown
				const dropdown = createCountryDropdown(selectEl, countries);
				countryDropdowns.set(selectEl.id, dropdown);

				selectEl.addEventListener("change", () => {
					locationState.selectedCountries.set(
						selectEl.id,
						selectEl.value
					);
					updateAllCountryDropdowns();
					updateNextButtonState();
				});
			}

			const inputEl = item.querySelector("input");
			if (inputEl) {
				inputEl.addEventListener("input", updateNextButtonState);
				inputEl.addEventListener("change", updateNextButtonState);
			}

			const deleteBtn = item.querySelector('[data-step-2="delete-btn"]');
			if (deleteBtn) {
				deleteBtn.addEventListener("click", (e) => {
					e.preventDefault();

					if (selectEl) {
						const dropdown = countryDropdowns.get(selectEl.id);
						if (dropdown) {
							dropdown.destroy();
							countryDropdowns.delete(selectEl.id);
						}
						locationState.selectedCountries.delete(selectEl.id);
					}

					item.remove();
					updateCountryNumbering();
					updateNextButtonState();
				});
			}
		};

		/**
		 * Updates numbering and field names
		 */
		const updateCountryNumbering = () => {
			const countryItems = countryListContainer.querySelectorAll(
				".challenge_form_country_item"
			);

			Array.from(countryItems).forEach((item, index) => {
				const number = index + 1;

				// Update label
				const label = item.querySelector(
					".challenge_form_country_label"
				);
				if (label) {
					label.textContent = `Country #${number}`;
				}

				// Update field names
				const countrySelect = item.querySelector("select");
				const cityInput = item.querySelector('input[type="text"]');

				if (countrySelect) {
					const oldId = countrySelect.id;
					const newId =
						number > 1
							? `country-select-${number}`
							: "country-select";

					countrySelect.name =
						number > 1
							? `region_scope_country_${number}`
							: "region_scope_country";
					countrySelect.id = newId;

					// Update dropdown reference
					if (oldId !== newId) {
						const dropdown = countryDropdowns.get(oldId);
						if (dropdown) {
							countryDropdowns.delete(oldId);
							countryDropdowns.set(newId, dropdown);
						}

						const value =
							locationState.selectedCountries.get(oldId);
						if (value) {
							locationState.selectedCountries.delete(oldId);
							locationState.selectedCountries.set(newId, value);
						}
					}
				}

				if (cityInput) {
					cityInput.name =
						number > 1
							? `region_scope_city_${number}`
							: "region_scope_city";
				}

				// Show/hide delete button
				const deleteBtn = item.querySelector(
					'[data-step-2="delete-btn"]'
				);
				if (deleteBtn) {
					const deleteBtnWrap = deleteBtn.closest(
						".challenge_form_country_item_delete_btn"
					);
					if (deleteBtnWrap) {
						deleteBtnWrap.style.display =
							number === 1 ? "none" : "flex";
					}
				}
			});

			updateAllCountryDropdowns();
		};

		/**
		 * Adds new country item
		 */
		const addCountryItem = () => {
			const currentItems = countryListContainer.querySelectorAll(
				".challenge_form_country_item"
			).length;
			const newItemNumber = currentItems + 1;

			const newItem = createCountryItem(newItemNumber);
			countryListContainer.appendChild(newItem);

			addCountryItemListeners(newItem);
			updateCountryNumbering();
			updateNextButtonState();
		};

		// Initialize
		const initialItem = createCountryItem(1);
		countryListContainer.appendChild(initialItem);
		addCountryItemListeners(initialItem);

		if (addBtn) {
			addBtn.addEventListener("click", (e) => {
				e.preventDefault();
				addCountryItem();
			});
		}

		updateCountryNumbering();

		return {
			countryDropdowns,
			updateAllDropdowns: updateAllCountryDropdowns,
		};
	};

	/**
	 * Industry Selection functionality for Step 3
	 */
	/**
	 * Sets up industry selection functionality for Step 3
	 * @returns {Object} Object with validation method
	 */
	const setupStep3 = () => {
		const step3 = document.querySelector('[data-multistep-form="step-3"]');
		if (!step3) return;

		// DOM elements
		const industryInput = step3.querySelector('input[name="Industry"]');
		const selectedIndustriesContainer = step3.querySelector(
			".selected_industries_container"
		);

		// Create hidden input for storing selected industries
		let hiddenInput = step3.querySelector('input[name="industry_tags"]');
		if (!hiddenInput) {
			hiddenInput = document.createElement("input");
			hiddenInput.type = "hidden";
			hiddenInput.name = "industry_tags";
			step3.appendChild(hiddenInput);
		}

		// Create dropdown for showing filtered industries
		const dropdownContainer = document.createElement("div");
		dropdownContainer.className = "industry-dropdown";
		dropdownContainer.setAttribute("data-lenis-prevent", "");

		dropdownContainer.style.display = "none";
		dropdownContainer.style.position = "absolute";
		dropdownContainer.style.zIndex = "1000";
		dropdownContainer.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
		dropdownContainer.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
		dropdownContainer.style.maxHeight = "200px";
		dropdownContainer.style.overflowY = "auto";
		dropdownContainer.style.width = "100%";
		dropdownContainer.style.borderRadius = "8px";

		// Insert dropdown after the input wrapper
		const inputWrapper = industryInput.closest(
			".challenge_form_input_industries_wrap"
		);
		inputWrapper.style.position = "relative";
		inputWrapper.appendChild(dropdownContainer);

		// Track selected industries
		const selectedIndustries = new Set();

		/**
		 * Updates input visibility based on selection count
		 */
		const updateInputVisibility = () => {
			// Get the input wrapper (parent element that contains the input)
			const inputFieldWrapper = industryInput.closest(
				".form_main_label_wrap"
			);

			if (selectedIndustries.size >= 5) {
				// Hide the input when 5 industries are selected
				inputFieldWrapper.style.display = "none";
			} else {
				// Show the input when fewer than 5 industries are selected
				inputFieldWrapper.style.display = "block";
			}
		};

		/**
		 * Updates the hidden input with comma-separated values
		 */
		const updateHiddenInput = () => {
			hiddenInput.value = Array.from(selectedIndustries).join(", ");
			// Update validation state and input visibility
			updateInputVisibility();
			updateNextButtonState();
		};

		/**
		 * Creates a chip/pill for a selected industry
		 * @param {string} industry - The industry name
		 * @returns {HTMLElement} - The chip element
		 */
		const createIndustryChip = (industry) => {
			const chip = document.createElement("div");
			chip.className = "selected_industries_chips form_pills";
			chip.setAttribute("data-industries", "chips");
			chip.dataset.industry = industry;

			chip.innerHTML = `
        <div class="selected_industries_chips_text u-text-style-small">${industry}</div>
        <div data-industries="chips-delete" class="selected_industries_chips_delete">
          <div class="u-embed-svg is-14 w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 14" fill="none">
              <path d="M7.00046 7.81663L4.14212 10.675C4.03518 10.7819 3.89907 10.8354 3.73379 10.8354C3.56851 10.8354 3.4324 10.7819 3.32546 10.675C3.21851 10.568 3.16504 10.4319 3.16504 10.2666C3.16504 10.1014 3.21851 9.96524 3.32546 9.8583L6.18379 6.99997L3.32546 4.14163C3.21851 4.03469 3.16504 3.89858 3.16504 3.7333C3.16504 3.56802 3.21851 3.43191 3.32546 3.32497C3.4324 3.21802 3.56851 3.16455 3.73379 3.16455C3.89907 3.16455 4.03518 3.21802 4.14212 3.32497L7.00046 6.1833L9.85879 3.32497C9.96573 3.21802 10.1018 3.16455 10.2671 3.16455C10.4324 3.16455 10.5685 3.21802 10.6755 3.32497C10.7824 3.43191 10.8359 3.56802 10.8359 3.7333C10.8359 3.89858 10.7824 4.03469 10.6755 4.14163L7.81712 6.99997L10.6755 9.8583C10.7824 9.96524 10.8359 10.1014 10.8359 10.2666C10.8359 10.4319 10.7824 10.568 10.6755 10.675C10.5685 10.7819 10.4324 10.8354 10.2671 10.8354C10.1018 10.8354 9.96573 10.7819 9.85879 10.675L7.00046 7.81663Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      `;

			// Add event listener for delete button
			const deleteBtn = chip.querySelector(
				'[data-industries="chips-delete"]'
			);
			deleteBtn.style.cursor = "pointer";
			deleteBtn.addEventListener("click", () => {
				selectedIndustries.delete(industry);
				chip.remove();
				updateHiddenInput();
			});

			return chip;
		};

		/**
		 * Selects an industry
		 * @param {string} industry - The industry to select
		 */
		const selectIndustry = (industry) => {
			if (selectedIndustries.size >= 5) return;

			selectedIndustries.add(industry);
			const chip = createIndustryChip(industry);
			selectedIndustriesContainer.appendChild(chip);

			// Clear the input field
			industryInput.value = "";

			updateHiddenInput();
			closeDropdown();
		};

		/**
		 * Filters industries based on input
		 * @param {string} query - The search query
		 * @returns {string[]} - Filtered industries
		 */
		const filterIndustries = (query) => {
			query = query.toLowerCase().trim();
			if (!query) return [];

			return industryMasterList.filter((industry) => {
				return (
					!selectedIndustries.has(industry) &&
					industry.toLowerCase().includes(query)
				);
			});
			// .slice(0, 10); // Limit to 10 results for performance
		};

		/**
		 * Updates the dropdown with filtered industries
		 */
		const updateDropdown = () => {
			const query = industryInput.value;
			const filteredIndustries = filterIndustries(query);

			dropdownContainer.innerHTML = "";

			if (filteredIndustries.length > 0) {
				filteredIndustries.forEach((industry) => {
					const item = document.createElement("div");
					item.className = "industry-dropdown-item";
					item.textContent = industry;
					item.style.padding = "10px";
					item.style.cursor = "pointer";
					item.style.borderBottom =
						"1px solid rgba(255, 255, 255, 0.20)";

					item.addEventListener("mouseover", () => {
						item.style.backgroundColor =
							"rgba(255, 255, 255, 0.06)";
					});

					item.addEventListener("mouseout", () => {
						item.style.backgroundColor = "";
					});

					item.addEventListener("click", () => {
						selectIndustry(industry);
					});

					dropdownContainer.appendChild(item);
				});

				showDropdown();
			} else {
				closeDropdown();
			}
		};

		/**
		 * Shows the dropdown
		 */
		const showDropdown = () => {
			dropdownContainer.style.display = "block";
			dropdownContainer.style.top = "100%";
			dropdownContainer.style.left = "0";
		};

		/**
		 * Closes the dropdown
		 */
		const closeDropdown = () => {
			dropdownContainer.style.display = "none";
		};

		// Event listeners
		industryInput.addEventListener("input", updateDropdown);

		industryInput.addEventListener("focus", () => {
			if (industryInput.value) {
				updateDropdown();
			}
		});

		// Close dropdown when clicking outside
		document.addEventListener("click", (e) => {
			if (!inputWrapper.contains(e.target)) {
				closeDropdown();
			}
		});

		// Clear any existing chips on init
		selectedIndustriesContainer.innerHTML = "";

		// Initialize hidden input and update input visibility
		updateHiddenInput();

		// Validate Step 3
		return {
			validate: () => selectedIndustries.size > 0,
		};
	};

	/**
	 * Sets up the titles and signals functionality for Step 5
	 */
	const setupStep5 = () => {
		const step5 = document.querySelector('[data-multistep-form="step-5"]');
		if (!step5) return;

		setupTitleAutosuggest();

		// DOM elements
		const customInputWrap = step5.querySelector(
			'[data-multistep-form="custom-input"]'
		);
		const customInput = customInputWrap?.querySelector(
			'input[name="trigger_signals"]'
		);
		const radioButtons = step5.querySelectorAll(
			'input[type="radio"][name="trigger_signals"]'
		);
		const addCustomRadio = step5.querySelector("#Add-Custom");

		// State tracking
		let selectedValue = "";

		/**
		 * Updates the visibility of the custom input field
		 * @param {boolean} show - Whether to show the custom input
		 */
		const toggleCustomInput = (show) => {
			if (!customInputWrap) return;

			if (show) {
				customInputWrap.style.display = "block";
				customInput?.focus();
			} else {
				customInputWrap.style.display = "none";
				if (customInput) customInput.value = "";
			}
		};

		/**
		 * Handles radio button change
		 * @param {Event} e - The change event
		 */
		const handleRadioChange = (e) => {
			const isCustomSelected = e.target.id === "Add-Custom";
			toggleCustomInput(isCustomSelected);

			if (!isCustomSelected) {
				// Store the selected radio value
				selectedValue = e.target.value;
				updateNextButtonState();
			}
		};

		/**
		 * Handles custom input change
		 */
		const handleCustomInputChange = () => {
			if (customInput && addCustomRadio?.checked) {
				// Use the custom input value
				selectedValue = customInput.value;
				updateNextButtonState();
			}
		};

		// Set up event listeners
		radioButtons.forEach((radio) => {
			radio.addEventListener("change", handleRadioChange);
		});

		if (customInput) {
			customInput.addEventListener("input", handleCustomInputChange);
		}

		// Initialize - hide custom input by default
		toggleCustomInput(false);

		// Return validation function
		return {
			validate: () => {
				// Either a title is entered or a signal is selected/entered
				const titleInput = step5.querySelector(
					'input[name="title_filters"]'
				);
				const hasTitleValue =
					titleInput && titleInput.value.trim() !== "";

				// Check if we have a signal value (either from radio or custom input)
				const hasSignalValue = selectedValue.trim() !== "";

				return hasTitleValue || hasSignalValue;
			},

			// Return currently selected value (for form submission)
			getSelectedSignal: () => selectedValue,
		};
	};

	/**
	 * Sets up Step 7: User role and lead usage context with strict dual validation
	 * Both fields are required AND "Other" inputs must be filled when selected
	 */
	const setupStep7 = () => {
		const step7 = document.querySelector('[data-multistep-form="step-7"]');
		if (!step7) return;

		// Configuration for both question groups
		const questionGroups = [
			{
				name: "persona_role",
				otherId: "Other",
				otherInputName: "persona_role_other",
			},
			{
				name: "lead_use_case",
				otherId: "Other-2",
				otherInputName: "lead_use_case_other",
			},
		];

		// Form state tracking
		const formState = {
			persona_role: {
				hasSelection: false,
				isOther: false,
				otherValue: "",
				isComplete: false,
			},
			lead_use_case: {
				hasSelection: false,
				isOther: false,
				otherValue: "",
				isComplete: false,
			},
		};

		/**
		 * Finds the next button within the Step 7 container
		 */
		const getStepNextButton = () => {
			let nextBtn = step7.querySelector(
				'[data-multistep-form="next-btn"]'
			);

			if (!nextBtn) {
				const buttons = step7.querySelectorAll(
					'button, [role="button"], .button_main_wrap'
				);
				for (const btn of buttons) {
					const text = (
						btn.textContent ||
						btn.innerText ||
						""
					).toLowerCase();
					if (text.includes("next")) {
						nextBtn = btn;
						break;
					}
				}
			}

			return nextBtn;
		};

		/**
		 * Updates the step-specific next button state
		 */
		const updateNextButtonState = (shouldEnable) => {
			const nextBtn = getStepNextButton();
			if (!nextBtn) return;

			if (shouldEnable) {
				nextBtn.classList.remove("is-disabled");
				nextBtn.removeAttribute("disabled");

				const nestedButton = nextBtn.querySelector("button");
				const nestedLink = nextBtn.querySelector("a");

				if (nestedButton) nestedButton.removeAttribute("disabled");
				if (nestedLink) nestedLink.style.pointerEvents = "";
			} else {
				nextBtn.classList.add("is-disabled");
				nextBtn.setAttribute("disabled", "disabled");

				const nestedButton = nextBtn.querySelector("button");
				const nestedLink = nextBtn.querySelector("a");

				if (nestedButton)
					nestedButton.setAttribute("disabled", "disabled");
				if (nestedLink) nestedLink.style.pointerEvents = "none";
			}

			return nextBtn;
		};

		/**
		 * Enhanced radio selection detection using Webflow classes
		 */
		const getRadioSelection = (fieldName) => {
			const radioInputs = step7.querySelectorAll(
				`input[name="${fieldName}"]`
			);

			for (const radio of radioInputs) {
				const isCheckedAttribute = radio.checked;
				const hasCheckedClass = radio.classList.contains(
					"w--redirected-checked"
				);
				const siblingHasClass =
					radio.nextElementSibling?.classList.contains(
						"w--redirected-checked"
					);

				if (isCheckedAttribute || hasCheckedClass || siblingHasClass) {
					const group = questionGroups.find(
						(g) => g.name === fieldName
					);
					const isOther = radio.id === group?.otherId;

					return {
						hasSelection: true,
						isOther: isOther,
						radioElement: radio,
					};
				}
			}

			return { hasSelection: false, isOther: false, radioElement: null };
		};

		/**
		 * Validates individual field completion
		 */
		const validateField = (fieldName) => {
			const field = formState[fieldName];
			const selection = getRadioSelection(fieldName);

			field.hasSelection = selection.hasSelection;
			field.isOther = selection.isOther;

			if (!field.hasSelection) {
				field.isComplete = false;
				return false;
			}

			if (field.isOther) {
				field.isComplete = field.otherValue.trim().length > 0;
			} else {
				field.isComplete = true;
			}

			return field.isComplete;
		};

		/**
		 * Updates form validation and button state
		 */
		const updateFormValidity = () => {
			const personaRoleValid = validateField("persona_role");
			const leadUseCaseValid = validateField("lead_use_case");

			const shouldEnableButton = personaRoleValid && leadUseCaseValid;

			updateNextButtonState(shouldEnableButton);

			return shouldEnableButton;
		};

		/**
		 * Sets up individual question group with "Other" input functionality
		 */
		const setupQuestionGroup = (group) => {
			const radioButtons = step7.querySelectorAll(
				`input[type="radio"][name="${group.name}"]`
			);
			const otherRadio = step7.querySelector(`#${group.otherId}`);

			if (!radioButtons.length || !otherRadio) return;

			const radioContainer = otherRadio.closest(".chips_container");
			const otherInputWrap = radioContainer?.querySelector(
				'[data-multistep-form="other-input"]'
			);
			const otherInput = otherInputWrap?.querySelector(
				`input[name="${group.otherInputName}"]`
			);

			if (!otherInputWrap || !otherInput) return;

			/**
			 * Shows the "Other" input with animation
			 */
			const showOtherInput = () => {
				otherInputWrap.style.display = "block";

				if (typeof gsap !== "undefined") {
					gsap.fromTo(
						otherInputWrap,
						{ opacity: 0, height: 0 },
						{
							opacity: 1,
							height: "auto",
							duration: 0.3,
							ease: "power2.out",
							onComplete: () => {
								otherInput.setAttribute("required", "required");
								otherInput.setAttribute(
									"aria-required",
									"true"
								);
								otherInput.focus();
							},
						}
					);
				} else {
					otherInputWrap.style.opacity = "1";
					otherInputWrap.style.height = "auto";
					otherInput.setAttribute("required", "required");
					otherInput.setAttribute("aria-required", "true");
					setTimeout(() => otherInput.focus(), 50);
				}
			};

			/**
			 * Hides the "Other" input with animation
			 */
			const hideOtherInput = () => {
				if (typeof gsap !== "undefined") {
					gsap.to(otherInputWrap, {
						opacity: 0,
						height: 0,
						duration: 0.3,
						ease: "power2.in",
						onComplete: () => {
							otherInputWrap.style.display = "none";
							otherInput.removeAttribute("required");
							otherInput.removeAttribute("aria-required");
						},
					});
				} else {
					otherInputWrap.style.opacity = "0";
					otherInputWrap.style.height = "0px";
					setTimeout(() => {
						otherInputWrap.style.display = "none";
						otherInput.removeAttribute("required");
						otherInput.removeAttribute("aria-required");
					}, 300);
				}

				otherInput.value = "";
				formState[group.name].otherValue = "";
			};

			/**
			 * Handles radio button selection changes
			 */
			const handleRadioChange = () => {
				setTimeout(() => {
					const selection = getRadioSelection(group.name);

					formState[group.name].hasSelection = selection.hasSelection;
					formState[group.name].isOther = selection.isOther;

					if (selection.isOther) {
						showOtherInput();
						formState[group.name].isComplete =
							formState[group.name].otherValue.trim().length > 0;
					} else if (selection.hasSelection) {
						hideOtherInput();
						formState[group.name].isComplete = true;
					}

					updateFormValidity();
				}, 100);
			};

			/**
			 * Handles "Other" input changes
			 */
			const handleOtherInputChange = () => {
				formState[group.name].otherValue = otherInput.value;
				updateFormValidity();
			};

			// Attach event listeners
			radioButtons.forEach((radio) => {
				radio.addEventListener("change", handleRadioChange);
				radio.addEventListener("click", handleRadioChange);
			});

			otherInput.addEventListener("input", handleOtherInputChange);

			// Initialize - hide other input
			otherInputWrap.style.display = "none";
			otherInputWrap.style.height = "0px";
			otherInputWrap.style.opacity = "0";
			otherInput.removeAttribute("required");
			otherInput.removeAttribute("aria-required");
		};

		// Setup both question groups
		questionGroups.forEach(setupQuestionGroup);

		// Set initial button state to disabled
		updateNextButtonState(false);
		updateFormValidity();

		return {
			validate: () => updateFormValidity(),

			getFormData: () => {
				const result = {};
				Object.entries(formState).forEach(([key, data]) => {
					if (data.isOther) {
						result[key] = data.otherValue;
					} else {
						const selection = getRadioSelection(key);
						result[key] = selection.radioElement
							? selection.radioElement.value
							: "";
					}
				});
				return result;
			},
		};
	};

	function setupStep8() {
		const step8 = document.querySelector('[data-multistep-form="step-8"]');
		if (!step8) return;

		const emailInput = step8.querySelector('input[name="contact_email"]');
		const firstNameInput = step8.querySelector(
			'input[name="contact_first_name"]'
		);
		const termsCheckbox = step8.querySelector(
			'input[name="Agreed to terms"]'
		);
		const submitButton = step8.querySelector(
			'[data-form-btn="submit"] button'
		);
		const submitBtnWrap = step8.querySelector(
			'[data-form-btn="submit"] .button_main_wrap'
		);

		let debounceTimer;

		// Create error message element for email validation
		const emailErrorMsg = document.createElement("div");
		emailErrorMsg.className = "email-validation-error";
		emailErrorMsg.style.color = "#FF0000";
		emailErrorMsg.style.fontSize = "14px";
		emailErrorMsg.style.marginTop = "6px";
		emailErrorMsg.style.display = "none";

		// Insert error message after email input wrapper
		if (emailInput && emailInput.closest(".form_main_label_wrap")) {
			emailInput
				.closest(".form_main_label_wrap")
				.insertAdjacentElement("afterend", emailErrorMsg);
		}

		// Initialize validation state
		emailInput.setAttribute("data-domain-valid", "pending");

		// Email format validation function
		function validateEmail(email) {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return emailPattern.test(email);
		}

		// Domain validation function using Google's DNS over HTTPS API
		async function validateDomain(email) {
			if (!email || !email.includes("@")) return false;

			const domain = email.split("@")[1];

			try {
				// Use Google's DNS over HTTPS API to check for MX records
				const response = await fetch(
					`https://dns.google/resolve?name=${domain}&type=MX`
				);
				const data = await response.json();

				// Check if the domain has MX records (mail exchange servers)
				return (
					data.Status === 0 && data.Answer && data.Answer.length > 0
				);
			} catch (error) {
				console.error("DNS lookup error:", error);
				// If there's an error with the API, fallback to basic validation
				return true;
			}
		}

		// Debounce function
		const debounce = (func, delay) => {
			return function () {
				const context = this;
				const args = arguments;
				clearTimeout(debounceTimer);
				debounceTimer = setTimeout(
					() => func.apply(context, args),
					delay
				);
			};
		};

		// Update submit button state based on form validity
		function validateStep8() {
			const isEmailValid =
				emailInput.getAttribute("data-domain-valid") === "true";
			const isFirstNameValid =
				firstNameInput && firstNameInput.value.trim() !== "";
			const isTermsAccepted = termsCheckbox && termsCheckbox.checked;

			const isFormValid =
				isEmailValid && isFirstNameValid && isTermsAccepted;

			if (submitButton) {
				submitButton.disabled = !isFormValid;
			}

			if (submitBtnWrap) {
				submitBtnWrap.classList.toggle("is-disabled", !isFormValid);
			}

			return isFormValid;
		}

		// Email domain validation with debounce
		const validateEmailDomain = debounce(function (email) {
			emailErrorMsg.textContent = "Checking email domain...";
			emailErrorMsg.style.display = "block";

			validateDomain(email)
				.then((isValid) => {
					if (!isValid) {
						emailErrorMsg.textContent =
							"Invalid email domain. Please check and try again.";
						emailErrorMsg.style.display = "block";
						emailInput.setAttribute("data-domain-valid", "false");
					} else {
						emailErrorMsg.style.display = "none";
						emailInput.setAttribute("data-domain-valid", "true");
					}
					validateStep8();
				})
				.catch(() => {
					emailErrorMsg.style.display = "none";
					emailInput.setAttribute("data-domain-valid", "true");
					validateStep8();
				});
		}, 500);

		// Set up event listeners
		if (emailInput) {
			// Input event for real-time validation
			emailInput.addEventListener("input", function () {
				if (this.value && validateEmail(this.value)) {
					this.setAttribute("data-domain-valid", "pending");
					validateEmailDomain(this.value);
				} else if (this.value) {
					emailErrorMsg.textContent = "Invalid email format.";
					emailErrorMsg.style.display = "block";
					this.setAttribute("data-domain-valid", "false");
					validateStep8();
				} else {
					emailErrorMsg.style.display = "none";
					this.setAttribute("data-domain-valid", "pending");
					validateStep8();
				}
			});

			// Handle Enter key press
			emailInput.addEventListener("keydown", function (e) {
				if (e.key === "Enter") {
					if (this.getAttribute("data-domain-valid") !== "true") {
						e.preventDefault();
						e.stopPropagation();

						if (
							this.getAttribute("data-domain-valid") ===
								"pending" &&
							validateEmail(this.value)
						) {
							clearTimeout(debounceTimer);

							validateDomain(this.value)
								.then((isValid) => {
									if (!isValid) {
										emailErrorMsg.textContent =
											"Invalid email domain. Please check and try again.";
										emailErrorMsg.style.display = "block";
										this.setAttribute(
											"data-domain-valid",
											"false"
										);
									} else {
										emailErrorMsg.style.display = "none";
										this.setAttribute(
											"data-domain-valid",
											"true"
										);
										validateStep8();
										if (validateStep8() && submitButton) {
											submitButton.click();
										}
									}
								})
								.catch(() => {
									emailErrorMsg.style.display = "none";
									this.setAttribute(
										"data-domain-valid",
										"true"
									);
									validateStep8();
									if (validateStep8() && submitButton) {
										submitButton.click();
									}
								});
						}
					}
				}
			});
		}

		// Add event listeners for other form elements
		if (firstNameInput) {
			firstNameInput.addEventListener("input", validateStep8);
		}

		if (termsCheckbox) {
			termsCheckbox.addEventListener("change", validateStep8);
		}

		// Initial validation
		validateStep8();
	}

	// ===== SETUP AND INITIALIZATION =====

	/**
	 * Sets up event listeners for form navigation
	 */
	const setupNavigationListeners = () => {
		// Set up input event listeners for all steps
		stepContainers.forEach((step) => {
			// Handle text inputs, textareas, selects
			const inputs = step.querySelectorAll("input, textarea, select");
			inputs.forEach((input) => {
				input.addEventListener("input", updateNextButtonState);
				input.addEventListener("change", updateNextButtonState);
			});

			// Specifically handle radio buttons and checkboxes
			const radiosAndCheckboxes = step.querySelectorAll(
				'input[type="radio"], input[type="checkbox"]'
			);
			radiosAndCheckboxes.forEach((input) => {
				input.addEventListener("change", updateNextButtonState);
			});
		});

		// Set up next button click handlers
		nextButtons.forEach((button) => {
			button.addEventListener("click", () => {
				if (isStepValid()) {
					// If we're on the start step, go to step 1
					if (currentStepIndex === 0) {
						goToStep(1);
					} else if (currentStepIndex < stepContainers.length - 1) {
						goToStep(currentStepIndex + 1);
					}
				}
			});
		});

		// Set up back button click handlers
		backButtons.forEach((button) => {
			button.addEventListener("click", () => {
				if (currentStepIndex > 1) {
					goToStep(currentStepIndex - 1);
				} else if (currentStepIndex === 1) {
					goToStep(0); // Go back to start step
				}
			});
		});

		// Set up skip button click handlers (these skip validation)
		skipButtons.forEach((button) => {
			button.addEventListener("click", () => {
				if (currentStepIndex < stepContainers.length - 1) {
					goToStep(currentStepIndex + 1);
				}
			});
		});
	};

	/**
	 * Sets up the animated countdown timer for success page
	 */
	const setupSuccessCountdown = () => {
		// Get countdown elements
		const hoursElement = document.querySelector(
			'[data-countdown="hours"] div'
		);
		const minsElement = document.querySelector(
			'[data-countdown="mins"] div'
		);
		const secondsElement = document.querySelector(
			'[data-countdown="seconds"] div'
		);

		if (!hoursElement || !minsElement || !secondsElement) {
			console.warn("Countdown elements not found");
			return;
		}

		// Set target time - 48 hours from now
		const now = new Date();
		const targetTime = new Date(now.getTime() + 48 * 60 * 60 * 1000);

		// Variables for animation control
		let lastHours = -1;
		let lastMinutes = -1;
		let lastSeconds = -1;

		/**
		 * Updates the countdown display with animation
		 */
		const updateCountdown = () => {
			// Get current time and calculate remaining time
			const currentTime = new Date();
			const timeDifference = targetTime - currentTime;

			// Handle countdown completion
			if (timeDifference <= 0) {
				hoursElement.textContent = "00";
				minsElement.textContent = "00";
				secondsElement.textContent = "00";
				clearInterval(countdownInterval);
				return;
			}

			// Calculate hours, minutes, seconds
			const hours = Math.floor(timeDifference / (1000 * 60 * 60));
			const minutes = Math.floor(
				(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

			// Format with leading zeros
			const formatNumber = (num) =>
				num < 10 ? `0${num}` : num.toString();

			// Animate changes only if values have changed
			if (hours !== lastHours) {
				animateNumberChange(hoursElement, formatNumber(hours));
				lastHours = hours;
			}

			if (minutes !== lastMinutes) {
				animateNumberChange(minsElement, formatNumber(minutes));
				lastMinutes = minutes;
			}

			if (seconds !== lastSeconds) {
				animateNumberChange(secondsElement, formatNumber(seconds));
				lastSeconds = seconds;
			}
		};

		/**
		 * Animates the number change with GSAP
		 * @param {Element} element - DOM element to animate
		 * @param {string} newValue - New value to display
		 */
		const animateNumberChange = (element, newValue) => {
			// Check if GSAP is available
			if (typeof gsap !== "undefined") {
				// Create temp div for current value
				const tempDiv = document.createElement("div");
				tempDiv.style.position = "absolute";
				tempDiv.style.top = "0";
				tempDiv.style.left = "0";
				tempDiv.style.width = "100%";
				tempDiv.style.height = "100%";
				tempDiv.style.display = "flex";
				tempDiv.style.alignItems = "center";
				tempDiv.style.justifyContent = "center";
				tempDiv.textContent = element.textContent;

				// Position for animation
				element.style.position = "relative";
				element.style.overflow = "hidden";

				// Add temp div to DOM
				element.appendChild(tempDiv);

				// Update original text (hidden behind temp div)
				element.firstChild.textContent = newValue;

				// Animate out old value, in with new value
				gsap.to(tempDiv, {
					y: "100%",
					opacity: 0,
					duration: 0.3,
					ease: "power1.in",
					onComplete: () => {
						tempDiv.remove();
					},
				});

				// Animate in the new value (already in place)
				gsap.fromTo(
					element.firstChild,
					{ y: "-100%", opacity: 0 },
					{ y: "0%", opacity: 1, duration: 0.3, ease: "power1.out" }
				);
			} else {
				// Fallback without GSAP
				element.textContent = newValue;
			}
		};

		// Initial update
		updateCountdown();

		// Start countdown interval
		const countdownInterval = setInterval(updateCountdown, 1000);

		// Return cleanup function
		return {
			cleanup: () => {
				if (countdownInterval) clearInterval(countdownInterval);
			},
		};
	};

	/**
	 * Sets up flip animation countdown timer for success page
	 */
	const setupFlipCountdown = () => {
		// Get countdown elements
		const hoursElement = document.querySelector(
			'[data-countdown="hours"] div'
		);
		const minsElement = document.querySelector(
			'[data-countdown="mins"] div'
		);
		const secondsElement = document.querySelector(
			'[data-countdown="seconds"] div'
		);

		if (!hoursElement || !minsElement || !secondsElement) {
			console.warn("Countdown elements not found");
			return;
		}

		// Set target time - 48 hours from now
		const now = new Date();
		const targetTime = new Date(now.getTime() + 48 * 60 * 60 * 1000);

		// Track last values
		let lastHours = -1;
		let lastMinutes = -1;
		let lastSeconds = -1;

		/**
		 * Creates and styles the flip elements for animation
		 * @param {Element} element - Parent element
		 */
		const setupFlipElement = (element) => {
			// Clear element
			element.innerHTML = "";
			element.style.perspective = "500px";

			// Create top and bottom elements for flip effect
			const top = document.createElement("div");
			top.className = "flip-top";
			//   top.style.height = "50%";
			top.style.overflow = "hidden";
			top.style.backfaceVisibility = "hidden";
			//   top.style.borderBottom = "1px solid rgba(255, 255, 255, 0.15)";
			top.style.borderTopLeftRadius = "4px";
			top.style.borderTopRightRadius = "4px";

			const bottom = document.createElement("div");
			bottom.className = "flip-bottom";
			//   bottom.style.height = "50%";
			bottom.style.overflow = "hidden";
			bottom.style.backfaceVisibility = "hidden";
			bottom.style.borderTopLeftRadius = "0px";
			bottom.style.borderTopRightRadius = "0px";
			bottom.style.borderBottomLeftRadius = "4px";
			bottom.style.borderBottomRightRadius = "4px";

			// Create content elements
			const topContent = document.createElement("div");
			topContent.className = "flip-top-content";
			topContent.style.height = "100%";
			//   topContent.style.lineHeight = "200%";
			topContent.style.textAlign = "center";

			const bottomContent = document.createElement("div");
			bottomContent.className = "flip-bottom-content";
			bottomContent.style.height = "100%";
			bottomContent.style.lineHeight = "0%";
			bottomContent.style.textAlign = "center";

			// Create flip card for animation
			const flipCard = document.createElement("div");
			flipCard.className = "flip-card";
			flipCard.style.display = "none";
			flipCard.style.position = "absolute";
			flipCard.style.top = "0";
			flipCard.style.left = "0";
			flipCard.style.width = "100%";
			flipCard.style.height = "50%";
			flipCard.style.overflow = "hidden";
			flipCard.style.transformOrigin = "bottom";
			flipCard.style.backfaceVisibility = "hidden";
			flipCard.style.borderTopLeftRadius = "4px";
			flipCard.style.borderTopRightRadius = "4px";

			const flipCardContent = document.createElement("div");
			flipCardContent.className = "flip-card-content";
			flipCardContent.style.height = "200%";
			flipCardContent.style.lineHeight = "200%";
			flipCardContent.style.textAlign = "center";

			// Assemble elements
			top.appendChild(topContent);
			bottom.appendChild(bottomContent);
			flipCard.appendChild(flipCardContent);

			element.appendChild(top);
			element.appendChild(bottom);
			element.appendChild(flipCard);

			return {
				top: topContent,
				bottom: bottomContent,
				flipCard: flipCard,
				flipCardContent: flipCardContent,
			};
		};

		// Setup flip elements
		const hoursFlip = setupFlipElement(hoursElement);
		const minsFlip = setupFlipElement(minsElement);
		const secondsFlip = setupFlipElement(secondsElement);

		/**
		 * Animates number change with flip effect
		 * @param {Object} flipElements - Object containing flip elements
		 * @param {string} value - New value to display
		 */
		const flipTo = (flipElements, value) => {
			const { top, bottom, flipCard, flipCardContent } = flipElements;

			// Set content for all elements
			top.textContent = value;
			bottom.textContent = value;

			// For flip animation
			const currentValue = top.textContent;
			flipCardContent.textContent = currentValue;

			// Animate with GSAP if available
			if (typeof gsap !== "undefined") {
				// Show flip card
				flipCard.style.display = "block";

				// Animate flip
				gsap.fromTo(
					flipCard,
					{ rotateX: 0 },
					{
						rotateX: -90,
						duration: 0.3,
						ease: "power1.in",
						onComplete: () => {
							// Update bottom value after flip
							bottom.textContent = value;
							flipCard.style.display = "none";

							// Reset for next flip
							gsap.set(flipCard, { rotateX: 0 });
						},
					}
				);
			} else {
				// Fallback without animation
				bottom.textContent = value;
			}
		};

		/**
		 * Updates countdown timer
		 */
		const updateCountdown = () => {
			const currentTime = new Date();
			const timeDifference = targetTime - currentTime;

			// Handle countdown completion
			if (timeDifference <= 0) {
				hoursFlip.top.textContent = "00";
				hoursFlip.bottom.textContent = "00";
				minsFlip.top.textContent = "00";
				minsFlip.bottom.textContent = "00";
				secondsFlip.top.textContent = "00";
				secondsFlip.bottom.textContent = "00";
				clearInterval(countdownInterval);
				return;
			}

			// Calculate remaining time
			const hours = Math.floor(timeDifference / (1000 * 60 * 60));
			const minutes = Math.floor(
				(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

			// Format with leading zeros
			const formatNumber = (num) =>
				num < 10 ? `0${num}` : num.toString();

			// Update displays if values changed
			const formattedHours = formatNumber(hours);
			const formattedMins = formatNumber(minutes);
			const formattedSecs = formatNumber(seconds);

			if (hours !== lastHours) {
				flipTo(hoursFlip, formattedHours);
				lastHours = hours;
			}

			if (minutes !== lastMinutes) {
				flipTo(minsFlip, formattedMins);
				lastMinutes = minutes;
			}

			if (seconds !== lastSeconds) {
				flipTo(secondsFlip, formattedSecs);
				lastSeconds = seconds;
			}
		};

		// Initial update
		updateCountdown();

		// Start countdown
		const countdownInterval = setInterval(updateCountdown, 1000);

		// Return cleanup function
		return {
			cleanup: () => {
				if (countdownInterval) clearInterval(countdownInterval);
			},
		};
	};

	/**
	 * Initializes the form
	 */
	const init = () => {
		// Hide all steps
		stepContainers.forEach((step) => {
			step.style.display = "none";
		});

		// Show only the start step
		if (startStep) {
			startStep.style.display = "flex";
		}

		// Set up step-specific functionality
		setupStep1();
		setupStep2();
		setupStep3();
		setupStep5();
		setupStep7();
		setupStep8();
		// Additional steps can be added here as needed

		// Set up navigation listeners
		setupNavigationListeners();

		// Initialize the next button state for the start step
		updateNextButtonState();
		document
			.querySelector("[data-form-btn='submit']")
			.addEventListener("click", () => {
				// setupSuccessCountdown();
				setupFlipCountdown();
			});

		console.log("Challenge quiz navigation initialized");
	};

	// Start the application
	init();
});
