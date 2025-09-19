"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false, // ẩn spinner tròn
  speed: 400, // tốc độ animation
  minimum: 0.2, // tốc độ animation
  trickleSpeed: 200, // nhích thêm mỗi 200ms
  easing: "ease-out", // kiểu easing
});

export default function ProgressBar() {
  const pathname = usePathname();
  
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    NProgress.start();

    if (timer.current) clearTimeout(timer.current); // xoá timer cũ (nếu có)

    timer.current = setTimeout(() => {
      NProgress.done(); // sau 500ms kết thúc progress bar
    }, 500);
    // timer.current bây giờ giữ ID của timer (do setTimeout trả về).

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [pathname]);

  return null;
}
