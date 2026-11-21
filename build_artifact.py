# 生成网页版发布用的 artifact.html：取 index.html 的 body 内容，内联 style.css
# 用法：python build_artifact.py
import re
from pathlib import Path

root = Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")
css = (root / "style.css").read_text(encoding="utf-8")
body = re.search(r"<body>(.*)</body>", html, re.S).group(1).strip()
out = f"""<title>Maple English</title>
<style>
{css}
</style>
{body}
"""
(root / "artifact.html").write_text(out, encoding="utf-8")
scripts = re.findall(r'<script src="([^"]+)"', body)
print(f"artifact.html written, {len(scripts)} scripts")
