#!/usr/bin/env python3
"""Generate 576x336 center-cropped webp thumbnails for project list views."""

from pathlib import Path

from PIL import Image, ImageSequence

REPO_ROOT = Path(__file__).resolve().parent.parent
PUBLIC = REPO_ROOT / "public"
THUMBS_DIR = PUBLIC / "images/projects/thumbs"

TARGET_W, TARGET_H = 576, 336

SOURCES = {
    "ai-crm": "images/projects/ai-crm-sys-architecture.webp",
    "creativerush-media-lab": "images/lab/homepage/animation_scene_control.gif",
    "stable-diffusion-finetuning": "images/projects/naruto-sd.webp",
    "financial-analyst-chatbot": "images/projects/chatbot_inference.webp",
    "llm-pipeline": "images/projects/ml-times.webp",
    "stable-diffusion-benchmark": "images/projects/sd-bench-1.webp",
    "strike-the-pose": "images/projects/arcade/raw_preview.webp",
}


def center_crop_resize(img: Image.Image) -> Image.Image:
    img = img.convert("RGB")
    src_w, src_h = img.size
    target_ratio = TARGET_W / TARGET_H
    src_ratio = src_w / src_h

    if src_ratio > target_ratio:
        crop_h = src_h
        crop_w = int(crop_h * target_ratio)
    else:
        crop_w = src_w
        crop_h = int(crop_w / target_ratio)

    left = (src_w - crop_w) // 2
    top = (src_h - crop_h) // 2
    img = img.crop((left, top, left + crop_w, top + crop_h))
    return img.resize((TARGET_W, TARGET_H), Image.LANCZOS)


def main():
    THUMBS_DIR.mkdir(parents=True, exist_ok=True)
    for slug, rel_source in SOURCES.items():
        source_path = PUBLIC / rel_source
        with Image.open(source_path) as img:
            if getattr(img, "is_animated", False):
                frame = next(ImageSequence.Iterator(img))
                frame = frame.convert("RGB")
            else:
                frame = img
            out = center_crop_resize(frame)
            dest = THUMBS_DIR / f"{slug}.webp"
            out.save(dest, "WEBP", quality=80)
            print(f"{slug}: {source_path} -> {dest} ({dest.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
