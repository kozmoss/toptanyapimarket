// material-ui
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import image1 from "@/public/assets/images/banner1.png";
import image2 from "@/public/assets/images/banner2.png";

// third-party

// project import

import Image from "next/image";

// ==============================|| LANDING - BROWSER  PAGE ||============================== //

export default function BrowserBlockPage() {
  const items = [
    {
      src: image1,
      description: "Hello World!",
    },
    {
      src: image2,
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      duration={2000}
      indicatorIconButtonProps={{
        style: {
          padding: "10px",
          color: "",
        },
      }}
    >
      {items?.map((item, i) => (
        <Box
          key={i}
          sx={{
            width: "90%",
            height: 500,
            overflow: "hidden",
          }}
        >
          <Image
            src={item.src}
            alt={item.description}
            layout="fill"
            objectFit="contain"
            // Resmi tamamen sığdır
          />
        </Box>
      ))}
    </Carousel>
  );
}
