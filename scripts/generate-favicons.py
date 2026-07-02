#!/usr/bin/env python3
"""Generate favicon assets from public/eole.webp.

Circular-cropped (transparent corners): favicon.ico (16/32/48 multi-size),
icon.png (32x32), icon-192.png (192x192).
Square full-bleed (no crop mask): apple-touch-icon.png (180x180).
"""
import os
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
SRC = os.path.join(PUBLIC, "eole.webp")


def square_source():
    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    return img.crop((left, top, left + side, top + side))


def circular(img, size):
    resized = img.resize((size, size), Image.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(resized, (0, 0), mask)
    return out


def main():
    square = square_source()

    ico_sizes = [16, 32, 48]
    ico_frames = [circular(square, s) for s in ico_sizes]
    ico_frames[0].save(
        os.path.join(PUBLIC, "favicon.ico"),
        format="ICO",
        sizes=[(s, s) for s in ico_sizes],
        append_images=ico_frames[1:],
    )
    print("favicon.ico (16/32/48)")

    circular(square, 32).save(os.path.join(PUBLIC, "icon.png"), "PNG")
    print("icon.png (32)")

    circular(square, 192).save(os.path.join(PUBLIC, "icon-192.png"), "PNG")
    print("icon-192.png (192)")

    square.resize((180, 180), Image.LANCZOS).convert("RGB").save(
        os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG"
    )
    print("apple-touch-icon.png (180, square full-bleed)")


if __name__ == "__main__":
    main()
