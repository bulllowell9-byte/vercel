from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path.cwd()
OUT = ROOT / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)


def font(size: int):
    candidates = [
        "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/arial.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def gradient(size, top, bottom):
    width, height = size
    img = Image.new("RGB", size, top)
    draw = ImageDraw.Draw(img)
    for y in range(height):
        ratio = y / max(height - 1, 1)
        color = tuple(int(top[i] * (1 - ratio) + bottom[i] * ratio) for i in range(3))
        draw.line([(0, y), (width, y)], fill=color)
    return img


def soften_circle(img, xy, color, opacity):
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    draw.ellipse(xy, fill=(*color, opacity))
    layer = layer.filter(ImageFilter.GaussianBlur(18))
    img.alpha_composite(layer)


def centered_text(draw, text, y, fill, size):
    fnt = font(size)
    box = draw.textbbox((0, 0), text, font=fnt)
    draw.text(((1400 - (box[2] - box[0])) / 2, y), text, fill=fill, font=fnt)


def base_scene(title, filename, top, bottom, motif):
    img = gradient((1400, 1400), top, bottom).convert("RGBA")
    draw = ImageDraw.Draw(img)
    soften_circle(img, (870, -10, 1330, 450), (255, 250, 243), 110)
    soften_circle(img, (-120, 880, 480, 1480), (238, 225, 211), 95)
    draw.rounded_rectangle((165, 170, 1235, 1150), radius=42, fill=(255, 250, 243, 140))
    motif(draw)
    centered_text(draw, title, 1210, (29, 27, 24, 210), 58)
    draw.arc((560, 1238, 840, 1340), 20, 160, fill=(168, 156, 145, 160), width=8)
    img.convert("RGB").save(OUT / filename, quality=92, optimize=True)


def morning(draw):
    draw.rounded_rectangle((295, 260, 1105, 850), radius=28, fill="#f6f2eb")
    draw.rounded_rectangle((350, 315, 670, 795), radius=16, fill="#fff6e8")
    draw.rounded_rectangle((730, 315, 1050, 795), radius=16, fill="#f2e6d8")
    draw.line((700, 315, 700, 795), fill="#d8c8b7", width=20)
    draw.line((350, 555, 1050, 555), fill="#d8c8b7", width=18)
    draw.ellipse((450, 870, 950, 980), fill=(217, 199, 180, 130))
    draw.rounded_rectangle((520, 840, 880, 975), radius=24, fill="#fffaf3")
    draw.arc((580, 835, 820, 970), 200, 340, fill="#b6a18f", width=10)


def bible(draw):
    draw.ellipse((270, 845, 1130, 1015), fill=(217, 199, 180, 105))
    draw.polygon([(265, 470), (420, 420), (590, 440), (700, 535), (700, 970), (560, 880), (405, 850), (265, 910)], fill="#fffaf3")
    draw.polygon([(1135, 470), (980, 420), (810, 440), (700, 535), (700, 970), (840, 880), (995, 850), (1135, 910)], fill="#fff6e8")
    draw.line((700, 535, 700, 970), fill="#d1bfad", width=10)
    for offset, alpha in [(0, 210), (95, 145)]:
        draw.arc((350, 500 + offset, 665, 690 + offset), 210, 330, fill=(200, 184, 167, alpha), width=8)
        draw.arc((735, 500 + offset, 1050, 690 + offset), 210, 330, fill=(200, 184, 167, alpha), width=8)


def journal(draw):
    draw.rounded_rectangle((430, 305, 970, 1005), radius=36, fill="#fbf3e9")
    draw.rounded_rectangle((500, 390, 900, 424), radius=17, fill="#d8c8b7")
    for y, w, alpha in [(475, 360, 120), (535, 410, 95), (595, 310, 110)]:
        draw.rounded_rectangle((500, y, 500 + w, y + 18), radius=9, fill=(185, 167, 150, alpha))
    draw.arc((865, 730, 1050, 900), 95, 270, fill="#a89c91", width=18)
    draw.ellipse((925, 675, 1095, 845), fill=(255, 250, 243, 175))


def candle(draw):
    draw.rounded_rectangle((490, 540, 910, 970), radius=42, fill=(255, 250, 243, 210))
    draw.pieslice((620, 330, 780, 590), 235, 305, fill=(223, 181, 111, 185))
    draw.pieslice((655, 430, 745, 560), 235, 305, fill=(255, 246, 232, 235))
    draw.rounded_rectangle((600, 655, 800, 895), radius=24, fill="#f2e6d8")
    draw.ellipse((600, 630, 800, 680), fill=(255, 250, 243, 190))
    draw.arc((420, 865, 980, 1075), 20, 160, fill=(216, 200, 183, 165), width=24)


base_scene("morning prayer", "morning-window.png", (255, 250, 243), (234, 220, 202), morning)
base_scene("quiet scripture", "open-bible.png", (248, 239, 227), (255, 250, 243), bible)
base_scene("gentle routine", "linen-journal.png", (255, 250, 243), (238, 225, 211), journal)
base_scene("evening peace", "bedside-candle.png", (245, 235, 223), (255, 250, 243), candle)

og = Image.new("RGB", (1200, 630), "#fffaf3")
draw = ImageDraw.Draw(og)
draw.rounded_rectangle((60, 60, 1140, 570), radius=38, fill="#f8efe3")
draw.ellipse((855, 40, 1075, 260), fill="#eee1d3")
draw.text((120, 180), "Stillwater Faith", fill="#1d1b18", font=font(88))
draw.text((125, 310), "Prayer, peace, and daily encouragement.", fill="#6d6860", font=font(34))
draw.arc((125, 360, 530, 500), 20, 160, fill="#a89c91", width=10)
og.save(OUT / "og-stillwater.png", quality=92, optimize=True)
