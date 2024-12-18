# InDesign Color Extractor

A powerful script for Adobe InDesign that automatically extracts the HEX, RGB, and HSB values of all user-defined color swatches and updates text fields labeled with corresponding names. Simplify your workflow and maintain consistency in your design projects.

## Features

- Automatically extracts HEX, RGB, and HSB values from all user-defined color swatches.
- Updates text fields in your document that are labeled with the same name as the swatch.
- Ensures accuracy and saves time by eliminating manual entry.

![Example of labeled text fields](assets/screenshot.png)

## Requirements

- Adobe InDesign
- Basic knowledge of the InDesign Scripts panel

## Installation

1. Open the **Scripts Panel** in InDesign:
   - Go to `Window > Utilities > Scripts`.
2. In the Scripts Panel, click the menu icon and select **Show in Explorer** (Windows) or **Reveal in Finder** (macOS).
3. Move the `.jsx` file into the displayed folder (typically under `User` scripts).

## Usage

1. **Set Up Swatches**:
   - Ensure all custom color swatches are named appropriately.
2. **Label the Text Fields**:
   - Use the **Scripts Label Panel** (`Window > Utilities > Script Label`) to assign a label to the text fields. The label should match the name of the corresponding swatch.
3. **Run the Script**:
   - Double-click the script in the Scripts Panel. The text fields will be updated with the HEX, RGB, and HSB values of the swatches.

## Notes

- Swatches must be RGB-based for the script to function correctly. Non-RGB or default InDesign swatches (e.g., `None`, `Black`, `Paper`, etc.) are skipped.
- Ensure that all required text fields are properly labeled to avoid skipped updates.
