'use client';

import { useEffect } from 'react';

export default function GoogleAdSense() {
  useEffect(() => {
    // 在客户端加载Google AdSense脚本
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8115477477403051';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    return () => {
      // 清理脚本
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // 这个组件不渲染任何内容
}
