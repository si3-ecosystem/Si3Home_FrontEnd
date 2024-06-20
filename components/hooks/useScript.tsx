import { useEffect } from "react";

export default function useScript(url: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.type = "text/javascript";
    script.charset = "utf-8";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
}
