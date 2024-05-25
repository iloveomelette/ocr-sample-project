'use client';

import { ChangeEvent, DragEvent, useState } from 'react';
import { createWorker } from 'tesseract.js';

import { Input } from "@/components/ui/input"

const FileUploader = () => {
  const [outputText, setOutputText] = useState<string>('');

  const generateTextFromUploadedFile = async (file: File) => {
    const worker = await createWorker(['eng', 'jpn']);
    const ret = await worker.recognize(file);
    setOutputText(ret.data.text);
    await worker.terminate();
  }

  const onChangeFileInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      generateTextFromUploadedFile(target.files[0]);
    }
  }

  const onDragFile = (e: DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    if (files) {
      generateTextFromUploadedFile(files[0]);
    }
  }

  return (
    <>
      <Input
        type="file"
        name="file"
        className='mt-6'
        onChange={(e) => onChangeFileInput(e)}
        onDrop={(e) => onDragFile(e)}
        onDragOver={(e) => e.preventDefault()}
      />

      <div className="mt-6">
        <p>Output:</p>
        {outputText !== '' && (
          <pre className="mt-2 p-2 border border-input rounded-lg">
            {outputText}
          </pre>
        )}
      </div>
    </>
  );
}

export { FileUploader };
