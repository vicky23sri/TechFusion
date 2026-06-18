import sys

with open("src/main.js", "r") as f:
    lines = f.readlines()

# Look for the exact comment markers
start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if "// 1.5. SPONSORED PROJECT TRACKS TAB CONTROL" in line:
        start_idx = i - 1
    if "// 3. HARDWARE SHOWCASE EXPLODED LAYER INTERACTIVES" in line:
        end_idx = i - 1
        break

if start_idx != -1 and end_idx != -1:
    del lines[start_idx:end_idx]
    with open("src/main.js", "w") as f:
        f.writelines(lines)
    print(f"Successfully deleted {end_idx - start_idx} lines.")
else:
    print("Could not find markers.")
