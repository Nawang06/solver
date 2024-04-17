document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.getElementById('settings-button');
    const settingsMenu = document.getElementById('settings-menu');
    const themeToggleButton = document.getElementById('theme-toggle');
    const applyButton = document.getElementById('apply-settings');
    const primaryColorPicker = document.getElementById('primary-color-picker');
    const secondaryColorPicker = document.getElementById('secondary-color-picker');
    const colorLockCheckbox = document.getElementById('color-lock');
    let isDarkTheme = true;

    // Function to toggle the settings menu
    settingsButton.addEventListener('click', function() {
        settingsMenu.classList.toggle('hidden');
    });

    // Function to toggle the theme
    themeToggleButton.addEventListener('click', function() {
        isDarkTheme = !isDarkTheme;
        updateTheme();
    });

    // Function to apply the settings and close the settings menu
    applyButton.addEventListener('click', function() {
        updateColors();
        settingsMenu.classList.add('hidden');
    });

    // Function to update colors
    function updateColors() {
        if (!colorLockCheckbox.checked) {
            const primaryColor = primaryColorPicker.value;
            const secondaryColor = secondaryColorPicker.value;
            document.documentElement.style.setProperty('--primary-color', primaryColor);
            document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        }
    }

    // Function to update the theme
    function updateTheme() {
        if (isDarkTheme) {
            document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-dark');
            document.body.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-color-dark');
            themeToggleButton.textContent = '🌜';
        } else {
            document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-light');
            document.body.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-color-light');
            themeToggleButton.textContent = '🌞';
        }
    }
});

// Update color previews when the color pickers change
primaryColorPicker.addEventListener('change', function() {
    updateColorPreview('primary-color-preview', this.value);
});

secondaryColorPicker.addEventListener('change', function() {
    updateColorPreview('secondary-color-preview', this.value);
});

// Function to update color preview squares
function updateColorPreview(elementId, color) {
    const previewElement = document.getElementById(elementId);
    previewElement.style.backgroundColor = color;
}

// Initialize color previews on page load
updateColorPreview('primary-color-preview', primaryColorPicker.value);
updateColorPreview('secondary-color-preview', secondaryColorPicker.value);