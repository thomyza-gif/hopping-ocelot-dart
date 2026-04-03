import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#1e3a5f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 24,
          fontSize: 72,
          color: "white",
          fontWeight: "bold",
        }}
      >
        HN
      </div>
    ),
    {
      width: 180,
      height: 180,
    }
  );
}
