import Inner from "./inner";
import "./globals.css";
import type { AppProps } from "@/lib/types";

export default function Classic (_props: AppProps){
  return (
    <div className="p-4">
      <Inner />
    </div>
  )
}
