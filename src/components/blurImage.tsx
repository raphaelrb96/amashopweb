import { Box } from "@mui/material";
import { useState } from "react";

export default function BlurImage({ ...props }) {
  const [isLoading, setLoading] = useState(false);

  return (
    <Box
      {...props}
      component="img"
      src={props.src}
      alt={props.alt}
      style={{
        // transition: "filter .3s ease-in-out,-webkit-filter .3s ease-in-out",
        ...(isLoading
          ? {
              filter: "blur(15px)",
            }
          : {
              filter: "blur(0px)",
            }),
      }}
      //onLoadingComplete={() => setLoading(false)}
    />
  );
}
