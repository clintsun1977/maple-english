# 给 index.html 里的脚本和样式加上版本号（?v=...），让浏览器在更新后重新下载，避免新旧文件混用
# 用法：python set_version.py
import re, time
from pathlib import Path

p = Path(__file__).parent / "index.html"
html = p.read_text(encoding="utf-8")
ver = time.strftime("%Y%m%d%H%M")
html = re.sub(r'(src|href)="((?:data/)?[\w.-]+\.(?:js|css))(?:\?v=\w+)?"', rf'\1="\2?v={ver}"', html)
p.write_text(html, encoding="utf-8")
print("version", ver, "-", html.count(f"?v={ver}"), "files")
