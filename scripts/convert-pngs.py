from PIL import Image
from pathlib import Path

ROOT = Path("public/images")
TARGETS = [
    "doces/caixa-brigadeiros.png",
    "doces/latinhas-presenteaveis.png",
    "kits/kit-felicidade.png",
    "kits/kit-freixenet.png",
    "kits/kit-marselha.png",
    "kits/kit-provence.png",
]

QUALITY = 85

for rel in TARGETS:
    src = ROOT / rel
    dst = src.with_suffix(".webp")
    before = src.stat().st_size
    img = Image.open(src)
    if img.mode in ("RGBA", "LA", "P"):
        img = img.convert("RGBA")
    else:
        img = img.convert("RGB")
    img.save(dst, format="WEBP", quality=QUALITY, method=6)
    after = dst.stat().st_size
    src.unlink()
    pct = 100 * (1 - after / before)
    print(f"{rel} -> .webp  {before/1024:.0f}KB -> {after/1024:.0f}KB ({pct:.0f}% menor)")
