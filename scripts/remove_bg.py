import os
from PIL import Image

# Paths
brain_dir = r"C:\Users\Computer Club\.gemini\antigravity\brain\4af0b918-a20d-42ef-824d-834fc574652e"
src_path = os.path.join(brain_dir, "hero_island_png_1794999132822.jpg")
proj_dir = r"C:\Users\Computer Club\Desktop\Vanam_Valley\vanam-valley"
# Destination inside project public folder
dest_path = os.path.join(proj_dir, "public", "images", "hero", "hero-island.png")

print(f"Loading {src_path}")
img = Image.open(src_path).convert("RGBA")

datas = img.getdata()
new_data = []
for item in datas:
    # treat near‑white as transparent
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)

img.putdata(new_data)
# ensure destination folder exists
os.makedirs(os.path.dirname(dest_path), exist_ok=True)
img.save(dest_path, "PNG")
print(f"Saved transparent PNG to {dest_path}")