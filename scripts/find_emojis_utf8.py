import os
import re
import sys

emoji_pattern = re.compile(
    r'[\U0001f600-\U0001f64f\U0001f300-\U0001f5ff\U0001f680-\U0001f6ff\U0001f700-\U0001f77f\U0001f780-\U0001f7ff\U0001f800-\U0001f8ff\U0001f900-\U0001f9ff\U0001fa00-\U0001faff\u2600-\u26ff\u2700-\u27bf]'
)

def scan_for_emojis(directory):
    matches = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                except Exception as e:
                    continue
                
                for i, line in enumerate(lines):
                    found_emojis = set(emoji_pattern.findall(line))
                    if found_emojis:
                        matches.append({
                            'filepath': filepath,
                            'line_num': i + 1,
                            'line_content': line.strip(),
                            'emojis': list(found_emojis)
                        })
    return matches

if __name__ == "__main__":
    target_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'web', 'app'))
    matches = scan_for_emojis(target_dir)
    
    out_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '.tmp', 'emojis_utf8.txt'))
    
    with open(out_path, 'w', encoding='utf-8') as f:
        for m in matches:
            f.write(f"[{m['filepath']}:{m['line_num']}] {m['emojis']} -> {m['line_content']}\n")
    print(f"Done. Wrote to {out_path}")
