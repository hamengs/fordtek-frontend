from PIL import Image
import os
import sys

def crop_border_1px(input_path, output_path=None):
    img = Image.open(input_path)
    w, h = img.size

    if w <= 2 or h <= 2:
        raise ValueError("图片太小，裁掉四周 1px 后会没有内容")

    cropped = img.crop((1, 1, w - 1, h - 1))

    if output_path is None:
        name, ext = os.path.splitext(input_path)
        output_path = f"{name}_cropped{ext}"

    cropped.save(output_path)
    return output_path

if __name__ == "__main__":
    if len(sys.argv)<2:
        print("用法::python .\\tools\\crop.py 图片路径")
    else:
        input_path = sys.argv[1]
        output_path = sys.argv[2] if len(sys.argv)>2 else None
        result = crop_border_1px(input_path,output_path)
        print(f"已保存到:{result}")