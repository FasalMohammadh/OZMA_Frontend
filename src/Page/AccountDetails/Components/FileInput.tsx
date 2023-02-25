import React, { useState } from "react";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const FileInput = React.forwardRef(
  (
    { placeholder, ...props }: FileInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [image, setImage] = useState<string | null>(null);

    return (
      <>
        <label className="flex h-6 cursor-pointer justify-between border-b-2 border-custom-input px-3 text-left font-poppins text-sm text-custom-input">
          {placeholder}
          <input
            ref={ref}
            type="file"
            className={"hidden"}
            accept=".png,.jpeg,.jpg"
            {...props}
            onChange={(event) => {
              if (event.target.files?.length) {
                setImage(URL.createObjectURL(event.target.files[0]));
              }
              props.onChange?.(event);
            }}
          />
        </label>
        {image && (
          <img
            src={image}
            alt="Image"
            className=" mt-5 aspect-square max-w-[150px] rounded-sm object-cover ring-1 ring-custom-input"
          />
        )}
      </>
    );
  }
);

FileInput.displayName = "FileInput";

export default React.memo(FileInput);
