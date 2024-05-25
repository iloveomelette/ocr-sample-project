import { FileUploader } from "@/components/file-uploader";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <div className="max-w-[600px] mx-auto py-48">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">OCR Sample Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Generate text from images</p>
            <FileUploader />
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400">Powered by Tesseract.js</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
