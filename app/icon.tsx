import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          background: "#1e3a5f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          fontSize: 24,
          color: "white",
          fontWeight: "bold",
        }}
      >
        HN
      </div>
    ),
    {
      width: 48,
      height: 48,
    }
  );
}
