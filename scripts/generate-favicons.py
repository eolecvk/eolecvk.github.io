#!/usr/bin/env python3
"""Generate favicons from public/eole.webp — circular crop for the icon set, square full-bleed apple-touch-icon."""

from pathlib import Path

from PIL import Image, ImageDraw

REPO_ROOT = Path(__file__).resolve().parent.parent
PUBLIC = REPO_ROOT / "public"
SOURCE = PUBLIC / "eole.webp"


def square_crop(img: Image.Image) -> Image.Image:
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    return img.crop((left, top, left + side, top + side))


def circular(img: Image.Image, size: int) -> Image.Image:
    img = square_crop(img).convert("RGBA").resize((size, size), Image.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)
    out = Image.new("RGBA", (size, size))
    out.paste(img, (0, 0), mask)
    return out


def main():
    with Image.open(SOURCE) as src:
        src = src.convert("RGBA")

        favicon_sizes = [16, 32, 48]
        favicon_frames = [circular(src, s) for s in favicon_sizes]
        favicon_frames[0].save(
            PUBLIC / "favicon.ico",
            format="ICO",
            sizes=[(s, s) for s in favicon_sizes],
            append_images=favicon_frames[1:],
        )
        print(f"favicon.ico ({favicon_sizes})")

        circular(src, 32).save(PUBLIC / "icon.png")
        print("icon.png (32)")

        circular(src, 192).save(PUBLIC / "icon-192.png")
        print("icon-192.png (192)")

        square_crop(src).resize((180, 180), Image.LANCZOS).save(
            PUBLIC / "apple-touch-icon.png"
        )
        print("apple-touch-icon.png (180, square full-bleed)")


if __name__ == "__main__":
    main()
