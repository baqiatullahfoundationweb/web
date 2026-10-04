# Fonts Directory

## Unwan Unicode Font Setup

To use the Unwan Unicode font for Urdu text in the navbar and footer, you need to add the following font files to this directory:

### Required Font Files:
- `unwan-unicode.woff2` (Web Open Font Format 2 - preferred)
- `unwan-unicode.woff` (Web Open Font Format - fallback)
- `unwan-unicode.ttf` (TrueType Font - fallback)

### Download Sources:
1. **UrduFonts.net** - https://urdufonts.net/fonts/unwan-unicode-unwan-unicode
2. **UrduGah.com** - https://fonts.urdugah.com/unwan-unicode/
3. **UrduFonts.com** - https://urdufonts.com/fonts/unwan-unicode/

### Installation Steps:
1. Download the Unwan Unicode font from any of the sources above
2. Convert the font to web formats (woff2, woff) using online converters if needed
3. Place all three font files in this directory
4. The CSS is already configured to use these fonts

### Font Usage:
The Unwan Unicode font will be used for:
- Urdu brand name in navbar: "بقیتہ اللہ فاؤنڈیشن پاکستان"
- Urdu brand name in footer: "بقیتہ اللہ فاؤنڈیشن پاکستان"

### Fallback Fonts:
If Unwan Unicode is not available, the system will fallback to:
1. Noto Nastaliq Urdu
2. Noto Sans Arabic
3. Unwan Unicode (system)
4. Arial Unicode MS
5. Sans-serif

### CSS Classes:
- `.font-urdu` - Regular Urdu text (font-weight: 600)
- `.font-urdu-bold` - Bold Urdu text (font-weight: 700)
