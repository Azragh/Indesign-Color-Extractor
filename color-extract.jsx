// Funktion zum Konvertieren von RGB-Werten in Hexadezimalformat
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Funktion zum Konvertieren von RGB-Werten in HSB
function rgbToHsb(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max, d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max === min) {
      h = 0; 
  } else {
      switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(v * 100)];
}

// Hauptfunktion
function main() {
  var doc = app.activeDocument;
  var swatches = doc.swatches;

  // Durchsuche alle Textboxen
  var textFrames = doc.textFrames;

  for (var i = 0; i < swatches.length; i++) {
      var swatch = swatches[i];
      try {
          if (swatch.hasOwnProperty('colorValue')) {
              var color = swatch.colorValue;

              if (color.length === 3) { // Nur RGB-Farben
                  var roundedColor = [
                      Math.round(color[0]),
                      Math.round(color[1]),
                      Math.round(color[2])
                  ];
                  var hex = rgbToHex(roundedColor[0], roundedColor[1], roundedColor[2]);
                  var hsb = rgbToHsb(roundedColor[0], roundedColor[1], roundedColor[2]);

                  // Suchen nach passender Textbox anhand des Swatch-Namens
                  for (var j = 0; j < textFrames.length; j++) {
                      if (textFrames[j].label === swatch.name) { // Label als Verknüpfung
                          textFrames[j].contents = hex + "\n" + roundedColor.join(", ") + "\n" + hsb.join(", ");
                          break;
                      }
                  }
              }
          }
      } catch (e) {
          $.writeln("Fehler bei Farbfeld: " + swatch.name + " (" + e.message + ")");
      }
  }
}

// Skript ausführen
main();
