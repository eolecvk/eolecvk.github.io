#!/usr/bin/env python3
"""Generate 576x336 center-cropped webp thumbnails for project list views.

Reads each project's `thumbnail` source (first frame for GIFs), center-crops
to a 576x336 (12:7) aspect ratio, and writes to
public/images/projects/thumbs/<slug>.webp at quality 80.
"""
import os
from PIL import Image, ImageSequence

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
OUT_DIR = os.path.join(PUBLIC, "images", "projects", "thumbs")

TARGET_W, TARGET_H = 576, 336

# slug -> source path relative to public/
SOURCES = {
    "ai-crm": "images/projects/ai-crm-hero.webp",
    "creativerush-media-lab": "images/lab/homepage/animation_scene_control.gif",
    "financial-analyst-chatbot": "images/projects/financial-analyst-chatbot-hero.webp",
    "llm-pipeline": "images/projects/ml-times.webp",
    "stable-diffusion-benchmark": "images/projects/sd-bench-1.webp",
    "scout": "images/projects/scout/graph-nodes.webp",
    "stable-diffusion-finetuning": "images/projects/naruto-sd.webp",
    "strike-the-pose": "images/projects/arcade/raw_preview.webp",
}


def center_crop_to_ratio(img, target_w, target_h):
    src_w, src_h = img.size
    target_ratio = target_w / target_h
    src_ratio = src_w / src_h

    if src_ratio > target_ratio:
        # source is wider than target -> crop left/right
        new_w = round(src_h * target_ratio)
        left = (src_w - new_w) // 2
        box = (left, 0, left + new_w, src_h)
    else:
        # source is taller than target -> crop top/bottom
        new_h = round(src_w / target_ratio)
        top = (src_h - new_h) // 2
        box = (0, top, src_w, top + new_h)

    return img.crop(box).resize((target_w, target_h), Image.LANCZOS)


def load_first_frame(path):
    img = Image.open(path)
    if getattr(img, "is_animated", False):
        img = next(ImageSequence.Iterator(img)).convert("RGB")
    return img.convert("RGB")


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    for slug, rel_source in SOURCES.items():
        src_path = os.path.join(PUBLIC, rel_source)
        img = load_first_frame(src_path)
        thumb = center_crop_to_ratio(img, TARGET_W, TARGET_H)
        out_path = os.path.join(OUT_DIR, f"{slug}.webp")
        thumb.save(out_path, "WEBP", quality=80)
        print(f"{slug}: {rel_source} -> {os.path.relpath(out_path, ROOT)}")


if __name__ == "__main__":
    main()
